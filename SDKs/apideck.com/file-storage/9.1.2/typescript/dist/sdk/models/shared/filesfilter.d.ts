import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Apply filters
 */
export declare class FilesFilter extends SpeakeasyBase {
    /**
     * ID of the drive to filter on
     */
    driveId?: string;
    /**
     * ID of the folder to filter on. The root folder has an alias "root"
     */
    folderId?: string;
    /**
     * Only return files and folders that are shared
     */
    shared?: boolean;
}
