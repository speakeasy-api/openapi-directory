import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheParameterGroupList } from "./cacheparametergrouplist";



// CacheParameterGroupsMessage
/** 
 * Represents the output of a <code>DescribeCacheParameterGroups</code> operation.
**/
export class CacheParameterGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheParameterGroupList })
  cacheParameterGroups?: CacheParameterGroupList[];

  @SpeakeasyMetadata()
  marker?: string;
}
