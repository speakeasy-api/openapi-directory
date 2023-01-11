import { SpeakeasyBase } from "../../../internal/utils";
import { Owner } from "./owner";
import { LinkedFolder } from "./linkedfolder";
import { FileTypeEnum } from "./filetypeenum";
export declare class UnifiedFile extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    downloadable?: boolean;
    downstreamId?: string;
    id: string;
    mimeType?: string;
    name: string;
    owner?: Owner;
    parentFolders?: LinkedFolder[];
    parentFoldersComplete?: boolean;
    path?: string;
    size?: number;
    type: FileTypeEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
