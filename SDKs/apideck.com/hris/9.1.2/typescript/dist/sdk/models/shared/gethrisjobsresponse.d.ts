import { SpeakeasyBase } from "../../../internal/utils";
import { HrisJobs } from "./hrisjobs";
/**
 * Jobs
 */
export declare class GetHrisJobsResponse extends SpeakeasyBase {
    data: HrisJobs;
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
