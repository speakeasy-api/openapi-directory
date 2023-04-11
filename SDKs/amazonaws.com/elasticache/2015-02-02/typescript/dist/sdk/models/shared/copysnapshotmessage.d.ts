import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input of a <code>CopySnapshotMessage</code> operation.
 */
export declare class CopySnapshotMessage extends SpeakeasyBase {
    kmsKeyId?: string;
    sourceSnapshotName: string;
    tags?: TagList[];
    targetBucket?: string;
    targetSnapshotName: string;
}
