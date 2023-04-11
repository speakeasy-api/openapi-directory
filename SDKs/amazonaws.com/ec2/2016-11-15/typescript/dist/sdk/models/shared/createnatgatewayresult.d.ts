import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether the NAT gateway supports public or private connectivity.
 */
export declare enum CreateNatGatewayResultNatGatewayConnectivityTypeEnum {
    Private = "private",
    Public = "public"
}
/**
 * The address status.
 */
export declare enum CreateNatGatewayResultNatGatewayNatGatewayAddressesStatusEnum {
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
export declare class CreateNatGatewayResultNatGatewayNatGatewayAddresses extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    failureMessage?: string;
    isPrimary?: boolean;
    networkInterfaceId?: string;
    privateIp?: string;
    publicIp?: string;
    status?: CreateNatGatewayResultNatGatewayNatGatewayAddressesStatusEnum;
}
/**
 * Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
 */
export declare class CreateNatGatewayResultNatGatewayProvisionedBandwidth extends SpeakeasyBase {
    provisionTime?: Date;
    provisioned?: string;
    requestTime?: Date;
    requested?: string;
    status?: string;
}
/**
 * <p>The state of the NAT gateway.</p> <ul> <li> <p> <code>pending</code>: The NAT gateway is being created and is not ready to process traffic.</p> </li> <li> <p> <code>failed</code>: The NAT gateway could not be created. Check the <code>failureCode</code> and <code>failureMessage</code> fields for the reason.</p> </li> <li> <p> <code>available</code>: The NAT gateway is able to process traffic. This status remains until you delete the NAT gateway, and does not indicate the health of the NAT gateway.</p> </li> <li> <p> <code>deleting</code>: The NAT gateway is in the process of being terminated and may still be processing traffic.</p> </li> <li> <p> <code>deleted</code>: The NAT gateway has been terminated and is no longer processing traffic.</p> </li> </ul>
 */
export declare enum CreateNatGatewayResultNatGatewayStateEnum {
    Pending = "pending",
    Failed = "failed",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class CreateNatGatewayResultNatGatewayTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the NAT gateway.
 */
export declare class CreateNatGatewayResultNatGateway extends SpeakeasyBase {
    connectivityType?: CreateNatGatewayResultNatGatewayConnectivityTypeEnum;
    createTime?: Date;
    deleteTime?: Date;
    failureCode?: string;
    failureMessage?: string;
    natGatewayAddresses?: CreateNatGatewayResultNatGatewayNatGatewayAddresses[];
    natGatewayId?: string;
    provisionedBandwidth?: CreateNatGatewayResultNatGatewayProvisionedBandwidth;
    state?: CreateNatGatewayResultNatGatewayStateEnum;
    subnetId?: string;
    tags?: CreateNatGatewayResultNatGatewayTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class CreateNatGatewayResult extends SpeakeasyBase {
    clientToken?: string;
    natGateway?: CreateNatGatewayResultNatGateway;
}
