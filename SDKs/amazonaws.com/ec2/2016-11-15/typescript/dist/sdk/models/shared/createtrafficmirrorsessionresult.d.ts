import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateTrafficMirrorSessionResultTrafficMirrorSessionTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the Traffic Mirror session.
 */
export declare class CreateTrafficMirrorSessionResultTrafficMirrorSession extends SpeakeasyBase {
    description?: string;
    networkInterfaceId?: string;
    ownerId?: string;
    packetLength?: number;
    sessionNumber?: number;
    tags?: CreateTrafficMirrorSessionResultTrafficMirrorSessionTags[];
    trafficMirrorFilterId?: string;
    trafficMirrorSessionId?: string;
    trafficMirrorTargetId?: string;
    virtualNetworkId?: number;
}
/**
 * Success
 */
export declare class CreateTrafficMirrorSessionResult extends SpeakeasyBase {
    clientToken?: string;
    trafficMirrorSession?: CreateTrafficMirrorSessionResultTrafficMirrorSession;
}
