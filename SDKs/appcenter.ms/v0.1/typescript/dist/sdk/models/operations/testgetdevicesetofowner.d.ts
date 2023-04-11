import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGetDeviceSetOfOwnerSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGetDeviceSetOfOwnerRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The UUID of the device set
     */
    id: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class TestGetDeviceSetOfOwnerDeviceSetDeviceConfigurationsImage extends SpeakeasyBase {
    thumb?: string;
}
export declare class TestGetDeviceSetOfOwnerDeviceSetDeviceConfigurationsModel extends SpeakeasyBase {
    formFactor?: string;
    manufacturer?: string;
    name?: string;
    releaseDate?: string;
}
export declare class TestGetDeviceSetOfOwnerDeviceSetDeviceConfigurations extends SpeakeasyBase {
    /**
     * The unique id of the device configuration
     */
    id?: string;
    image?: TestGetDeviceSetOfOwnerDeviceSetDeviceConfigurationsImage;
    model?: TestGetDeviceSetOfOwnerDeviceSetDeviceConfigurationsModel;
    os?: string;
    osName?: string;
}
/**
 * The owner of a device set
 */
export declare class TestGetDeviceSetOfOwnerDeviceSetDeviceSetOwner extends SpeakeasyBase {
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
export declare class TestGetDeviceSetOfOwnerDeviceSet extends SpeakeasyBase {
    deviceConfigurations: TestGetDeviceSetOfOwnerDeviceSetDeviceConfigurations[];
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
    owner: TestGetDeviceSetOfOwnerDeviceSetDeviceSetOwner;
    /**
     * Slug of the device set
     */
    slug?: string;
}
export declare class TestGetDeviceSetOfOwnerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deviceSet?: TestGetDeviceSetOfOwnerDeviceSet;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
