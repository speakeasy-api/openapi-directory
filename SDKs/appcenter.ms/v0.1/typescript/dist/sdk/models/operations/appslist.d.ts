import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The name of the attribute by which to order the response by. By default, apps are in order of creation. All results are ordered in ascending order.
 */
export declare enum AppsListDollarOrderByEnum {
    DisplayName = "display_name",
    Name = "name"
}
export declare class AppsListRequest extends SpeakeasyBase {
    /**
     * The name of the attribute by which to order the response by. By default, apps are in order of creation. All results are ordered in ascending order.
     */
    dollarOrderBy?: AppsListDollarOrderByEnum;
}
export declare enum AppsListDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppsListDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppsListDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppsListDefaultApplicationJSON extends SpeakeasyBase {
    error: AppsListDefaultApplicationJSONError;
}
export declare class AppsList200ApplicationJSONAzureSubscription extends SpeakeasyBase {
    /**
     * If the subscription can be used for billing
     */
    isBillable?: boolean;
    /**
     * If the subscription is used for billing
     */
    isBilling?: boolean;
    /**
     * If the subscription is internal Microsoft subscription
     */
    isMicrosoftInternal?: boolean;
    /**
     * The azure subscription id
     */
    subscriptionId: string;
    /**
     * The name of the azure subscription
     */
    subscriptionName: string;
    /**
     * The tenant id of the azure subscription belongs to
     */
    tenantId: string;
}
export declare enum AppsList200ApplicationJSONMemberPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * The creation origin of this app
 */
export declare enum AppsList200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
/**
 * The OS the app will be running on
 */
export declare enum AppsList200ApplicationJSONOsEnum {
    Android = "Android",
    IOS = "iOS",
    MacOS = "macOS",
    Tizen = "Tizen",
    TvOS = "tvOS",
    Windows = "Windows",
    Linux = "Linux",
    Custom = "Custom"
}
/**
 * The owner type. Can either be 'org' or 'user'
 */
export declare enum AppsList200ApplicationJSONOwnerTypeEnum {
    Org = "org",
    User = "user"
}
/**
 * The information about the app's owner
 */
export declare class AppsList200ApplicationJSONOwner extends SpeakeasyBase {
    /**
     * The avatar URL of the owner
     */
    avatarUrl?: string;
    /**
     * The owner's display name
     */
    displayName: string;
    /**
     * The owner's email address
     */
    email?: string;
    /**
     * The unique id (UUID) of the owner
     */
    id: string;
    /**
     * The unique name that used to identify the owner
     */
    name: string;
    /**
     * The owner type. Can either be 'org' or 'user'
     */
    type: AppsList200ApplicationJSONOwnerTypeEnum;
}
/**
 * The platform of the app
 */
export declare enum AppsList200ApplicationJSONPlatformEnum {
    Java = "Java",
    ObjectiveCSwift = "Objective-C-Swift",
    Uwp = "UWP",
    Cordova = "Cordova",
    ReactNative = "React-Native",
    Unity = "Unity",
    Electron = "Electron",
    Xamarin = "Xamarin",
    Wpf = "WPF",
    WinForms = "WinForms",
    Unknown = "Unknown",
    Custom = "Custom"
}
export declare class AppsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
     */
    appSecret: string;
    azureSubscription?: AppsList200ApplicationJSONAzureSubscription;
    /**
     * The created date of this app
     */
    createdAt?: string;
    /**
     * The description of the app
     */
    description?: string;
    /**
     * The display name of the app
     */
    displayName: string;
    /**
     * The string representation of the source of the app's icon
     */
    iconSource?: string;
    /**
     * The string representation of the URL pointing to the app's icon
     */
    iconUrl?: string;
    /**
     * The unique ID (UUID) of the app
     */
    id: string;
    /**
     * The permissions of the calling user
     */
    memberPermissions?: AppsList200ApplicationJSONMemberPermissionsEnum[];
    /**
     * The name of the app used in URLs
     */
    name: string;
    /**
     * The creation origin of this app
     */
    origin: AppsList200ApplicationJSONOriginEnum;
    /**
     * The OS the app will be running on
     */
    os: AppsList200ApplicationJSONOsEnum;
    /**
     * The information about the app's owner
     */
    owner: AppsList200ApplicationJSONOwner;
    /**
     * The platform of the app
     */
    platform: AppsList200ApplicationJSONPlatformEnum;
    /**
     * A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
     */
    releaseType?: string;
    /**
     * The last updated date of this app
     */
    updatedAt?: string;
}
export declare class AppsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appsList200ApplicationJSONAnies?: AppsList200ApplicationJSON[];
    /**
     * Error
     */
    appsListDefaultApplicationJSONObject?: AppsListDefaultApplicationJSON;
}
