import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedFolder } from "./linkedfolder";
import { Owner } from "./owner";
export declare class Folder extends SpeakeasyBase {
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * Optional description of the folder
     */
    description?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The name of the folder
     */
    name: string;
    owner?: Owner;
    /**
     * The parent folders of the file, starting from the root
     */
    parentFolders: LinkedFolder[];
    /**
     * Whether the list of parent folder is complete. Some connectors only return the direct parent of a folder
     */
    parentFoldersComplete?: boolean;
    /**
     * The full path of the folder (includes the folder name)
     */
    path?: string;
    /**
     * The size of the folder in bytes
     */
    size?: number;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
