import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Success
 */
export declare class DescribeJobsResponse extends SpeakeasyBase {
    items?: Job[];
    nextToken?: string;
}
