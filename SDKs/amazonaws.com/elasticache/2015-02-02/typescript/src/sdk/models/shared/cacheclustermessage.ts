import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheClusterList } from "./cacheclusterlist";



// CacheClusterMessage
/** 
 * Represents the output of a <code>DescribeCacheClusters</code> operation.
**/
export class CacheClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheClusterList })
  cacheClusters?: CacheClusterList[];

  @SpeakeasyMetadata()
  marker?: string;
}
