import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>RebootCacheCluster</code> operation.
 */
export declare class RebootCacheClusterMessage extends SpeakeasyBase {
    cacheClusterId: string;
    cacheNodeIdsToReboot: string[];
}
