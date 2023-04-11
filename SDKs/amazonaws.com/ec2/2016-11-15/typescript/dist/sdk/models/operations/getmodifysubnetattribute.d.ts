import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifySubnetAttributeActionEnum {
    ModifySubnetAttribute = "ModifySubnetAttribute"
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifySubnetAttributeAssignIpv6AddressOnCreation extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifySubnetAttributeDisableLniAtDeviceIndex extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifySubnetAttributeEnableDns64 extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifySubnetAttributeEnableResourceNameDNSAaaaRecordOnLaunch extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifySubnetAttributeEnableResourceNameDNSARecordOnLaunch extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifySubnetAttributeMapCustomerOwnedIPOnLaunch extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifySubnetAttributeMapPublicIPOnLaunch extends SpeakeasyBase {
    value?: boolean;
}
/**
 * The type of hostname to assign to instances in the subnet at launch. For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an instance DNS name can be based on the instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6 only subnets, an instance DNS name must be based on the instance ID (resource-name).
 */
export declare enum GETModifySubnetAttributePrivateDNSHostnameTypeOnLaunchEnum {
    IpName = "ip-name",
    ResourceName = "resource-name"
}
export declare enum GETModifySubnetAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifySubnetAttributeRequest extends SpeakeasyBase {
    action: GETModifySubnetAttributeActionEnum;
    /**
     * <p>Specify <code>true</code> to indicate that network interfaces created in the specified subnet should be assigned an IPv6 address. This includes a network interface that's created when launching an instance into the subnet (the instance therefore receives an IPv6 address). </p> <p>If you enable the IPv6 addressing feature for your subnet, your network interface or instance only receives an IPv6 address if it's created using version <code>2016-11-15</code> or later of the Amazon EC2 API.</p>
     */
    assignIpv6AddressOnCreation?: GETModifySubnetAttributeAssignIpv6AddressOnCreation;
    /**
     * <p>The customer-owned IPv4 address pool associated with the subnet.</p> <p>You must set this value when you specify <code>true</code> for <code>MapCustomerOwnedIpOnLaunch</code>.</p>
     */
    customerOwnedIpv4Pool?: string;
    /**
     *  Specify <code>true</code> to indicate that local network interfaces at the current position should be disabled.
     */
    disableLniAtDeviceIndex?: GETModifySubnetAttributeDisableLniAtDeviceIndex;
    /**
     * Indicates whether DNS queries made to the Amazon-provided DNS Resolver in this subnet should return synthetic IPv6 addresses for IPv4-only destinations.
     */
    enableDns64?: GETModifySubnetAttributeEnableDns64;
    /**
     *  Indicates the device position for local network interfaces in this subnet. For example, <code>1</code> indicates local network interfaces in this subnet are the secondary network interface (eth1). A local network interface cannot be the primary network interface (eth0).
     */
    enableLniAtDeviceIndex?: number;
    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
     */
    enableResourceNameDnsAAAARecordOnLaunch?: GETModifySubnetAttributeEnableResourceNameDNSAaaaRecordOnLaunch;
    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
     */
    enableResourceNameDnsARecordOnLaunch?: GETModifySubnetAttributeEnableResourceNameDNSARecordOnLaunch;
    /**
     * <p>Specify <code>true</code> to indicate that network interfaces attached to instances created in the specified subnet should be assigned a customer-owned IPv4 address.</p> <p>When this value is <code>true</code>, you must specify the customer-owned IP pool using <code>CustomerOwnedIpv4Pool</code>.</p>
     */
    mapCustomerOwnedIpOnLaunch?: GETModifySubnetAttributeMapCustomerOwnedIPOnLaunch;
    /**
     * Specify <code>true</code> to indicate that network interfaces attached to instances created in the specified subnet should be assigned a public IPv4 address.
     */
    mapPublicIpOnLaunch?: GETModifySubnetAttributeMapPublicIPOnLaunch;
    /**
     * The type of hostname to assign to instances in the subnet at launch. For IPv4-only and dual-stack (IPv4 and IPv6) subnets, an instance DNS name can be based on the instance IPv4 address (ip-name) or the instance ID (resource-name). For IPv6 only subnets, an instance DNS name must be based on the instance ID (resource-name).
     */
    privateDnsHostnameTypeOnLaunch?: GETModifySubnetAttributePrivateDNSHostnameTypeOnLaunchEnum;
    /**
     * The ID of the subnet.
     */
    subnetId: string;
    version: GETModifySubnetAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifySubnetAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
