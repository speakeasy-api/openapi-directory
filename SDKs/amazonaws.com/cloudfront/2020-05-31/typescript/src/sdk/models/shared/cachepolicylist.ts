import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CachePolicySummaryList } from "./cachepolicysummarylist";



// CachePolicyList
/** 
 * A list of cache policies.
**/
export class CachePolicyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CachePolicySummaryList })
  items?: CachePolicySummaryList[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
