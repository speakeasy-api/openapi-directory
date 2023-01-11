import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoadBalancerTargetGroupState
/** 
 * Describes the state of a target group.
**/
export class LoadBalancerTargetGroupState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  loadBalancerTargetGroupARN?: string;

  @SpeakeasyMetadata()
  state?: string;
}
