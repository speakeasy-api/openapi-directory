import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Move file/folder
 */
export declare class FileActionEntity extends SpeakeasyBase {
    /**
     * If status is pending, this is the id of the FileMigration to check for status updates.
     */
    fileMigrationId?: number;
    /**
     * Status of file operation.
     */
    status?: string;
}
