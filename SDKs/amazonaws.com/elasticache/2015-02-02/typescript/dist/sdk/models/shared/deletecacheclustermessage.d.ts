import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DeleteCacheCluster</code> operation.
 */
export declare class DeleteCacheClusterMessage extends SpeakeasyBase {
    cacheClusterId: string;
    finalSnapshotIdentifier?: string;
}
