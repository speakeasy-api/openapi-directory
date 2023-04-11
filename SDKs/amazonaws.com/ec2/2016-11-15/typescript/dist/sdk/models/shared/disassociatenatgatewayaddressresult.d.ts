import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The address status.
 */
export declare enum DisassociateNatGatewayAddressResultNatGatewayAddressesStatusEnum {
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
export declare class DisassociateNatGatewayAddressResultNatGatewayAddresses extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    failureMessage?: string;
    isPrimary?: boolean;
    networkInterfaceId?: string;
    privateIp?: string;
    publicIp?: string;
    status?: DisassociateNatGatewayAddressResultNatGatewayAddressesStatusEnum;
}
/**
 * Success
 */
export declare class DisassociateNatGatewayAddressResult extends SpeakeasyBase {
    natGatewayAddresses?: DisassociateNatGatewayAddressResultNatGatewayAddresses[];
    natGatewayId?: string;
}
