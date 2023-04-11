import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class ModifyTrafficMirrorSessionResultTrafficMirrorSessionTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the Traffic Mirror session.
 */
export declare class ModifyTrafficMirrorSessionResultTrafficMirrorSession extends SpeakeasyBase {
    description?: string;
    networkInterfaceId?: string;
    ownerId?: string;
    packetLength?: number;
    sessionNumber?: number;
    tags?: ModifyTrafficMirrorSessionResultTrafficMirrorSessionTags[];
    trafficMirrorFilterId?: string;
    trafficMirrorSessionId?: string;
    trafficMirrorTargetId?: string;
    virtualNetworkId?: number;
}
/**
 * Success
 */
export declare class ModifyTrafficMirrorSessionResult extends SpeakeasyBase {
    trafficMirrorSession?: ModifyTrafficMirrorSessionResultTrafficMirrorSession;
}
