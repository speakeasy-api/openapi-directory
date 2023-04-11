import { SpeakeasyBase } from "../../../internal/utils";
import { CompilationJobSummary } from "./compilationjobsummary";
/**
 * Success
 */
export declare class ListCompilationJobsResponse extends SpeakeasyBase {
    compilationJobSummaries: CompilationJobSummary[];
    nextToken?: string;
}
