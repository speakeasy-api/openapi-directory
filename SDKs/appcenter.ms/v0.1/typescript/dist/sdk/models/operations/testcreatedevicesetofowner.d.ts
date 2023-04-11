import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestCreateDeviceSetOfOwnerSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The name of the device set and the list of device IDs
 */
export declare class TestCreateDeviceSetOfOwnerDeviceSetUpdateInformation extends SpeakeasyBase {
    /**
     * List of device IDs
     */
    devices: string[];
    /**
     * The name of the device set
     */
    name: string;
}
export declare class TestCreateDeviceSetOfOwnerRequest extends SpeakeasyBase {
    requestBody: TestCreateDeviceSetOfOwnerDeviceSetUpdateInformation;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Details of a failed operation
 */
export declare class TestCreateDeviceSetOfOwnerTestCloudErrorDetails extends SpeakeasyBase {
    /**
     * Human-readable message that describes the error
     */
    message: string;
    /**
     * Status of the operation
     */
    status: string;
}
export declare class TestCreateDeviceSetOfOwnerDeviceSetDeviceConfigurationsImage extends SpeakeasyBase {
    thumb?: string;
}
export declare class TestCreateDeviceSetOfOwnerDeviceSetDeviceConfigurationsModel extends SpeakeasyBase {
    formFactor?: string;
    manufacturer?: string;
    name?: string;
    releaseDate?: string;
}
export declare class TestCreateDeviceSetOfOwnerDeviceSetDeviceConfigurations extends SpeakeasyBase {
    /**
     * The unique id of the device configuration
     */
    id?: string;
    image?: TestCreateDeviceSetOfOwnerDeviceSetDeviceConfigurationsImage;
    model?: TestCreateDeviceSetOfOwnerDeviceSetDeviceConfigurationsModel;
    os?: string;
    osName?: string;
}
/**
 * The owner of a device set
 */
export declare class TestCreateDeviceSetOfOwnerDeviceSetDeviceSetOwner extends SpeakeasyBase {
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
export declare class TestCreateDeviceSetOfOwnerDeviceSet extends SpeakeasyBase {
    deviceConfigurations: TestCreateDeviceSetOfOwnerDeviceSetDeviceConfigurations[];
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
    owner: TestCreateDeviceSetOfOwnerDeviceSetDeviceSetOwner;
    /**
     * Slug of the device set
     */
    slug?: string;
}
export declare class TestCreateDeviceSetOfOwnerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deviceSet?: TestCreateDeviceSetOfOwnerDeviceSet;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid list of device IDs or conflicting name
     */
    testCloudErrorDetails?: TestCreateDeviceSetOfOwnerTestCloudErrorDetails;
}
