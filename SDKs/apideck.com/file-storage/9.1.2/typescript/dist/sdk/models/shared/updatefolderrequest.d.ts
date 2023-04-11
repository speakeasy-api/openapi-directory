import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateFolderRequestInput extends SpeakeasyBase {
    /**
     * Optional description of the folder.
     */
    description?: string;
    /**
     * The name of the folder.
     */
    name?: string;
    /**
     * The parent folder to create the new file within.
     */
    parentFolderId?: string;
}
