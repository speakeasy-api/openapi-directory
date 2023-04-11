import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookInstanceLifecycleHook } from "./notebookinstancelifecyclehook";
/**
 * Success
 */
export declare class DescribeNotebookInstanceLifecycleConfigOutput extends SpeakeasyBase {
    creationTime?: Date;
    lastModifiedTime?: Date;
    notebookInstanceLifecycleConfigArn?: string;
    notebookInstanceLifecycleConfigName?: string;
    onCreate?: NotebookInstanceLifecycleHook[];
    onStart?: NotebookInstanceLifecycleHook[];
}
