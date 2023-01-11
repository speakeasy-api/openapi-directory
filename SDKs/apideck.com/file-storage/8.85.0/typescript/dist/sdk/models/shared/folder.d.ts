import { SpeakeasyBase } from "../../../internal/utils";
import { Owner } from "./owner";
import { LinkedFolder } from "./linkedfolder";
export declare class Folder extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    id?: string;
    name: string;
    owner?: Owner;
    parentFolders: LinkedFolder[];
    parentFoldersComplete?: boolean;
    path?: string;
    size?: number;
    updatedAt?: Date;
    updatedBy?: string;
}
