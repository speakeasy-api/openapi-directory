import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyTrafficMirrorSessionResultTrafficMirrorSession
/** 
 * Information about the Traffic Mirror session.
**/
export class ModifyTrafficMirrorSessionResultTrafficMirrorSession extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInterfaceId?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  packetLength?: Record<string, any>;

  @SpeakeasyMetadata()
  sessionNumber?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorFilterId?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorSessionId?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorTargetId?: Record<string, any>;

  @SpeakeasyMetadata()
  virtualNetworkId?: Record<string, any>;
}


export class ModifyTrafficMirrorSessionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  trafficMirrorSession?: ModifyTrafficMirrorSessionResultTrafficMirrorSession;
}
