import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppsTransferOwnershipJsonSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppsTransferOwnershipJsonRequest extends SpeakeasyBase {
    /**
     * allow empty body for custom http-client lib
     */
    requestBody?: Record<string, any>;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner (user or organization) to which the app is being transferred
     */
    destinationOwnerName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppsTransferOwnershipJSONDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppsTransferOwnershipJSONDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppsTransferOwnershipJSONDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppsTransferOwnershipJSONDefaultApplicationJSON extends SpeakeasyBase {
    error: AppsTransferOwnershipJSONDefaultApplicationJSONError;
}
export declare class AppsTransferOwnershipJson200ApplicationJSONAzureSubscription extends SpeakeasyBase {
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
export declare enum AppsTransferOwnershipJson200ApplicationJSONMemberPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * The creation origin of this app
 */
export declare enum AppsTransferOwnershipJson200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
/**
 * The OS the app will be running on
 */
export declare enum AppsTransferOwnershipJson200ApplicationJSONOsEnum {
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
export declare enum AppsTransferOwnershipJson200ApplicationJSONOwnerTypeEnum {
    Org = "org",
    User = "user"
}
/**
 * The information about the app's owner
 */
export declare class AppsTransferOwnershipJson200ApplicationJSONOwner extends SpeakeasyBase {
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
    type: AppsTransferOwnershipJson200ApplicationJSONOwnerTypeEnum;
}
/**
 * The platform of the app
 */
export declare enum AppsTransferOwnershipJson200ApplicationJSONPlatformEnum {
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
/**
 * Success
 */
export declare class AppsTransferOwnershipJson200ApplicationJSON extends SpeakeasyBase {
    /**
     * A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
     */
    appSecret: string;
    azureSubscription?: AppsTransferOwnershipJson200ApplicationJSONAzureSubscription;
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
    memberPermissions?: AppsTransferOwnershipJson200ApplicationJSONMemberPermissionsEnum[];
    /**
     * The name of the app used in URLs
     */
    name: string;
    /**
     * The creation origin of this app
     */
    origin: AppsTransferOwnershipJson200ApplicationJSONOriginEnum;
    /**
     * The OS the app will be running on
     */
    os: AppsTransferOwnershipJson200ApplicationJSONOsEnum;
    /**
     * The information about the app's owner
     */
    owner: AppsTransferOwnershipJson200ApplicationJSONOwner;
    /**
     * The platform of the app
     */
    platform: AppsTransferOwnershipJson200ApplicationJSONPlatformEnum;
    /**
     * A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
     */
    releaseType?: string;
    /**
     * The last updated date of this app
     */
    updatedAt?: string;
}
export declare class AppsTransferOwnershipJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appsTransferOwnershipJSON200ApplicationJSONObject?: AppsTransferOwnershipJson200ApplicationJSON;
    /**
     * Error
     */
    appsTransferOwnershipJSONDefaultApplicationJSONObject?: AppsTransferOwnershipJSONDefaultApplicationJSON;
}
