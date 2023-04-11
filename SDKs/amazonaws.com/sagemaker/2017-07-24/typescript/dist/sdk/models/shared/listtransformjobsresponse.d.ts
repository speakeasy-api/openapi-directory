import { SpeakeasyBase } from "../../../internal/utils";
import { TransformJobSummary } from "./transformjobsummary";
/**
 * Success
 */
export declare class ListTransformJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    transformJobSummaries: TransformJobSummary[];
}
