import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the subnet.
**/
export declare class CreateDefaultSubnetResultSubnet extends SpeakeasyBase {
    assignIpv6AddressOnCreation?: Record<string, any>;
    availabilityZone?: Record<string, any>;
    availabilityZoneId?: Record<string, any>;
    availableIpAddressCount?: Record<string, any>;
    cidrBlock?: Record<string, any>;
    customerOwnedIpv4Pool?: Record<string, any>;
    defaultForAz?: Record<string, any>;
    ipv6CidrBlockAssociationSet?: Record<string, any>;
    mapCustomerOwnedIpOnLaunch?: Record<string, any>;
    mapPublicIpOnLaunch?: Record<string, any>;
    outpostArn?: Record<string, any>;
    ownerId?: Record<string, any>;
    state?: Record<string, any>;
    subnetArn?: Record<string, any>;
    subnetId?: Record<string, any>;
    tags?: Record<string, any>;
    vpcId?: Record<string, any>;
}
export declare class CreateDefaultSubnetResult extends SpeakeasyBase {
    subnet?: CreateDefaultSubnetResultSubnet;
}
