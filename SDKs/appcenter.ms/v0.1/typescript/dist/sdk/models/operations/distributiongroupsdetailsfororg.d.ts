import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsDetailsForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsDetailsForOrgRequest extends SpeakeasyBase {
    /**
     * The max number of apps to include in the response
     */
    appsLimit?: number;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum DistributionGroupsDetailsForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsDetailsForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsDetailsForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsDetailsForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsDetailsForOrgDefaultApplicationJSONError;
}
export declare class DistributionGroupsDetailsForOrg200ApplicationJSONAppsAzureSubscription extends SpeakeasyBase {
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
export declare enum DistributionGroupsDetailsForOrg200ApplicationJSONAppsMemberPermissionsEnum {
    Manager = "manager",
    Developer = "developer",
    Viewer = "viewer",
    Tester = "tester"
}
/**
 * The creation origin of this app
 */
export declare enum DistributionGroupsDetailsForOrg200ApplicationJSONAppsOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp",
    Codepush = "codepush"
}
/**
 * The OS the app will be running on
 */
export declare enum DistributionGroupsDetailsForOrg200ApplicationJSONAppsOsEnum {
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
export declare enum DistributionGroupsDetailsForOrg200ApplicationJSONAppsOwnerTypeEnum {
    Org = "org",
    User = "user"
}
/**
 * The information about the app's owner
 */
export declare class DistributionGroupsDetailsForOrg200ApplicationJSONAppsOwner extends SpeakeasyBase {
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
    type: DistributionGroupsDetailsForOrg200ApplicationJSONAppsOwnerTypeEnum;
}
/**
 * The platform of the app
 */
export declare enum DistributionGroupsDetailsForOrg200ApplicationJSONAppsPlatformEnum {
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
export declare class DistributionGroupsDetailsForOrg200ApplicationJSONApps extends SpeakeasyBase {
    /**
     * A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
     */
    appSecret: string;
    azureSubscription?: DistributionGroupsDetailsForOrg200ApplicationJSONAppsAzureSubscription;
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
    memberPermissions?: DistributionGroupsDetailsForOrg200ApplicationJSONAppsMemberPermissionsEnum[];
    /**
     * The name of the app used in URLs
     */
    name: string;
    /**
     * The creation origin of this app
     */
    origin: DistributionGroupsDetailsForOrg200ApplicationJSONAppsOriginEnum;
    /**
     * The OS the app will be running on
     */
    os: DistributionGroupsDetailsForOrg200ApplicationJSONAppsOsEnum;
    /**
     * The information about the app's owner
     */
    owner: DistributionGroupsDetailsForOrg200ApplicationJSONAppsOwner;
    /**
     * The platform of the app
     */
    platform: DistributionGroupsDetailsForOrg200ApplicationJSONAppsPlatformEnum;
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
 * The creation origin of this distribution group
 */
export declare enum DistributionGroupsDetailsForOrg200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
export declare class DistributionGroupsDetailsForOrg200ApplicationJSON extends SpeakeasyBase {
    /**
     * The apps associated with the distribution group
     */
    apps: DistributionGroupsDetailsForOrg200ApplicationJSONApps[];
    /**
     * The name of the distribution group
     */
    displayName?: string;
    /**
     * The unique ID of the distribution group
     */
    id: string;
    /**
     * Whether the distribution group is public
     */
    isPublic: boolean;
    /**
     * The name of the distribution group used in URLs
     */
    name: string;
    /**
     * The creation origin of this distribution group
     */
    origin: DistributionGroupsDetailsForOrg200ApplicationJSONOriginEnum;
    /**
     * The count of apps associated with this distribution group
     */
    totalAppsCount: number;
    /**
     * The count of users in the distribution group
     */
    totalUsersCount: number;
}
export declare class DistributionGroupsDetailsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsDetailsForOrg200ApplicationJSONAnies?: DistributionGroupsDetailsForOrg200ApplicationJSON[];
    /**
     * Error
     */
    distributionGroupsDetailsForOrgDefaultApplicationJSONObject?: DistributionGroupsDetailsForOrgDefaultApplicationJSON;
}
