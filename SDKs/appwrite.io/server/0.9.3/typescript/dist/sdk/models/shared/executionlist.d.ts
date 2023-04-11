import { SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
/**
 * Executions List
 */
export declare class ExecutionList extends SpeakeasyBase {
    /**
     * List of executions.
     */
    executions: Execution[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
