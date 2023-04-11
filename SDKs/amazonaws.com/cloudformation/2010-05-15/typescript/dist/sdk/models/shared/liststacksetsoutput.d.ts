import { SpeakeasyBase } from "../../../internal/utils";
import { StackSetSummary } from "./stacksetsummary";
/**
 * Success
 */
export declare class ListStackSetsOutput extends SpeakeasyBase {
    nextToken?: string;
    summaries?: StackSetSummary[];
}
