import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestListDeviceSetsOfOwnerSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestListDeviceSetsOfOwnerRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class TestListDeviceSetsOfOwnerDeviceSetDeviceConfigurationsImage extends SpeakeasyBase {
    thumb?: string;
}
export declare class TestListDeviceSetsOfOwnerDeviceSetDeviceConfigurationsModel extends SpeakeasyBase {
    formFactor?: string;
    manufacturer?: string;
    name?: string;
    releaseDate?: string;
}
export declare class TestListDeviceSetsOfOwnerDeviceSetDeviceConfigurations extends SpeakeasyBase {
    /**
     * The unique id of the device configuration
     */
    id?: string;
    image?: TestListDeviceSetsOfOwnerDeviceSetDeviceConfigurationsImage;
    model?: TestListDeviceSetsOfOwnerDeviceSetDeviceConfigurationsModel;
    os?: string;
    osName?: string;
}
/**
 * The owner of a device set
 */
export declare class TestListDeviceSetsOfOwnerDeviceSetDeviceSetOwner extends SpeakeasyBase {
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
export declare class TestListDeviceSetsOfOwnerDeviceSet extends SpeakeasyBase {
    deviceConfigurations: TestListDeviceSetsOfOwnerDeviceSetDeviceConfigurations[];
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
    owner: TestListDeviceSetsOfOwnerDeviceSetDeviceSetOwner;
    /**
     * Slug of the device set
     */
    slug?: string;
}
export declare class TestListDeviceSetsOfOwnerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deviceSets?: TestListDeviceSetsOfOwnerDeviceSet[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
