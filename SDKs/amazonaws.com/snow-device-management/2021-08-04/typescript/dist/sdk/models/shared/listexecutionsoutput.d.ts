import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionSummary } from "./executionsummary";
/**
 * Success
 */
export declare class ListExecutionsOutput extends SpeakeasyBase {
    executions?: ExecutionSummary[];
    nextToken?: string;
}
