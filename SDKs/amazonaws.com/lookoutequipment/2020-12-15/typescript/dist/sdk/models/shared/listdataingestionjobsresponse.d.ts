import { SpeakeasyBase } from "../../../internal/utils";
import { DataIngestionJobSummary } from "./dataingestionjobsummary";
/**
 * Success
 */
export declare class ListDataIngestionJobsResponse extends SpeakeasyBase {
    dataIngestionJobSummaries?: DataIngestionJobSummary[];
    nextToken?: string;
}
