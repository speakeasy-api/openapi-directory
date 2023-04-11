import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsAddAppSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The name of the app to be added to the team. The app has to be owned by the organization.
 */
export declare class TeamsAddAppRequestBody extends SpeakeasyBase {
    /**
     * The name of the app to be added to the distribution group
     */
    name: string;
}
export declare class TeamsAddAppRequest extends SpeakeasyBase {
    /**
     * The name of the app to be added to the team. The app has to be owned by the organization.
     */
    requestBody: TeamsAddAppRequestBody;
    /**
     * The organization's name
     */
    orgName: string;
    /**
     * The team's name
     */
    teamName: string;
}
export declare enum TeamsAddAppDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class TeamsAddAppDefaultApplicationJSONError extends SpeakeasyBase {
    code: TeamsAddAppDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class TeamsAddAppDefaultApplicationJSON extends SpeakeasyBase {
    error: TeamsAddAppDefaultApplicationJSONError;
}
export declare class TeamsAddApp201ApplicationJSONAzureSubscription extends SpeakeasyBase {
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
export declare enum TeamsAddApp201ApplicationJSONMemberPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * The creation origin of this app
 */
export declare enum TeamsAddApp201ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
/**
 * The OS the app will be running on
 */
export declare enum TeamsAddApp201ApplicationJSONOsEnum {
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
export declare enum TeamsAddApp201ApplicationJSONOwnerTypeEnum {
    Org = "org",
    User = "user"
}
/**
 * The information about the app's owner
 */
export declare class TeamsAddApp201ApplicationJSONOwner extends SpeakeasyBase {
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
    type: TeamsAddApp201ApplicationJSONOwnerTypeEnum;
}
/**
 * The platform of the app
 */
export declare enum TeamsAddApp201ApplicationJSONPlatformEnum {
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
export declare enum TeamsAddApp201ApplicationJSONTeamPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer"
}
/**
 * Success
 */
export declare class TeamsAddApp201ApplicationJSON extends SpeakeasyBase {
    /**
     * A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
     */
    appSecret: string;
    azureSubscription?: TeamsAddApp201ApplicationJSONAzureSubscription;
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
    memberPermissions?: TeamsAddApp201ApplicationJSONMemberPermissionsEnum[];
    /**
     * The name of the app used in URLs
     */
    name: string;
    /**
     * The creation origin of this app
     */
    origin: TeamsAddApp201ApplicationJSONOriginEnum;
    /**
     * The OS the app will be running on
     */
    os: TeamsAddApp201ApplicationJSONOsEnum;
    /**
     * The information about the app's owner
     */
    owner: TeamsAddApp201ApplicationJSONOwner;
    /**
     * The platform of the app
     */
    platform: TeamsAddApp201ApplicationJSONPlatformEnum;
    /**
     * A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
     */
    releaseType?: string;
    /**
     * The permissions the team has for the app
     */
    teamPermissions?: TeamsAddApp201ApplicationJSONTeamPermissionsEnum[];
    /**
     * The last updated date of this app
     */
    updatedAt?: string;
}
export declare class TeamsAddAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    teamsAddApp201ApplicationJSONObject?: TeamsAddApp201ApplicationJSON;
    /**
     * Error
     */
    teamsAddAppDefaultApplicationJSONObject?: TeamsAddAppDefaultApplicationJSON;
}
