import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardExportJobSummary } from "./modelcardexportjobsummary";
/**
 * Success
 */
export declare class ListModelCardExportJobsResponse extends SpeakeasyBase {
    modelCardExportJobSummaries: ModelCardExportJobSummary[];
    nextToken?: string;
}
