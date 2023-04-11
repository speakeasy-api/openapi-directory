import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Jobs
 */
export declare class GetJobsResponse extends SpeakeasyBase {
    data: Job[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
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
