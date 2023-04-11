import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Success
 */
export declare class BatchGetJobsResponse extends SpeakeasyBase {
    jobs?: Job[];
    jobsNotFound?: string[];
}
