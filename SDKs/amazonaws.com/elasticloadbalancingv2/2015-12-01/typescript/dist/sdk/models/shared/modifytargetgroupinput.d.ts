import { SpeakeasyBase } from "../../../internal/utils";
import { Matcher } from "./matcher";
import { ProtocolEnumEnum } from "./protocolenumenum";
export declare class ModifyTargetGroupInput extends SpeakeasyBase {
    healthCheckEnabled?: boolean;
    healthCheckIntervalSeconds?: number;
    healthCheckPath?: string;
    healthCheckPort?: string;
    healthCheckProtocol?: ProtocolEnumEnum;
    healthCheckTimeoutSeconds?: number;
    healthyThresholdCount?: number;
    matcher?: Matcher;
    targetGroupArn: string;
    unhealthyThresholdCount?: number;
}
