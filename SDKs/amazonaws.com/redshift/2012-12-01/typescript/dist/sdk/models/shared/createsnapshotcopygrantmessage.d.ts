import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * The result of the <code>CreateSnapshotCopyGrant</code> action.
 */
export declare class CreateSnapshotCopyGrantMessage extends SpeakeasyBase {
    kmsKeyId?: string;
    snapshotCopyGrantName: string;
    tags?: TagList[];
}
