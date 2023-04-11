import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input of a <code>CreateSnapshot</code> operation.
 */
export declare class CreateSnapshotMessage extends SpeakeasyBase {
    cacheClusterId?: string;
    kmsKeyId?: string;
    replicationGroupId?: string;
    snapshotName: string;
    tags?: TagList[];
}
