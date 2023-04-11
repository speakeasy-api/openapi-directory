import { SpeakeasyBase } from "../../../internal/utils";
import { WorldExportJobSummary } from "./worldexportjobsummary";
/**
 * Success
 */
export declare class ListWorldExportJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    worldExportJobSummaries: WorldExportJobSummary[];
}
