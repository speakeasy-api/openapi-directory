import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>DescribeCacheClusters</code> operation.
 */
export declare class DescribeCacheClustersMessage extends SpeakeasyBase {
    cacheClusterId?: string;
    marker?: string;
    maxRecords?: number;
    showCacheClustersNotInReplicationGroups?: boolean;
    showCacheNodeInfo?: boolean;
}
