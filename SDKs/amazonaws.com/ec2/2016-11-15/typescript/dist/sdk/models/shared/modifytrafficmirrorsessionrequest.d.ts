import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficMirrorSessionFieldEnum } from "./trafficmirrorsessionfieldenum";
export declare class ModifyTrafficMirrorSessionRequest extends SpeakeasyBase {
    description?: string;
    dryRun?: boolean;
    packetLength?: number;
    removeFields?: TrafficMirrorSessionFieldEnum[];
    sessionNumber?: number;
    trafficMirrorFilterId?: string;
    trafficMirrorSessionId: string;
    trafficMirrorTargetId?: string;
    virtualNetworkId?: number;
}
