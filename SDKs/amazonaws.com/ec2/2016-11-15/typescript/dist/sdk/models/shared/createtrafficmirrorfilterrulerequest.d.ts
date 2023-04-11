import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficDirectionEnum } from "./trafficdirectionenum";
import { TrafficMirrorPortRangeRequest } from "./trafficmirrorportrangerequest";
import { TrafficMirrorRuleActionEnum } from "./trafficmirrorruleactionenum";
export declare class CreateTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    destinationCidrBlock: string;
    destinationPortRange?: TrafficMirrorPortRangeRequest;
    dryRun?: boolean;
    protocol?: number;
    ruleAction: TrafficMirrorRuleActionEnum;
    ruleNumber: number;
    sourceCidrBlock: string;
    sourcePortRange?: TrafficMirrorPortRangeRequest;
    trafficDirection: TrafficDirectionEnum;
    trafficMirrorFilterId: string;
}
