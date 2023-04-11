import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Jobs
 */
export declare class GetJobResponse extends SpeakeasyBase {
    data: Job;
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
