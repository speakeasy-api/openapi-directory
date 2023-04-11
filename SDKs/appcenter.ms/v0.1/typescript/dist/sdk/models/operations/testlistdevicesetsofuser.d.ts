import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestListDeviceSetsOfUserSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestListDeviceSetsOfUserRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class TestListDeviceSetsOfUserDeviceSetDeviceConfigurationsImage extends SpeakeasyBase {
    thumb?: string;
}
export declare class TestListDeviceSetsOfUserDeviceSetDeviceConfigurationsModel extends SpeakeasyBase {
    formFactor?: string;
    manufacturer?: string;
    name?: string;
    releaseDate?: string;
}
export declare class TestListDeviceSetsOfUserDeviceSetDeviceConfigurations extends SpeakeasyBase {
    /**
     * The unique id of the device configuration
     */
    id?: string;
    image?: TestListDeviceSetsOfUserDeviceSetDeviceConfigurationsImage;
    model?: TestListDeviceSetsOfUserDeviceSetDeviceConfigurationsModel;
    os?: string;
    osName?: string;
}
/**
 * The owner of a device set
 */
export declare class TestListDeviceSetsOfUserDeviceSetDeviceSetOwner extends SpeakeasyBase {
    /**
     * Display name of the account
     */
    displayName?: string;
    /**
     * Account ID
     */
    id: string;
    /**
     * Name of the account
     */
    name: string;
    /**
     * Type of account
     */
    type: string;
}
/**
 * The name and devices of the device set
 */
export declare class TestListDeviceSetsOfUserDeviceSet extends SpeakeasyBase {
    deviceConfigurations: TestListDeviceSetsOfUserDeviceSetDeviceConfigurations[];
    /**
     * Identifier of the device set
     */
    id: string;
    /**
     * The number of manufacturers in the device set's device selection
     */
    manufacturerCount?: number;
    /**
     * Name of the device set
     */
    name: string;
    /**
     * The number of os versions in the device set's device selection
     */
    osVersionCount?: number;
    /**
     * The owner of a device set
     */
    owner: TestListDeviceSetsOfUserDeviceSetDeviceSetOwner;
    /**
     * Slug of the device set
     */
    slug?: string;
}
export declare class TestListDeviceSetsOfUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deviceSets?: TestListDeviceSetsOfUserDeviceSet[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
