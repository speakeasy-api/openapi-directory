import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PacketHeaderStatementRequestProtocolsEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * Describes a packet header statement.
 */
export declare class PacketHeaderStatementRequest extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPorts?: string[];
    destinationPrefixLists?: string[];
    protocols?: PacketHeaderStatementRequestProtocolsEnum[];
    sourceAddresses?: string[];
    sourcePorts?: string[];
    sourcePrefixLists?: string[];
}
