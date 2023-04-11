import { SpeakeasyBase } from "../../../internal/utils";
import { Matcher } from "./matcher";
import { ProtocolEnumEnum } from "./protocolenumenum";
import { Tag } from "./tag";
import { TargetGroupIpAddressTypeEnumEnum } from "./targetgroupipaddresstypeenumenum";
import { TargetTypeEnumEnum } from "./targettypeenumenum";
export declare class CreateTargetGroupInput extends SpeakeasyBase {
    healthCheckEnabled?: boolean;
    healthCheckIntervalSeconds?: number;
    healthCheckPath?: string;
    healthCheckPort?: string;
    healthCheckProtocol?: ProtocolEnumEnum;
    healthCheckTimeoutSeconds?: number;
    healthyThresholdCount?: number;
    ipAddressType?: TargetGroupIpAddressTypeEnumEnum;
    matcher?: Matcher;
    name: string;
    port?: number;
    protocol?: ProtocolEnumEnum;
    protocolVersion?: string;
    tags?: Tag[];
    targetType?: TargetTypeEnumEnum;
    unhealthyThresholdCount?: number;
    vpcId?: string;
}
