import { SpeakeasyBase } from "../../../internal/utils";
import { StackInstanceSummary } from "./stackinstancesummary";
/**
 * Success
 */
export declare class ListStackInstancesOutput extends SpeakeasyBase {
    nextToken?: string;
    summaries?: StackInstanceSummary[];
}
