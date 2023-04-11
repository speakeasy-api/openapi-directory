import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The address status.
 */
export declare enum UnassignPrivateNatGatewayAddressResultNatGatewayAddressesStatusEnum {
    Assigning = "assigning",
    Unassigning = "unassigning",
    Associating = "associating",
    Disassociating = "disassociating",
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * Describes the IP addresses and network interface associated with a NAT gateway.
 */
export declare class UnassignPrivateNatGatewayAddressResultNatGatewayAddresses extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    failureMessage?: string;
    isPrimary?: boolean;
    networkInterfaceId?: string;
    privateIp?: string;
    publicIp?: string;
    status?: UnassignPrivateNatGatewayAddressResultNatGatewayAddressesStatusEnum;
}
/**
 * Success
 */
export declare class UnassignPrivateNatGatewayAddressResult extends SpeakeasyBase {
    natGatewayAddresses?: UnassignPrivateNatGatewayAddressResultNatGatewayAddresses[];
    natGatewayId?: string;
}
