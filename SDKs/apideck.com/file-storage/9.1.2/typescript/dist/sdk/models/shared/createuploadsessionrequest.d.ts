import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateUploadSessionRequest extends SpeakeasyBase {
    /**
     * ID of the drive to upload to.
     */
    driveId?: string;
    /**
     * The name of the file.
     */
    name: string;
    /**
     * The parent folder to create the new file within.
     */
    parentFolderId: string;
    /**
     * The size of the file in bytes
     */
    size: number;
}
