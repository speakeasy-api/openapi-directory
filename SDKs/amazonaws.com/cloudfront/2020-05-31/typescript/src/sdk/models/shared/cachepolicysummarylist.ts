import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicy } from "./cachepolicy";
import { CachePolicyTypeEnum } from "./cachepolicytypeenum";



// CachePolicySummaryList
/** 
 * Contains a cache policy.
**/
export class CachePolicySummaryList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cachePolicy: CachePolicy;

  @SpeakeasyMetadata()
  type: CachePolicyTypeEnum;
}
