import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeTrafficMirrorSessionsResultTrafficMirrorSessionsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a Traffic Mirror session.
 */
export declare class DescribeTrafficMirrorSessionsResultTrafficMirrorSessions extends SpeakeasyBase {
    description?: string;
    networkInterfaceId?: string;
    ownerId?: string;
    packetLength?: number;
    sessionNumber?: number;
    tags?: DescribeTrafficMirrorSessionsResultTrafficMirrorSessionsTags[];
    trafficMirrorFilterId?: string;
    trafficMirrorSessionId?: string;
    trafficMirrorTargetId?: string;
    virtualNetworkId?: number;
}
/**
 * Success
 */
export declare class DescribeTrafficMirrorSessionsResult extends SpeakeasyBase {
    nextToken?: string;
    trafficMirrorSessions?: DescribeTrafficMirrorSessionsResultTrafficMirrorSessions[];
}
