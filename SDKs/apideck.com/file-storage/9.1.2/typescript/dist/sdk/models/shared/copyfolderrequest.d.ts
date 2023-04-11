import { SpeakeasyBase } from "../../../internal/utils";
export declare class CopyFolderRequestInput extends SpeakeasyBase {
    /**
     * The name of the folder.
     */
    name?: string;
    /**
     * The parent folder to create the new file within.
     */
    parentFolderId: string;
}
