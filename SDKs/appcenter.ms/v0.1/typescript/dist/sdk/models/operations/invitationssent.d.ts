import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum InvitationsSentDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class InvitationsSentDefaultApplicationJSONError extends SpeakeasyBase {
    code: InvitationsSentDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class InvitationsSentDefaultApplicationJSON extends SpeakeasyBase {
    error: InvitationsSentDefaultApplicationJSONError;
}
export declare class InvitationsSent200ApplicationJSONAppAzureSubscription extends SpeakeasyBase {
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
export declare enum InvitationsSent200ApplicationJSONAppMemberPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * The creation origin of this app
 */
export declare enum InvitationsSent200ApplicationJSONAppOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
/**
 * The OS the app will be running on
 */
export declare enum InvitationsSent200ApplicationJSONAppOsEnum {
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
export declare enum InvitationsSent200ApplicationJSONAppOwnerTypeEnum {
    Org = "org",
    User = "user"
}
/**
 * The information about the app's owner
 */
export declare class InvitationsSent200ApplicationJSONAppOwner extends SpeakeasyBase {
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
    type: InvitationsSent200ApplicationJSONAppOwnerTypeEnum;
}
/**
 * The platform of the app
 */
export declare enum InvitationsSent200ApplicationJSONAppPlatformEnum {
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
export declare class InvitationsSent200ApplicationJSONApp extends SpeakeasyBase {
    /**
     * A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
     */
    appSecret: string;
    azureSubscription?: InvitationsSent200ApplicationJSONAppAzureSubscription;
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
    memberPermissions?: InvitationsSent200ApplicationJSONAppMemberPermissionsEnum[];
    /**
     * The name of the app used in URLs
     */
    name: string;
    /**
     * The creation origin of this app
     */
    origin: InvitationsSent200ApplicationJSONAppOriginEnum;
    /**
     * The OS the app will be running on
     */
    os: InvitationsSent200ApplicationJSONAppOsEnum;
    /**
     * The information about the app's owner
     */
    owner: InvitationsSent200ApplicationJSONAppOwner;
    /**
     * The platform of the app
     */
    platform: InvitationsSent200ApplicationJSONAppPlatformEnum;
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
 * The creation origin of this organization
 */
export declare enum InvitationsSent200ApplicationJSONOrganizationOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
export declare class InvitationsSent200ApplicationJSONOrganization extends SpeakeasyBase {
    /**
     * The URL to a user-uploaded Avatar image
     */
    avatarUrl?: string;
    /**
     * The creation date of this organization
     */
    createdAt: string;
    /**
     * The display name of the organization
     */
    displayName: string;
    /**
     * The internal unique id (UUID) of the organization.
     */
    id: string;
    /**
     * The slug name of the organization
     */
    name: string;
    /**
     * The creation origin of this organization
     */
    origin: InvitationsSent200ApplicationJSONOrganizationOriginEnum;
    /**
     * The date the organization was last updated at
     */
    updatedAt: string;
}
export declare class InvitationsSent200ApplicationJSON extends SpeakeasyBase {
    app?: InvitationsSent200ApplicationJSONApp;
    /**
     * The id of the invitation
     */
    invitationId: string;
    organization?: InvitationsSent200ApplicationJSONOrganization;
}
export declare class InvitationsSentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    invitationsSent200ApplicationJSONObjects?: InvitationsSent200ApplicationJSON[];
    /**
     * Error
     */
    invitationsSentDefaultApplicationJSONObject?: InvitationsSentDefaultApplicationJSON;
}
