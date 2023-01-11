import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter
/** 
 * The Traffic Mirror filter that the network service is associated with.
**/
export class ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  egressFilterRules?: Record<string, any>;

  @SpeakeasyMetadata()
  ingressFilterRules?: Record<string, any>;

  @SpeakeasyMetadata()
  networkServices?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorFilterId?: Record<string, any>;
}


export class ModifyTrafficMirrorFilterNetworkServicesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  trafficMirrorFilter?: ModifyTrafficMirrorFilterNetworkServicesResultTrafficMirrorFilter;
}
