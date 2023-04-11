import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestCreateDeviceSelectionSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * A list of device IDs
 */
export declare class TestCreateDeviceSelectionDeviceList extends SpeakeasyBase {
    devices: string[];
}
export declare class TestCreateDeviceSelectionRequest extends SpeakeasyBase {
    requestBody: TestCreateDeviceSelectionDeviceList;
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
export declare class TestCreateDeviceSelectionTestCloudErrorDetails extends SpeakeasyBase {
    /**
     * Human-readable message that describes the error
     */
    message: string;
    /**
     * Status of the operation
     */
    status: string;
}
/**
 * Short ID for a list of device IDs
 */
export declare class TestCreateDeviceSelectionDeviceSelection extends SpeakeasyBase {
    /**
     * Identifier of the device selection
     */
    shortId: string;
}
export declare class TestCreateDeviceSelectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deviceSelection?: TestCreateDeviceSelectionDeviceSelection;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid list of device IDs
     */
    testCloudErrorDetails?: TestCreateDeviceSelectionTestCloudErrorDetails;
}
