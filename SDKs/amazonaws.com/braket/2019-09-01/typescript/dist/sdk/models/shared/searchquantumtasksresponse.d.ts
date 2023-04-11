import { SpeakeasyBase } from "../../../internal/utils";
import { QuantumTaskSummary } from "./quantumtasksummary";
/**
 * Success
 */
export declare class SearchQuantumTasksResponse extends SpeakeasyBase {
    nextToken?: string;
    quantumTasks: QuantumTaskSummary[];
}
