import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether this Elastic IP address is for use with instances in EC2-Classic (<code>standard</code>) or instances in a VPC (<code>vpc</code>).
 */
export declare enum DescribeAddressesResultAddressesDomainEnum {
    Vpc = "vpc",
    Standard = "standard"
}
/**
 * Describes a tag.
 */
export declare class DescribeAddressesResultAddressesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an Elastic IP address, or a carrier IP address.
 */
export declare class DescribeAddressesResultAddresses extends SpeakeasyBase {
    allocationId?: string;
    associationId?: string;
    carrierIp?: string;
    customerOwnedIp?: string;
    customerOwnedIpv4Pool?: string;
    domain?: DescribeAddressesResultAddressesDomainEnum;
    instanceId?: string;
    networkBorderGroup?: string;
    networkInterfaceId?: string;
    networkInterfaceOwnerId?: string;
    privateIpAddress?: string;
    publicIp?: string;
    publicIpv4Pool?: string;
    tags?: DescribeAddressesResultAddressesTags[];
}
/**
 * Success
 */
export declare class DescribeAddressesResult extends SpeakeasyBase {
    addresses?: DescribeAddressesResultAddresses[];
}
