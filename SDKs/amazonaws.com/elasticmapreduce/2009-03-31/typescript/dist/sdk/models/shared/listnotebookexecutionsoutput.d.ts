import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookExecutionSummary } from "./notebookexecutionsummary";
/**
 * Success
 */
export declare class ListNotebookExecutionsOutput extends SpeakeasyBase {
    marker?: string;
    notebookExecutions?: NotebookExecutionSummary[];
}
