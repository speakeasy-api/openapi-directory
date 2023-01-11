import { SpeakeasyBase } from "../../../internal/utils";
import { CacheClusterList } from "./cacheclusterlist";
/**
 * Represents the output of a <code>DescribeCacheClusters</code> operation.
**/
export declare class CacheClusterMessage extends SpeakeasyBase {
    cacheClusters?: CacheClusterList[];
    marker?: string;
}
