import { SpeakeasyBase } from "../../../internal/utils";
import { Drive } from "./drive";
/**
 * Drives
 */
export declare class GetDriveResponse extends SpeakeasyBase {
    data: Drive;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
