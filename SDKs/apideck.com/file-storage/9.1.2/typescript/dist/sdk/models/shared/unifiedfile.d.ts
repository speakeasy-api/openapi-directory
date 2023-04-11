import { SpeakeasyBase } from "../../../internal/utils";
import { FileTypeEnum } from "./filetypeenum";
import { LinkedFolder } from "./linkedfolder";
import { Owner } from "./owner";
export declare class UnifiedFile extends SpeakeasyBase {
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * Optional description of the file
     */
    description?: string;
    /**
     * Whether the current user can download this file
     */
    downloadable?: boolean;
    /**
     * The third-party API ID of original entity
     */
    downstreamId?: string;
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * The MIME type of the file.
     */
    mimeType?: string;
    /**
     * The name of the file
     */
    name: string;
    owner?: Owner;
    /**
     * The parent folders of the file, starting from the root
     */
    parentFolders?: LinkedFolder[];
    /**
     * Whether the list of parent folder is complete. Some connectors only return the direct parent of a file
     */
    parentFoldersComplete?: boolean;
    /**
     * The full path of the file or folder (includes the file name)
     */
    path?: string;
    /**
     * The size of the file in bytes
     */
    size?: number;
    /**
     * The type of resource. Could be file, folder or url
     */
    type: FileTypeEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
