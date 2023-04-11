import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Success
 */
export declare class GetJobsResponse extends SpeakeasyBase {
    jobs?: Job[];
    nextToken?: string;
}
