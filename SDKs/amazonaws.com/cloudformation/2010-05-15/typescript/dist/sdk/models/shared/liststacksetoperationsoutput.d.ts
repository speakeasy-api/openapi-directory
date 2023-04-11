import { SpeakeasyBase } from "../../../internal/utils";
import { StackSetOperationSummary } from "./stacksetoperationsummary";
/**
 * Success
 */
export declare class ListStackSetOperationsOutput extends SpeakeasyBase {
    nextToken?: string;
    summaries?: StackSetOperationSummary[];
}
