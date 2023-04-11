import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLJobSummary } from "./automljobsummary";
/**
 * Success
 */
export declare class ListAutoMLJobsResponse extends SpeakeasyBase {
    autoMLJobSummaries: AutoMLJobSummary[];
    nextToken?: string;
}
