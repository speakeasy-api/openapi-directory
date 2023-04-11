import { SpeakeasyBase } from "../../../internal/utils";
import { Matcher } from "./matcher";
import { ProtocolEnumEnum } from "./protocolenumenum";
import { TargetGroupIpAddressTypeEnumEnum } from "./targetgroupipaddresstypeenumenum";
import { TargetTypeEnumEnum } from "./targettypeenumenum";
/**
 * Information about a target group.
 */
export declare class TargetGroup extends SpeakeasyBase {
    healthCheckEnabled?: boolean;
    healthCheckIntervalSeconds?: number;
    healthCheckPath?: string;
    healthCheckPort?: string;
    healthCheckProtocol?: ProtocolEnumEnum;
    healthCheckTimeoutSeconds?: number;
    healthyThresholdCount?: number;
    ipAddressType?: TargetGroupIpAddressTypeEnumEnum;
    loadBalancerArns?: string[];
    matcher?: Matcher;
    port?: number;
    protocol?: ProtocolEnumEnum;
    protocolVersion?: string;
    targetGroupArn?: string;
    targetGroupName?: string;
    targetType?: TargetTypeEnumEnum;
    unhealthyThresholdCount?: number;
    vpcId?: string;
}
