import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateFileRequest extends SpeakeasyBase {
    /**
     * Optional description of the file.
     */
    description?: string;
    /**
     * The name of the file.
     */
    name?: string;
    /**
     * The parent folder to create the new file within.
     */
    parentFolderId?: string;
}
