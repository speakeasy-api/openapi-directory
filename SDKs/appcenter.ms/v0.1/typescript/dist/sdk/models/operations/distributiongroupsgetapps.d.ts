import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsGetAppsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsGetAppsRequest extends SpeakeasyBase {
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The organization's name
     */
    orgName: string;
}
/**
 * The OS the app will be running on
 */
export declare enum DistributionGroupsGetApps200ApplicationJSONOsEnum {
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
export declare enum DistributionGroupsGetApps200ApplicationJSONOwnerTypeEnum {
    Org = "org",
    User = "user"
}
/**
 * The information about the app's owner
 */
export declare class DistributionGroupsGetApps200ApplicationJSONOwner extends SpeakeasyBase {
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
    type: DistributionGroupsGetApps200ApplicationJSONOwnerTypeEnum;
}
export declare class DistributionGroupsGetApps200ApplicationJSON extends SpeakeasyBase {
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
     * The name of the app used in URLs
     */
    name: string;
    /**
     * The creation origin of this app
     */
    origin?: string;
    /**
     * The OS the app will be running on
     */
    os: DistributionGroupsGetApps200ApplicationJSONOsEnum;
    /**
     * The information about the app's owner
     */
    owner: DistributionGroupsGetApps200ApplicationJSONOwner;
    /**
     * The platform of the app
     */
    platform?: string;
    /**
     * A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
     */
    releaseType?: string;
}
export declare class DistributionGroupsGetAppsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsGetApps200ApplicationJSONAnies?: DistributionGroupsGetApps200ApplicationJSON[];
}
