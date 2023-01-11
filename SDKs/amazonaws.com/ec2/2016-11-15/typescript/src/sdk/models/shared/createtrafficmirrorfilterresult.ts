import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTrafficMirrorFilterResultTrafficMirrorFilter
/** 
 * Information about the Traffic Mirror filter.
**/
export class CreateTrafficMirrorFilterResultTrafficMirrorFilter extends SpeakeasyBase {
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


export class CreateTrafficMirrorFilterResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorFilter?: CreateTrafficMirrorFilterResultTrafficMirrorFilter;
}
