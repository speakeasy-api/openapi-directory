import { SpeakeasyBase } from "../../../internal/utils";
import { StackSetOperationResultSummary } from "./stacksetoperationresultsummary";
/**
 * Success
 */
export declare class ListStackSetOperationResultsOutput extends SpeakeasyBase {
    nextToken?: string;
    summaries?: StackSetOperationResultSummary[];
}
