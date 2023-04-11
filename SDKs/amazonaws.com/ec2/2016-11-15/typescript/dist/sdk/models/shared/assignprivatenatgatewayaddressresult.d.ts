import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The address status.
 */
export declare enum AssignPrivateNatGatewayAddressResultNatGatewayAddressesStatusEnum {
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
export declare class AssignPrivateNatGatewayAddressResultNatGatewayAddresses extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    failureMessage?: string;
    isPrimary?: boolean;
    networkInterfaceId?: string;
    privateIp?: string;
    publicIp?: string;
    status?: AssignPrivateNatGatewayAddressResultNatGatewayAddressesStatusEnum;
}
/**
 * Success
 */
export declare class AssignPrivateNatGatewayAddressResult extends SpeakeasyBase {
    natGatewayAddresses?: AssignPrivateNatGatewayAddressResultNatGatewayAddresses[];
    natGatewayId?: string;
}
