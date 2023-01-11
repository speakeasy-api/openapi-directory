import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicySummaryList } from "./originrequestpolicysummarylist";



// OriginRequestPolicyList
/** 
 * A list of origin request policies.
**/
export class OriginRequestPolicyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: OriginRequestPolicySummaryList })
  items?: OriginRequestPolicySummaryList[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}
