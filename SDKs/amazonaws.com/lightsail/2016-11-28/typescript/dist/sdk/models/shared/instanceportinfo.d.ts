import { SpeakeasyBase } from "../../../internal/utils";
import { AccessDirectionEnum } from "./accessdirectionenum";
import { NetworkProtocolEnum } from "./networkprotocolenum";
import { PortAccessTypeEnum } from "./portaccesstypeenum";
/**
 * Describes information about ports for an Amazon Lightsail instance.
 */
export declare class InstancePortInfo extends SpeakeasyBase {
    accessDirection?: AccessDirectionEnum;
    accessFrom?: string;
    accessType?: PortAccessTypeEnum;
    cidrListAliases?: string[];
    cidrs?: string[];
    commonName?: string;
    fromPort?: number;
    ipv6Cidrs?: string[];
    protocol?: NetworkProtocolEnum;
    toPort?: number;
}
