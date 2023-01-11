import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedCacheNodeList } from "./reservedcachenodelist";



// ReservedCacheNodeMessage
/** 
 * Represents the output of a <code>DescribeReservedCacheNodes</code> operation.
**/
export class ReservedCacheNodeMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedCacheNodeList })
  reservedCacheNodes?: ReservedCacheNodeList[];
}
