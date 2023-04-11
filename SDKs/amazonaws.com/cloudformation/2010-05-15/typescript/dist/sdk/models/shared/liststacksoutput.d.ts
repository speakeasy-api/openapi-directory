import { SpeakeasyBase } from "../../../internal/utils";
import { StackSummary } from "./stacksummary";
/**
 * The output for <a>ListStacks</a> action.
 */
export declare class ListStacksOutput extends SpeakeasyBase {
    nextToken?: string;
    stackSummaries?: StackSummary[];
}
