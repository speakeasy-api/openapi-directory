import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookSessionSummary } from "./notebooksessionsummary";
/**
 * Success
 */
export declare class ListNotebookSessionsResponse extends SpeakeasyBase {
    nextToken?: string;
    notebookSessionsList: NotebookSessionSummary[];
}
