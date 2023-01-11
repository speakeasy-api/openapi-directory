import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSubnetGroups } from "./cachesubnetgroups";



// CacheSubnetGroupMessage
/** 
 * Represents the output of a <code>DescribeCacheSubnetGroups</code> operation.
**/
export class CacheSubnetGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheSubnetGroups })
  cacheSubnetGroups?: CacheSubnetGroups[];

  @SpeakeasyMetadata()
  marker?: string;
}
