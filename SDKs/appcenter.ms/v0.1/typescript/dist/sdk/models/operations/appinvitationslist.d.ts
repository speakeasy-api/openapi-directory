import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppInvitationsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppInvitationsListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppInvitationsListDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AppInvitationsListDefaultApplicationJSONError extends SpeakeasyBase {
    code: AppInvitationsListDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class AppInvitationsListDefaultApplicationJSON extends SpeakeasyBase {
    error: AppInvitationsListDefaultApplicationJSONError;
}
export declare class AppInvitationsList200ApplicationJSONAppAzureSubscription extends SpeakeasyBase {
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
export declare enum AppInvitationsList200ApplicationJSONAppMemberPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * The creation origin of this app
 */
export declare enum AppInvitationsList200ApplicationJSONAppOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
/**
 * The OS the app will be running on
 */
export declare enum AppInvitationsList200ApplicationJSONAppOsEnum {
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
export declare enum AppInvitationsList200ApplicationJSONAppOwnerTypeEnum {
    Org = "org",
    User = "user"
}
/**
 * The information about the app's owner
 */
export declare class AppInvitationsList200ApplicationJSONAppOwner extends SpeakeasyBase {
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
    type: AppInvitationsList200ApplicationJSONAppOwnerTypeEnum;
}
/**
 * The platform of the app
 */
export declare enum AppInvitationsList200ApplicationJSONAppPlatformEnum {
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
export declare class AppInvitationsList200ApplicationJSONApp extends SpeakeasyBase {
    /**
     * A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
     */
    appSecret: string;
    azureSubscription?: AppInvitationsList200ApplicationJSONAppAzureSubscription;
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
    memberPermissions?: AppInvitationsList200ApplicationJSONAppMemberPermissionsEnum[];
    /**
     * The name of the app used in URLs
     */
    name: string;
    /**
     * The creation origin of this app
     */
    origin: AppInvitationsList200ApplicationJSONAppOriginEnum;
    /**
     * The OS the app will be running on
     */
    os: AppInvitationsList200ApplicationJSONAppOsEnum;
    /**
     * The information about the app's owner
     */
    owner: AppInvitationsList200ApplicationJSONAppOwner;
    /**
     * The platform of the app
     */
    platform: AppInvitationsList200ApplicationJSONAppPlatformEnum;
    /**
     * A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
     */
    releaseType?: string;
    /**
     * The last updated date of this app
     */
    updatedAt?: string;
}
/**
 * The owner type. Can either be 'org' or 'user'
 */
export declare enum AppInvitationsList200ApplicationJSONDistributionGroupOwnerTypeEnum {
    Org = "org",
    User = "user"
}
/**
 * The information about the app's owner
 */
export declare class AppInvitationsList200ApplicationJSONDistributionGroupOwner extends SpeakeasyBase {
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
    type: AppInvitationsList200ApplicationJSONDistributionGroupOwnerTypeEnum;
}
/**
 * The organization that owns the distribution group, if it exists
 */
export declare class AppInvitationsList200ApplicationJSONDistributionGroup extends SpeakeasyBase {
    /**
     * The information about the app's owner
     */
    owner?: AppInvitationsList200ApplicationJSONDistributionGroupOwner;
}
/**
 * The invitation type
 */
export declare enum AppInvitationsList200ApplicationJSONInviteTypeEnum {
    Developer = "developer",
    Tester = "tester"
}
/**
 * The creation origin of this user
 */
export declare enum AppInvitationsList200ApplicationJSONInvitedByOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
export declare enum AppInvitationsList200ApplicationJSONInvitedByPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
export declare class AppInvitationsList200ApplicationJSONInvitedBy extends SpeakeasyBase {
    /**
     * The avatar URL of the user
     */
    avatarUrl?: string;
    /**
     * User is required to send an old password in order to change the password.
     */
    canChangePassword?: boolean;
    /**
     * The full name of the user. Might for example be first and last name
     */
    displayName: string;
    /**
     * The email address of the user
     */
    email: string;
    /**
     * The unique id (UUID) of the user
     */
    id: string;
    /**
     * The unique name that is used to identify the user.
     */
    name: string;
    /**
     * The creation origin of this user
     */
    origin: AppInvitationsList200ApplicationJSONInvitedByOriginEnum;
    /**
     * The permissions the user has for the app
     */
    permissions?: AppInvitationsList200ApplicationJSONInvitedByPermissionsEnum[];
}
export declare enum AppInvitationsList200ApplicationJSONPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * Success
 */
export declare class AppInvitationsList200ApplicationJSON extends SpeakeasyBase {
    app: AppInvitationsList200ApplicationJSONApp;
    /**
     * The number of apps in the group
     */
    appCount?: number;
    /**
     * The organization that owns the distribution group, if it exists
     */
    distributionGroup?: AppInvitationsList200ApplicationJSONDistributionGroup;
    /**
     * The email address of the invited user
     */
    email: string;
    /**
     * The unique ID (UUID) of the invitation
     */
    id: string;
    /**
     * The invitation type
     */
    inviteType: AppInvitationsList200ApplicationJSONInviteTypeEnum;
    invitedBy: AppInvitationsList200ApplicationJSONInvitedBy;
    /**
     * Indicates whether the invited user already exists
     */
    isExistingUser: boolean;
    /**
     * The permissions the user has for the app
     */
    permissions?: AppInvitationsList200ApplicationJSONPermissionsEnum[];
}
export declare class AppInvitationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appInvitationsList200ApplicationJSONObject?: AppInvitationsList200ApplicationJSON;
    /**
     * Error
     */
    appInvitationsListDefaultApplicationJSONObject?: AppInvitationsListDefaultApplicationJSON;
}
