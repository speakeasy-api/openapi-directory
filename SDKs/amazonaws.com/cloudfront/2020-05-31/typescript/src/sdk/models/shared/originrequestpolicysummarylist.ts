import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OriginRequestPolicy } from "./originrequestpolicy";
import { OriginRequestPolicyTypeEnum } from "./originrequestpolicytypeenum";



// OriginRequestPolicySummaryList
/** 
 * Contains an origin request policy.
**/
export class OriginRequestPolicySummaryList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  originRequestPolicy: OriginRequestPolicy;

  @SpeakeasyMetadata()
  type: OriginRequestPolicyTypeEnum;
}
