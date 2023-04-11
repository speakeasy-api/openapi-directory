import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The address status.
 */
export declare enum AssociateNatGatewayAddressResultNatGatewayAddressesStatusEnum {
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
export declare class AssociateNatGatewayAddressResultNatGatewayAddresses extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    failureMessage?: string;
    isPrimary?: boolean;
    networkInterfaceId?: string;
    privateIp?: string;
    publicIp?: string;
    status?: AssociateNatGatewayAddressResultNatGatewayAddressesStatusEnum;
}
/**
 * Success
 */
export declare class AssociateNatGatewayAddressResult extends SpeakeasyBase {
    natGatewayAddresses?: AssociateNatGatewayAddressResultNatGatewayAddresses[];
    natGatewayId?: string;
}
