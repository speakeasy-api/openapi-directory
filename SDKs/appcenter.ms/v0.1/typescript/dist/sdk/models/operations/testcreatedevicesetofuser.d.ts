import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestCreateDeviceSetOfUserSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The name of the device set and the list of device IDs
 */
export declare class TestCreateDeviceSetOfUserDeviceSetUpdateInformation extends SpeakeasyBase {
    /**
     * List of device IDs
     */
    devices: string[];
    /**
     * The name of the device set
     */
    name: string;
}
export declare class TestCreateDeviceSetOfUserRequest extends SpeakeasyBase {
    requestBody: TestCreateDeviceSetOfUserDeviceSetUpdateInformation;
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
export declare class TestCreateDeviceSetOfUserTestCloudErrorDetails extends SpeakeasyBase {
    /**
     * Human-readable message that describes the error
     */
    message: string;
    /**
     * Status of the operation
     */
    status: string;
}
export declare class TestCreateDeviceSetOfUserDeviceSetDeviceConfigurationsImage extends SpeakeasyBase {
    thumb?: string;
}
export declare class TestCreateDeviceSetOfUserDeviceSetDeviceConfigurationsModel extends SpeakeasyBase {
    formFactor?: string;
    manufacturer?: string;
    name?: string;
    releaseDate?: string;
}
export declare class TestCreateDeviceSetOfUserDeviceSetDeviceConfigurations extends SpeakeasyBase {
    /**
     * The unique id of the device configuration
     */
    id?: string;
    image?: TestCreateDeviceSetOfUserDeviceSetDeviceConfigurationsImage;
    model?: TestCreateDeviceSetOfUserDeviceSetDeviceConfigurationsModel;
    os?: string;
    osName?: string;
}
/**
 * The owner of a device set
 */
export declare class TestCreateDeviceSetOfUserDeviceSetDeviceSetOwner extends SpeakeasyBase {
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
export declare class TestCreateDeviceSetOfUserDeviceSet extends SpeakeasyBase {
    deviceConfigurations: TestCreateDeviceSetOfUserDeviceSetDeviceConfigurations[];
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
    owner: TestCreateDeviceSetOfUserDeviceSetDeviceSetOwner;
    /**
     * Slug of the device set
     */
    slug?: string;
}
export declare class TestCreateDeviceSetOfUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deviceSet?: TestCreateDeviceSetOfUserDeviceSet;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid list of device IDs or conflicting name
     */
    testCloudErrorDetails?: TestCreateDeviceSetOfUserTestCloudErrorDetails;
}
