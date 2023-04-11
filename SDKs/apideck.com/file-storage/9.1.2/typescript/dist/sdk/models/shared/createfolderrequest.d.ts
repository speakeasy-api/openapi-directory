import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateFolderRequestInput extends SpeakeasyBase {
    /**
     * Optional description of the folder.
     */
    description?: string;
    /**
     * ID of the drive to create the folder in.
     */
    driveId?: string;
    /**
     * The name of the folder.
     */
    name: string;
    /**
     * The parent folder to create the new file within.
     */
    parentFolderId: string;
}
