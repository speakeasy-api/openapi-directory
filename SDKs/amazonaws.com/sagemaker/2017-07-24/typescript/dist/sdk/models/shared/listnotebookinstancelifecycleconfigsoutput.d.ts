import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceLifecycleConfigSummary } from "./notebookinstancelifecycleconfigsummary";
/**
 * Success
 */
export declare class ListNotebookInstanceLifecycleConfigsOutput extends SpeakeasyBase {
    nextToken?: string;
    notebookInstanceLifecycleConfigs?: NotebookInstanceLifecycleConfigSummary[];
}
