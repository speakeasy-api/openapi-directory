import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input to <a>CopyDBClusterSnapshot</a>.
 */
export declare class CopyDBClusterSnapshotMessage extends SpeakeasyBase {
    copyTags?: boolean;
    kmsKeyId?: string;
    preSignedUrl?: string;
    sourceDBClusterSnapshotIdentifier: string;
    tags?: TagList[];
    targetDBClusterSnapshotIdentifier: string;
}
