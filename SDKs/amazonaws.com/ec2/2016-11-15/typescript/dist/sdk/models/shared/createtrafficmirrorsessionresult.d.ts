import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the Traffic Mirror session.
**/
export declare class CreateTrafficMirrorSessionResultTrafficMirrorSession extends SpeakeasyBase {
    description?: Record<string, any>;
    networkInterfaceId?: Record<string, any>;
    ownerId?: Record<string, any>;
    packetLength?: Record<string, any>;
    sessionNumber?: Record<string, any>;
    tags?: Record<string, any>;
    trafficMirrorFilterId?: Record<string, any>;
    trafficMirrorSessionId?: Record<string, any>;
    trafficMirrorTargetId?: Record<string, any>;
    virtualNetworkId?: Record<string, any>;
}
export declare class CreateTrafficMirrorSessionResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    trafficMirrorSession?: CreateTrafficMirrorSessionResultTrafficMirrorSession;
}
