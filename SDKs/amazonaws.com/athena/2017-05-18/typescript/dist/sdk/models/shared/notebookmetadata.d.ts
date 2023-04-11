import { SpeakeasyBase } from "../../../internal/utils";
import { NotebookTypeEnum } from "./notebooktypeenum";
/**
 * Contains metadata for notebook, including the notebook name, ID, workgroup, and time created.
 */
export declare class NotebookMetadata extends SpeakeasyBase {
    creationTime?: Date;
    lastModifiedTime?: Date;
    name?: string;
    notebookId?: string;
    type?: NotebookTypeEnum;
    workGroup?: string;
}
