import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppsTransferOwnershipRawSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppsTransferOwnershipRawRequest extends SpeakeasyBase {
    /**
     * allow empty body for custom http-client lib
     */
    requestBody?: Uint8Array;
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
export declare enum AppsTransferOwnershipRawDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppsTransferOwnershipRawDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppsTransferOwnershipRawDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppsTransferOwnershipRawDefaultApplicationJSON extends SpeakeasyBase {
    error: AppsTransferOwnershipRawDefaultApplicationJSONError;
}
export declare class AppsTransferOwnershipRaw200ApplicationJSONAzureSubscription extends SpeakeasyBase {
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
export declare enum AppsTransferOwnershipRaw200ApplicationJSONMemberPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * The creation origin of this app
 */
export declare enum AppsTransferOwnershipRaw200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
/**
 * The OS the app will be running on
 */
export declare enum AppsTransferOwnershipRaw200ApplicationJSONOsEnum {
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
export declare enum AppsTransferOwnershipRaw200ApplicationJSONOwnerTypeEnum {
    Org = "org",
    User = "user"
}
/**
 * The information about the app's owner
 */
export declare class AppsTransferOwnershipRaw200ApplicationJSONOwner extends SpeakeasyBase {
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
    type: AppsTransferOwnershipRaw200ApplicationJSONOwnerTypeEnum;
}
/**
 * The platform of the app
 */
export declare enum AppsTransferOwnershipRaw200ApplicationJSONPlatformEnum {
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
export declare class AppsTransferOwnershipRaw200ApplicationJSON extends SpeakeasyBase {
    /**
     * A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
     */
    appSecret: string;
    azureSubscription?: AppsTransferOwnershipRaw200ApplicationJSONAzureSubscription;
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
    memberPermissions?: AppsTransferOwnershipRaw200ApplicationJSONMemberPermissionsEnum[];
    /**
     * The name of the app used in URLs
     */
    name: string;
    /**
     * The creation origin of this app
     */
    origin: AppsTransferOwnershipRaw200ApplicationJSONOriginEnum;
    /**
     * The OS the app will be running on
     */
    os: AppsTransferOwnershipRaw200ApplicationJSONOsEnum;
    /**
     * The information about the app's owner
     */
    owner: AppsTransferOwnershipRaw200ApplicationJSONOwner;
    /**
     * The platform of the app
     */
    platform: AppsTransferOwnershipRaw200ApplicationJSONPlatformEnum;
    /**
     * A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
     */
    releaseType?: string;
    /**
     * The last updated date of this app
     */
    updatedAt?: string;
}
export declare class AppsTransferOwnershipRawResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appsTransferOwnershipRaw200ApplicationJSONObject?: AppsTransferOwnershipRaw200ApplicationJSON;
    /**
     * Error
     */
    appsTransferOwnershipRawDefaultApplicationJSONObject?: AppsTransferOwnershipRawDefaultApplicationJSON;
}
