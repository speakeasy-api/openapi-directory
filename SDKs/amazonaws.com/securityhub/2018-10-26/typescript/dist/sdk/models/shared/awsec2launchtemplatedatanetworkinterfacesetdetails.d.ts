import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails } from "./awsec2launchtemplatedatanetworkinterfacesetipv4prefixesdetails";
import { AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails } from "./awsec2launchtemplatedatanetworkinterfacesetipv6addressesdetails";
import { AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails } from "./awsec2launchtemplatedatanetworkinterfacesetipv6prefixesdetails";
import { AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails } from "./awsec2launchtemplatedatanetworkinterfacesetprivateipaddressesdetails";
/**
 *  One or more network interfaces to attach to an Amazon EC2 instance. If you specify a network interface, you must specify security groups and subnets as part of the network interface.
 */
export declare class AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails extends SpeakeasyBase {
    associateCarrierIpAddress?: boolean;
    associatePublicIpAddress?: boolean;
    deleteOnTermination?: boolean;
    description?: string;
    deviceIndex?: number;
    groups?: string[];
    interfaceType?: string;
    ipv4PrefixCount?: number;
    ipv4Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails[];
    ipv6AddressCount?: number;
    ipv6Addresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails[];
    ipv6PrefixCount?: number;
    ipv6Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails[];
    networkCardIndex?: number;
    networkInterfaceId?: string;
    privateIpAddress?: string;
    privateIpAddresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails[];
    secondaryPrivateIpAddressCount?: number;
    subnetId?: string;
}
