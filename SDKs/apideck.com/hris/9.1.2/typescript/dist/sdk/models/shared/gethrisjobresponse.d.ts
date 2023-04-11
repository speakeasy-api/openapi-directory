import { SpeakeasyBase } from "../../../internal/utils";
import { HrisJob } from "./hrisjob";
/**
 * Job
 */
export declare class GetHrisJobResponse extends SpeakeasyBase {
    data: HrisJob;
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
