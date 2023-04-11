import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsUpdatePermissionsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare enum TeamsUpdatePermissionsRequestBodyPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer"
}
export declare class TeamsUpdatePermissionsRequestBody extends SpeakeasyBase {
    /**
     * The permissions all members of the team have on the app
     */
    permissions: TeamsUpdatePermissionsRequestBodyPermissionsEnum[];
}
export declare class TeamsUpdatePermissionsRequest extends SpeakeasyBase {
    requestBody: TeamsUpdatePermissionsRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The team's name
     */
    teamName: string;
}
export declare enum TeamsUpdatePermissionsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsUpdatePermissionsDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsUpdatePermissionsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsUpdatePermissionsDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsUpdatePermissionsDefaultApplicationJSONError;
}
export declare class TeamsUpdatePermissions200ApplicationJSONAzureSubscription extends SpeakeasyBase {
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
export declare enum TeamsUpdatePermissions200ApplicationJSONMemberPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * The creation origin of this app
 */
export declare enum TeamsUpdatePermissions200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
/**
 * The OS the app will be running on
 */
export declare enum TeamsUpdatePermissions200ApplicationJSONOsEnum {
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
export declare enum TeamsUpdatePermissions200ApplicationJSONOwnerTypeEnum {
    Org = "org",
    User = "user"
}
/**
 * The information about the app's owner
 */
export declare class TeamsUpdatePermissions200ApplicationJSONOwner extends SpeakeasyBase {
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
    type: TeamsUpdatePermissions200ApplicationJSONOwnerTypeEnum;
}
/**
 * The platform of the app
 */
export declare enum TeamsUpdatePermissions200ApplicationJSONPlatformEnum {
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
export declare enum TeamsUpdatePermissions200ApplicationJSONTeamPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer"
}
/**
 * Success
 */
export declare class TeamsUpdatePermissions200ApplicationJSON extends SpeakeasyBase {
    /**
     * A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
     */
    appSecret: string;
    azureSubscription?: TeamsUpdatePermissions200ApplicationJSONAzureSubscription;
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
    memberPermissions?: TeamsUpdatePermissions200ApplicationJSONMemberPermissionsEnum[];
    /**
     * The name of the app used in URLs
     */
    name: string;
    /**
     * The creation origin of this app
     */
    origin: TeamsUpdatePermissions200ApplicationJSONOriginEnum;
    /**
     * The OS the app will be running on
     */
    os: TeamsUpdatePermissions200ApplicationJSONOsEnum;
    /**
     * The information about the app's owner
     */
    owner: TeamsUpdatePermissions200ApplicationJSONOwner;
    /**
     * The platform of the app
     */
    platform: TeamsUpdatePermissions200ApplicationJSONPlatformEnum;
    /**
     * A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
     */
    releaseType?: string;
    /**
     * The permissions the team has for the app
     */
    teamPermissions?: TeamsUpdatePermissions200ApplicationJSONTeamPermissionsEnum[];
    /**
     * The last updated date of this app
     */
    updatedAt?: string;
}
export declare class TeamsUpdatePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    teamsUpdatePermissions200ApplicationJSONObject?: TeamsUpdatePermissions200ApplicationJSON;
    /**
     * Error
     */
    teamsUpdatePermissionsDefaultApplicationJSONObject?: TeamsUpdatePermissionsDefaultApplicationJSON;
}
