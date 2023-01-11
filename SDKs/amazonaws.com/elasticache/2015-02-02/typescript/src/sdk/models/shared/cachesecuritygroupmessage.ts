import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CacheSecurityGroups } from "./cachesecuritygroups";



// CacheSecurityGroupMessage
/** 
 * Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.
**/
export class CacheSecurityGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CacheSecurityGroups })
  cacheSecurityGroups?: CacheSecurityGroups[];

  @SpeakeasyMetadata()
  marker?: string;
}
