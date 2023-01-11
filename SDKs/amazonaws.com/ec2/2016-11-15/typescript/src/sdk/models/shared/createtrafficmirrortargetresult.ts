import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTrafficMirrorTargetResultTrafficMirrorTarget
/** 
 * Information about the Traffic Mirror target.
**/
export class CreateTrafficMirrorTargetResultTrafficMirrorTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInterfaceId?: Record<string, any>;

  @SpeakeasyMetadata()
  networkLoadBalancerArn?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorTargetId?: Record<string, any>;

  @SpeakeasyMetadata()
  type?: Record<string, any>;
}


export class CreateTrafficMirrorTargetResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorTarget?: CreateTrafficMirrorTargetResultTrafficMirrorTarget;
}
