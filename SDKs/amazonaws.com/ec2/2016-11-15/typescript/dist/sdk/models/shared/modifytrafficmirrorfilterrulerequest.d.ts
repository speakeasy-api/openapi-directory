import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficDirectionEnum } from "./trafficdirectionenum";
import { TrafficMirrorFilterRuleFieldEnum } from "./trafficmirrorfilterrulefieldenum";
import { TrafficMirrorPortRangeRequest } from "./trafficmirrorportrangerequest";
import { TrafficMirrorRuleActionEnum } from "./trafficmirrorruleactionenum";
export declare class ModifyTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
    description?: string;
    destinationCidrBlock?: string;
    destinationPortRange?: TrafficMirrorPortRangeRequest;
    dryRun?: boolean;
    protocol?: number;
    removeFields?: TrafficMirrorFilterRuleFieldEnum[];
    ruleAction?: TrafficMirrorRuleActionEnum;
    ruleNumber?: number;
    sourceCidrBlock?: string;
    sourcePortRange?: TrafficMirrorPortRangeRequest;
    trafficDirection?: TrafficDirectionEnum;
    trafficMirrorFilterRuleId: string;
}
