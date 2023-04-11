import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceSummary } from "./notebookinstancesummary";
/**
 * Success
 */
export declare class ListNotebookInstancesOutput extends SpeakeasyBase {
    nextToken?: string;
    notebookInstances?: NotebookInstanceSummary[];
}
