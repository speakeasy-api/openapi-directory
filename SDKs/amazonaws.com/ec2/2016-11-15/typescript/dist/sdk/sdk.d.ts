import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://ec2.{region}.amazonaws.com", "https://ec2.{region}.amazonaws.com", "http://ec2.amazonaws.com", "https://ec2.amazonaws.com", "http://ec2.{region}.amazonaws.com.cn", "https://ec2.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <fullname>Amazon Elastic Compute Cloud</fullname> <p>Amazon Elastic Compute Cloud (Amazon EC2) provides secure and resizable computing capacity in the Amazon Web Services Cloud. Using Amazon EC2 eliminates the need to invest in hardware up front, so you can develop and deploy applications faster. Amazon Virtual Private Cloud (Amazon VPC) enables you to provision a logically isolated section of the Amazon Web Services Cloud where you can launch Amazon Web Services resources in a virtual network that you've defined. Amazon Elastic Block Store (Amazon EBS) provides block level storage volumes for use with EC2 instances. EBS volumes are highly available and reliable storage volumes that can be attached to any running instance and used like a hard drive.</p> <p>To learn more, see the following resources:</p> <ul> <li> <p>Amazon EC2: <a href="http://aws.amazon.com/ec2">Amazon EC2 product page</a>, <a href="https://docs.aws.amazon.com/ec2/index.html">Amazon EC2 documentation</a> </p> </li> <li> <p>Amazon EBS: <a href="http://aws.amazon.com/ebs">Amazon EBS product page</a>, <a href="https://docs.aws.amazon.com/ebs/index.html">Amazon EBS documentation</a> </p> </li> <li> <p>Amazon VPC: <a href="http://aws.amazon.com/vpc">Amazon VPC product page</a>, <a href="https://docs.aws.amazon.com/vpc/index.html">Amazon VPC documentation</a> </p> </li> <li> <p>VPN: <a href="http://aws.amazon.com/vpn">VPN product page</a>, <a href="https://docs.aws.amazon.com/vpn/index.html">VPN documentation</a> </p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/ec2/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Accepts a request to associate subnets with a transit gateway multicast domain.
     */
    getAcceptTransitGatewayMulticastDomainAssociations(req: operations.GETAcceptTransitGatewayMulticastDomainAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GETAcceptTransitGatewayMulticastDomainAssociationsResponse>;
    /**
     * Accepts a transit gateway peering attachment request. The peering attachment must be in the <code>pendingAcceptance</code> state.
     */
    getAcceptTransitGatewayPeeringAttachment(req: operations.GETAcceptTransitGatewayPeeringAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GETAcceptTransitGatewayPeeringAttachmentResponse>;
    /**
     * <p>Accepts a request to attach a VPC to a transit gateway.</p> <p>The VPC attachment must be in the <code>pendingAcceptance</code> state. Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests. Use <a>RejectTransitGatewayVpcAttachment</a> to reject a VPC attachment request.</p>
     */
    getAcceptTransitGatewayVpcAttachment(req: operations.GETAcceptTransitGatewayVpcAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GETAcceptTransitGatewayVpcAttachmentResponse>;
    /**
     * Accepts connection requests to your VPC endpoint service.
     */
    getAcceptVpcEndpointConnections(req: operations.GETAcceptVpcEndpointConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GETAcceptVpcEndpointConnectionsResponse>;
    /**
     * <p>Accept a VPC peering connection request. To accept a request, the VPC peering connection must be in the <code>pending-acceptance</code> state, and you must be the owner of the peer VPC. Use <a>DescribeVpcPeeringConnections</a> to view your outstanding VPC peering connection requests.</p> <p>For an inter-Region VPC peering connection request, you must accept the VPC peering connection in the Region of the accepter VPC.</p>
     */
    getAcceptVpcPeeringConnection(req: operations.GETAcceptVpcPeeringConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GETAcceptVpcPeeringConnectionResponse>;
    /**
     * <p>Advertises an IPv4 or IPv6 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP).</p> <p>You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise it from Amazon Web Services. To minimize down time, you can configure your Amazon Web Services resources to use an address from a BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current location and start advertising it through Amazon Web Services.</p> <p>It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of BGP propagation delays.</p> <p>To stop advertising the BYOIP CIDR, use <a>WithdrawByoipCidr</a>.</p>
     */
    getAdvertiseByoipCidr(req: operations.GETAdvertiseByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETAdvertiseByoipCidrResponse>;
    /**
     * <p>Allocate a CIDR from an IPAM pool. In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/allocate-cidrs-ipam.html">Allocate CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p> <note> <p>This action creates an allocation with strong consistency. The returned CIDR will not overlap with any other allocations from the same pool.</p> </note>
     */
    getAllocateIpamPoolCidr(req: operations.GETAllocateIpamPoolCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETAllocateIpamPoolCidrResponse>;
    /**
     * Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing security groups with the specified security groups.
     */
    getApplySecurityGroupsToClientVpnTargetNetwork(req: operations.GETApplySecurityGroupsToClientVpnTargetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.GETApplySecurityGroupsToClientVpnTargetNetworkResponse>;
    /**
     * <p>Assigns one or more IPv6 addresses to the specified network interface. You can specify one or more specific IPv6 addresses, or you can specify the number of IPv6 addresses to be automatically assigned from within the subnet's IPv6 CIDR block range. You can assign as many IPv6 addresses to a network interface as you can assign private IPv4 addresses, and the limit varies per instance type. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per Network Interface Per Instance Type</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You must specify either the IPv6 addresses or the IPv6 address count in the request. </p> <p>You can optionally use Prefix Delegation on the network interface. You must specify either the IPV6 Prefix Delegation prefixes, or the IPv6 Prefix Delegation count. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html"> Assigning prefixes to Amazon EC2 network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getAssignIpv6Addresses(req: operations.GETAssignIpv6AddressesRequest, config?: AxiosRequestConfig): Promise<operations.GETAssignIpv6AddressesResponse>;
    /**
     * <p>Assigns one or more secondary private IP addresses to the specified network interface.</p> <p>You can specify one or more specific secondary IP addresses, or you can specify the number of secondary IP addresses to be automatically assigned within the subnet's CIDR block range. The number of secondary IP addresses that you can assign to an instance varies by instance type. For information about instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about Elastic IP addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>When you move a secondary private IP address to another network interface, any Elastic IP address that is associated with the IP address is also moved.</p> <p>Remapping an IP address is an asynchronous operation. When you move an IP address from one network interface to another, check <code>network/interfaces/macs/mac/local-ipv4s</code> in the instance metadata to confirm that the remapping is complete.</p> <p>You must specify either the IP addresses or the IP address count in the request.</p> <p>You can optionally use Prefix Delegation on the network interface. You must specify either the IPv4 Prefix Delegation prefixes, or the IPv4 Prefix Delegation count. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html"> Assigning prefixes to Amazon EC2 network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getAssignPrivateIpAddresses(req: operations.GETAssignPrivateIpAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GETAssignPrivateIpAddressesResponse>;
    /**
     * Assigns one or more private IPv4 addresses to a private NAT gateway. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-working-with">Work with NAT gateways</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    getAssignPrivateNatGatewayAddress(req: operations.GETAssignPrivateNatGatewayAddressRequest, config?: AxiosRequestConfig): Promise<operations.GETAssignPrivateNatGatewayAddressResponse>;
    /**
     * <p>Associates an Elastic IP address, or carrier IP address (for instances that are in subnets in Wavelength Zones) with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account.</p> <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>[EC2-Classic, VPC in an EC2-VPC-only account] If the Elastic IP address is already associated with a different instance, it is disassociated from that instance and associated with the specified instance. If you associate an Elastic IP address with an instance that has an existing Elastic IP address, the existing address is disassociated from the instance, but remains allocated to your account.</p> <p>[VPC in an EC2-Classic account] If you don't specify a private IP address, the Elastic IP address is associated with the primary IP address. If the Elastic IP address is already associated with a different instance or a network interface, you get an error unless you allow reassociation. You cannot associate an Elastic IP address with an instance or network interface that has an existing Elastic IP address.</p> <p>[Subnets in Wavelength Zones] You can associate an IP address from the telecommunication carrier to the instance or network interface. </p> <p>You cannot associate an Elastic IP address with an interface in a different network border group.</p> <important> <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error, and you may be charged for each time the Elastic IP address is remapped to the same instance. For more information, see the <i>Elastic IP Addresses</i> section of <a href="http://aws.amazon.com/ec2/pricing/">Amazon EC2 Pricing</a>.</p> </important> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    getAssociateAddress(req: operations.GETAssociateAddressRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateAddressResponse>;
    /**
     * <p>Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy.</p> <p>If you specified a VPC when you created the Client VPN endpoint or if you have previous subnet associations, the specified subnet must be in the same VPC. To specify a subnet that's in a different VPC, you must first modify the Client VPN endpoint (<a>ModifyClientVpnEndpoint</a>) and change the VPC that's associated with it.</p>
     */
    getAssociateClientVpnTargetNetwork(req: operations.GETAssociateClientVpnTargetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateClientVpnTargetNetworkResponse>;
    /**
     * <p>Associates a set of DHCP options (that you've previously created) with the specified VPC, or associates no DHCP options with the VPC.</p> <p>After you associate the options with the VPC, any existing instances and all new instances that you launch in that VPC use the options. You don't need to restart or relaunch the instances. They automatically pick up the changes within a few hours, depending on how frequently the instance renews its DHCP lease. You can explicitly renew the lease using the operating system on the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP options sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    getAssociateDhcpOptions(req: operations.GETAssociateDhcpOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateDhcpOptionsResponse>;
    /**
     * <p>Associates an Identity and Access Management (IAM) role with an Certificate Manager (ACM) certificate. This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html">Certificate Manager for Nitro Enclaves</a> in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p> <p>When the IAM role is associated with the ACM certificate, the certificate, certificate chain, and encrypted private key are placed in an Amazon S3 location that only the associated IAM role can access. The private key of the certificate is encrypted with an Amazon Web Services managed key that has an attached attestation-based key policy.</p> <p>To enable the IAM role to access the Amazon S3 object, you must grant it permission to call <code>s3:GetObject</code> on the Amazon S3 bucket returned by the command. To enable the IAM role to access the KMS key, you must grant it permission to call <code>kms:Decrypt</code> on the KMS key returned by the command. For more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html#add-policy"> Grant the role permission to access the certificate and encryption key</a> in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
     */
    getAssociateEnclaveCertificateIamRole(req: operations.GETAssociateEnclaveCertificateIamRoleRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateEnclaveCertificateIamRoleResponse>;
    /**
     * Associates an IAM instance profile with a running or stopped instance. You cannot associate more than one IAM instance profile with an instance.
     */
    getAssociateIamInstanceProfile(req: operations.GETAssociateIamInstanceProfileRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateIamInstanceProfileResponse>;
    /**
     * <p>Associates Elastic IP addresses (EIPs) and private IPv4 addresses with a public NAT gateway. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-working-with">Work with NAT gateways</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>By default, you can associate up to 2 Elastic IP addresses per public NAT gateway. You can increase the limit by requesting a quota adjustment. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-eips">Elastic IP address quotas</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    getAssociateNatGatewayAddress(req: operations.GETAssociateNatGatewayAddressRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateNatGatewayAddressResponse>;
    /**
     * <p>Associates a subnet in your VPC or an internet gateway or virtual private gateway attached to your VPC with a route table in your VPC. This association causes traffic from the subnet or gateway to be routed according to the routes in the route table. The action returns an association ID, which you need in order to disassociate the route table later. A route table can be associated with multiple subnets.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    getAssociateRouteTable(req: operations.GETAssociateRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateRouteTableResponse>;
    /**
     * Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR block with your subnet. An IPv6 CIDR block must have a prefix length of /64.
     */
    getAssociateSubnetCidrBlock(req: operations.GETAssociateSubnetCidrBlockRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateSubnetCidrBlockResponse>;
    /**
     * <p>Associates the specified subnets and transit gateway attachments with the specified transit gateway multicast domain.</p> <p>The transit gateway attachment must be in the available state before you can add a resource. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html">DescribeTransitGatewayAttachments</a> to see the state of the attachment.</p>
     */
    getAssociateTransitGatewayMulticastDomain(req: operations.GETAssociateTransitGatewayMulticastDomainRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateTransitGatewayMulticastDomainResponse>;
    /**
     * Associates the specified transit gateway attachment with a transit gateway policy table.
     */
    getAssociateTransitGatewayPolicyTable(req: operations.GETAssociateTransitGatewayPolicyTableRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateTransitGatewayPolicyTableResponse>;
    /**
     * Associates the specified attachment with the specified transit gateway route table. You can associate only one route table with an attachment.
     */
    getAssociateTransitGatewayRouteTable(req: operations.GETAssociateTransitGatewayRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateTransitGatewayRouteTableResponse>;
    /**
     * <note> <p>This API action is currently in <b>limited preview only</b>. If you are interested in using this feature, contact your account manager.</p> </note> <p>Associates a branch network interface with a trunk network interface.</p> <p>Before you create the association, run the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html">create-network-interface</a> command and set <code>--interface-type</code> to <code>trunk</code>. You must also create a network interface for each branch network interface that you want to associate with the trunk network interface.</p>
     */
    getAssociateTrunkInterface(req: operations.GETAssociateTrunkInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateTrunkInterfaceResponse>;
    /**
     * <p>Associates a CIDR block with your VPC. You can associate a secondary IPv4 CIDR block, an Amazon-provided IPv6 CIDR block, or an IPv6 CIDR block from an IPv6 address pool that you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>). The IPv6 CIDR block size is fixed at /56.</p> <p>You must specify one of the following in the request: an IPv4 CIDR block, an IPv6 pool, or an Amazon-provided IPv6 CIDR block.</p> <p>For more information about associating CIDR blocks with your VPC and applicable restrictions, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#VPC_Sizing">VPC and subnet sizing</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    getAssociateVpcCidrBlock(req: operations.GETAssociateVpcCidrBlockRequest, config?: AxiosRequestConfig): Promise<operations.GETAssociateVpcCidrBlockResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's security groups. You cannot link an EC2-Classic instance to more than one VPC at a time. You can only link an instance that's in the <code>running</code> state. An instance is automatically unlinked from a VPC when it's stopped - you can link it to the VPC again when you restart it.</p> <p>After you've linked an instance, you cannot change the VPC security groups that are associated with it. To change the security groups, you must first unlink the instance, and then link it again.</p> <p>Linking your instance to a VPC is sometimes referred to as <i>attaching</i> your instance.</p>
     */
    getAttachClassicLinkVpc(req: operations.GETAttachClassicLinkVpcRequest, config?: AxiosRequestConfig): Promise<operations.GETAttachClassicLinkVpcResponse>;
    /**
     * Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and the VPC. For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.
     */
    getAttachInternetGateway(req: operations.GETAttachInternetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETAttachInternetGatewayResponse>;
    /**
     * A trust provider is a third-party entity that creates, maintains, and manages identity information for users and devices. One or more trust providers can be attached to an Amazon Web Services Verified Access instance.
     */
    getAttachVerifiedAccessTrustProvider(req: operations.GETAttachVerifiedAccessTrustProviderRequest, config?: AxiosRequestConfig): Promise<operations.GETAttachVerifiedAccessTrustProviderResponse>;
    /**
     * <p>Attaches an EBS volume to a running or stopped instance and exposes it to the instance with the specified device name.</p> <p>Encrypted EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>After you attach an EBS volume, you must make it available. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html">Make an EBS volume available for use</a>.</p> <p>If a volume has an Amazon Web Services Marketplace product code:</p> <ul> <li> <p>The volume can be attached only to a stopped instance.</p> </li> <li> <p>Amazon Web Services Marketplace product codes are copied from the volume to the instance.</p> </li> <li> <p>You must be subscribed to the product.</p> </li> <li> <p>The instance type and operating system of the instance must support the product. For example, you can't detach a volume from a Windows instance and attach it to a Linux instance.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html">Attach an Amazon EBS volume to an instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getAttachVolume(req: operations.GETAttachVolumeRequest, config?: AxiosRequestConfig): Promise<operations.GETAttachVolumeResponse>;
    /**
     * <p>Attaches a virtual private gateway to a VPC. You can attach one virtual private gateway to one VPC at a time.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
     */
    getAttachVpnGateway(req: operations.GETAttachVpnGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETAttachVpnGatewayResponse>;
    /**
     * Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as firewall rules that grant access to networks. You must configure ingress authorization rules to enable clients to access resources in Amazon Web Services or on-premises networks.
     */
    getAuthorizeClientVpnIngress(req: operations.GETAuthorizeClientVpnIngressRequest, config?: AxiosRequestConfig): Promise<operations.GETAuthorizeClientVpnIngressResponse>;
    /**
     * Cancels a bundling operation for an instance store-backed Windows instance.
     */
    getCancelBundleTask(req: operations.GETCancelBundleTaskRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelBundleTaskResponse>;
    /**
     * <p>Cancels the specified Capacity Reservation, releases the reserved capacity, and changes the Capacity Reservation's state to <code>cancelled</code>.</p> <p>Instances running in the reserved capacity continue running until you stop them. Stopped instances that target the Capacity Reservation can no longer launch. Modify these instances to either target a different Capacity Reservation, launch On-Demand Instance capacity, or run in any open Capacity Reservation that has matching attributes and sufficient capacity.</p>
     */
    getCancelCapacityReservation(req: operations.GETCancelCapacityReservationRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelCapacityReservationResponse>;
    /**
     * <p>Cancels one or more Capacity Reservation Fleets. When you cancel a Capacity Reservation Fleet, the following happens:</p> <ul> <li> <p>The Capacity Reservation Fleet's status changes to <code>cancelled</code>.</p> </li> <li> <p>The individual Capacity Reservations in the Fleet are cancelled. Instances running in the Capacity Reservations at the time of cancelling the Fleet continue to run in shared capacity.</p> </li> <li> <p>The Fleet stops creating new Capacity Reservations.</p> </li> </ul>
     */
    getCancelCapacityReservationFleets(req: operations.GETCancelCapacityReservationFleetsRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelCapacityReservationFleetsResponse>;
    /**
     * <p>Cancels an active conversion task. The task can be the import of an instance or volume. The action removes all artifacts of the conversion, including a partially uploaded volume or instance. If the conversion is complete or is in the process of transferring the final disk image, the command fails and returns an exception.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a Virtual Machine Using the Amazon EC2 CLI</a>.</p>
     */
    getCancelConversionTask(req: operations.GETCancelConversionTaskRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelConversionTaskResponse>;
    /**
     * Cancels an active export task. The request removes all artifacts of the export, including any partially-created Amazon S3 objects. If the export task is complete or is in the process of transferring the final disk image, the command fails and returns an error.
     */
    getCancelExportTask(req: operations.GETCancelExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelExportTaskResponse>;
    /**
     * Removes your Amazon Web Services account from the launch permissions for the specified AMI. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cancel-sharing-an-AMI.html"> Cancel having an AMI shared with your Amazon Web Services account</a> in the <i>Amazon EC2 User Guide</i>.
     */
    getCancelImageLaunchPermission(req: operations.GETCancelImageLaunchPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelImageLaunchPermissionResponse>;
    /**
     * Cancels an in-process import virtual machine or import snapshot task.
     */
    getCancelImportTask(req: operations.GETCancelImportTaskRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelImportTaskResponse>;
    /**
     * <p>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getCancelReservedInstancesListing(req: operations.GETCancelReservedInstancesListingRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelReservedInstancesListingResponse>;
    /**
     * <p>Cancels the specified Spot Fleet requests.</p> <p>After you cancel a Spot Fleet request, the Spot Fleet launches no new instances.</p> <p>You must also specify whether a canceled Spot Fleet request should terminate its instances. If you choose to terminate the instances, the Spot Fleet request enters the <code>cancelled_terminating</code> state. Otherwise, the Spot Fleet request enters the <code>cancelled_running</code> state and the instances continue to run until they are interrupted or you terminate them manually.</p>
     */
    getCancelSpotFleetRequests(req: operations.GETCancelSpotFleetRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelSpotFleetRequestsResponse>;
    /**
     * <p>Cancels one or more Spot Instance requests.</p> <important> <p>Canceling a Spot Instance request does not terminate running Spot Instances associated with the request.</p> </important>
     */
    getCancelSpotInstanceRequests(req: operations.GETCancelSpotInstanceRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GETCancelSpotInstanceRequestsResponse>;
    /**
     * Determines whether a product code is associated with an instance. This action can only be used by the owner of the product code. It is useful when a product code owner must verify whether another user's instance is eligible for support.
     */
    getConfirmProductInstance(req: operations.GETConfirmProductInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETConfirmProductInstanceResponse>;
    /**
     * Copies the specified Amazon FPGA Image (AFI) to the current Region.
     */
    getCopyFpgaImage(req: operations.GETCopyFpgaImageRequest, config?: AxiosRequestConfig): Promise<operations.GETCopyFpgaImageResponse>;
    /**
     * <p>Initiates the copy of an AMI. You can copy an AMI from one Region to another, or from a Region to an Outpost. You can't copy an AMI from an Outpost to a Region, from one Outpost to another, or within the same Outpost. To copy an AMI to another partition, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html">CreateStoreImageTask</a>.</p> <p>To copy an AMI from one Region to another, specify the source Region using the <b>SourceRegion</b> parameter, and specify the destination Region using its endpoint. Copies of encrypted backing snapshots for the AMI are encrypted. Copies of unencrypted backing snapshots remain unencrypted, unless you set <code>Encrypted</code> during the copy operation. You cannot create an unencrypted copy of an encrypted backing snapshot.</p> <p>To copy an AMI from a Region to an Outpost, specify the source Region using the <b>SourceRegion</b> parameter, and specify the ARN of the destination Outpost using <b>DestinationOutpostArn</b>. Backing snapshots copied to an Outpost are encrypted by default using the default encryption key for the Region, or a different key that you specify in the request using <b>KmsKeyId</b>. Outposts do not support unencrypted snapshots. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami"> Amazon EBS local snapshots on Outposts</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>For more information about the prerequisites and limits when copying an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html">Copy an AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getCopyImage(req: operations.GETCopyImageRequest, config?: AxiosRequestConfig): Promise<operations.GETCopyImageResponse>;
    /**
     * Adds a route to a network to a Client VPN endpoint. Each Client VPN endpoint has a route table that describes the available destination network routes. Each route in the route table specifies the path for traﬃc to speciﬁc resources or networks.
     */
    getCreateClientVpnRoute(req: operations.GETCreateClientVpnRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateClientVpnRouteResponse>;
    /**
     *  Creates a range of customer-owned IP addresses.
     */
    getCreateCoipCidr(req: operations.GETCreateCoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateCoipCidrResponse>;
    /**
     * Creates a default subnet with a size <code>/20</code> IPv4 CIDR block in the specified Availability Zone in your default VPC. You can have only one default subnet per Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-subnet">Creating a default subnet</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    getCreateDefaultSubnet(req: operations.GETCreateDefaultSubnetRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateDefaultSubnetResponse>;
    /**
     * <p>Creates a default VPC with a size <code>/16</code> IPv4 CIDR block and a default subnet in each Availability Zone. For more information about the components of a default VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html">Default VPC and default subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>. You cannot specify the components of the default VPC yourself.</p> <p>If you deleted your previous default VPC, you can create a default VPC. You cannot have more than one default VPC per Region.</p> <p>If your account supports EC2-Classic, you cannot use this action to create a default VPC in a Region that supports EC2-Classic. If you want a default VPC in a Region that supports EC2-Classic, see "I really want a default VPC for my existing EC2 account. Is that possible?" in the <a href="http://aws.amazon.com/vpc/faqs/#Default_VPCs">Default VPCs FAQ</a>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    getCreateDefaultVpc(req: operations.GETCreateDefaultVpcRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateDefaultVpcResponse>;
    /**
     * <p>Creates a static route for the specified local gateway route table. You must specify one of the following targets: </p> <ul> <li> <p> <code>LocalGatewayVirtualInterfaceGroupId</code> </p> </li> <li> <p> <code>NetworkInterfaceId</code> </p> </li> </ul>
     */
    getCreateLocalGatewayRoute(req: operations.GETCreateLocalGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateLocalGatewayRouteResponse>;
    /**
     * <p>Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of ingress rules and a separate set of egress rules.</p> <p>We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules.</p> <p>After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one.</p> <p>For more information about network ACLs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    getCreateNetworkAclEntry(req: operations.GETCreateNetworkAclEntryRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateNetworkAclEntryResponse>;
    /**
     * <p>Grants an Amazon Web Services-authorized account permission to attach the specified network interface to an instance in their account.</p> <p>You can grant permission to a single Amazon Web Services account only, and only one account at a time.</p>
     */
    getCreateNetworkInterfacePermission(req: operations.GETCreateNetworkInterfacePermissionRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateNetworkInterfacePermissionResponse>;
    /**
     * <p>Creates a route in a route table within a VPC.</p> <p>You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the resources from the parameter list.</p> <p>When determining how to route traffic, we use the route with the most specific match. For example, traffic is destined for the IPv4 address <code>192.0.2.3</code>, and the route table includes the following two IPv4 routes:</p> <ul> <li> <p> <code>192.0.2.0/24</code> (goes to some target A)</p> </li> <li> <p> <code>192.0.2.0/28</code> (goes to some target B)</p> </li> </ul> <p>Both routes apply to the traffic destined for <code>192.0.2.3</code>. However, the second route in the list covers a smaller number of IP addresses and is therefore more specific, so we use that route to determine where to target the traffic.</p> <p>For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    getCreateRoute(req: operations.GETCreateRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateRouteResponse>;
    /**
     * Creates a data feed for Spot Instances, enabling you to view Spot Instance usage logs. You can create one data feed per Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot Instance data feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
     */
    getCreateSpotDatafeedSubscription(req: operations.GETCreateSpotDatafeedSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateSpotDatafeedSubscriptionResponse>;
    /**
     * <p>Creates a Traffic Mirror filter rule.</p> <p>A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.</p> <p>You need the Traffic Mirror filter ID when you create the rule.</p>
     */
    getCreateTrafficMirrorFilterRule(req: operations.GETCreateTrafficMirrorFilterRuleRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateTrafficMirrorFilterRuleResponse>;
    /**
     * Creates a reference (route) to a prefix list in a specified transit gateway route table.
     */
    getCreateTransitGatewayPrefixListReference(req: operations.GETCreateTransitGatewayPrefixListReferenceRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateTransitGatewayPrefixListReferenceResponse>;
    /**
     * Creates a static route for the specified transit gateway route table.
     */
    getCreateTransitGatewayRoute(req: operations.GETCreateTransitGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateTransitGatewayRouteResponse>;
    /**
     * <p>Creates a connection notification for a specified VPC endpoint or VPC endpoint service. A connection notification notifies you of specific endpoint events. You must create an SNS topic to receive notifications. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Create a Topic</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.</p> <p>You can create a connection notification for interface endpoints only.</p>
     */
    getCreateVpcEndpointConnectionNotification(req: operations.GETCreateVpcEndpointConnectionNotificationRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateVpcEndpointConnectionNotificationResponse>;
    /**
     * <p>Creates a static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
     */
    getCreateVpnConnectionRoute(req: operations.GETCreateVpnConnectionRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETCreateVpnConnectionRouteResponse>;
    /**
     * <p>Deletes a carrier gateway.</p> <important> <p>If you do not delete the route that contains the carrier gateway as the Target, the route is a blackhole route. For information about how to delete a route, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html">DeleteRoute</a>.</p> </important>
     */
    getDeleteCarrierGateway(req: operations.GETDeleteCarrierGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteCarrierGatewayResponse>;
    /**
     * Deletes the specified Client VPN endpoint. You must disassociate all target networks before you can delete a Client VPN endpoint.
     */
    getDeleteClientVpnEndpoint(req: operations.GETDeleteClientVpnEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteClientVpnEndpointResponse>;
    /**
     * Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using the <b>CreateClientVpnRoute</b> action. You cannot delete routes that were automatically added when associating a subnet. To remove routes that have been automatically added, disassociate the target subnet from the Client VPN endpoint.
     */
    getDeleteClientVpnRoute(req: operations.GETDeleteClientVpnRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteClientVpnRouteResponse>;
    /**
     *  Deletes a range of customer-owned IP addresses.
     */
    getDeleteCoipCidr(req: operations.GETDeleteCoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteCoipCidrResponse>;
    /**
     * Deletes a pool of customer-owned IP (CoIP) addresses.
     */
    getDeleteCoipPool(req: operations.GETDeleteCoipPoolRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteCoipPoolResponse>;
    /**
     * Deletes the specified customer gateway. You must delete the VPN connection before you can delete the customer gateway.
     */
    getDeleteCustomerGateway(req: operations.GETDeleteCustomerGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteCustomerGatewayResponse>;
    /**
     * Deletes the specified set of DHCP options. You must disassociate the set of DHCP options before you can delete it. You can disassociate the set of DHCP options by associating either a new set of options or the default set of options with the VPC.
     */
    getDeleteDhcpOptions(req: operations.GETDeleteDhcpOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteDhcpOptionsResponse>;
    /**
     * Deletes an egress-only internet gateway.
     */
    getDeleteEgressOnlyInternetGateway(req: operations.GETDeleteEgressOnlyInternetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteEgressOnlyInternetGatewayResponse>;
    /**
     * <p>Deletes the specified EC2 Fleets.</p> <p>After you delete an EC2 Fleet, it launches no new instances.</p> <p>You must also specify whether a deleted EC2 Fleet should terminate its instances. If you choose to terminate the instances, the EC2 Fleet enters the <code>deleted_terminating</code> state. Otherwise, the EC2 Fleet enters the <code>deleted_running</code> state, and the instances continue to run until they are interrupted or you terminate them manually.</p> <p>For <code>instant</code> fleets, EC2 Fleet must terminate the instances when the fleet is deleted. A deleted <code>instant</code> fleet with running instances is not supported.</p> <p class="title"> <b>Restrictions</b> </p> <ul> <li> <p>You can delete up to 25 <code>instant</code> fleets in a single request. If you exceed this number, no <code>instant</code> fleets are deleted and an error is returned. There is no restriction on the number of fleets of type <code>maintain</code> or <code>request</code> that can be deleted in a single request.</p> </li> <li> <p>Up to 1000 instances can be terminated in a single request to delete <code>instant</code> fleets.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#delete-fleet">Delete an EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getDeleteFleets(req: operations.GETDeleteFleetsRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteFleetsResponse>;
    /**
     * Deletes one or more flow logs.
     */
    getDeleteFlowLogs(req: operations.GETDeleteFlowLogsRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteFlowLogsResponse>;
    /**
     * Deletes the specified Amazon FPGA Image (AFI).
     */
    getDeleteFpgaImage(req: operations.GETDeleteFpgaImageRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteFpgaImageResponse>;
    /**
     * <p>Deletes the specified event window.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled events</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getDeleteInstanceEventWindow(req: operations.GETDeleteInstanceEventWindowRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteInstanceEventWindowResponse>;
    /**
     * Deletes the specified internet gateway. You must detach the internet gateway from the VPC before you can delete it.
     */
    getDeleteInternetGateway(req: operations.GETDeleteInternetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteInternetGatewayResponse>;
    /**
     * <p>Delete an IPAM. Deleting an IPAM removes all monitored data associated with the IPAM including the historical data for CIDRs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/delete-ipam.html">Delete an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    getDeleteIpam(req: operations.GETDeleteIpamRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteIpamResponse>;
    /**
     * <p>Delete an IPAM pool.</p> <note> <p>You cannot delete an IPAM pool if there are allocations in it or CIDRs provisioned to it. To release allocations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseIpamPoolAllocation.html">ReleaseIpamPoolAllocation</a>. To deprovision pool CIDRs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionIpamPoolCidr.html">DeprovisionIpamPoolCidr</a>.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/delete-pool-ipam.html">Delete a pool</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    getDeleteIpamPool(req: operations.GETDeleteIpamPoolRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteIpamPoolResponse>;
    /**
     * Deletes an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
     */
    getDeleteIpamResourceDiscovery(req: operations.GETDeleteIpamResourceDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteIpamResourceDiscoveryResponse>;
    /**
     * <p>Delete the scope for an IPAM. You cannot delete the default scopes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/delete-scope-ipam.html">Delete a scope</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    getDeleteIpamScope(req: operations.GETDeleteIpamScopeRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteIpamScopeResponse>;
    /**
     * Deletes the specified key pair, by removing the public key from Amazon EC2.
     */
    getDeleteKeyPair(req: operations.GETDeleteKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteKeyPairResponse>;
    /**
     * Deletes a launch template. Deleting a launch template deletes all of its versions.
     */
    getDeleteLaunchTemplate(req: operations.GETDeleteLaunchTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteLaunchTemplateResponse>;
    /**
     * Deletes one or more versions of a launch template. You cannot delete the default version of a launch template; you must first assign a different version as the default. If the default version is the only version for the launch template, you must delete the entire launch template using <a>DeleteLaunchTemplate</a>.
     */
    getDeleteLaunchTemplateVersions(req: operations.GETDeleteLaunchTemplateVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteLaunchTemplateVersionsResponse>;
    /**
     * Deletes the specified route from the specified local gateway route table.
     */
    getDeleteLocalGatewayRoute(req: operations.GETDeleteLocalGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteLocalGatewayRouteResponse>;
    /**
     *  Deletes a local gateway route table.
     */
    getDeleteLocalGatewayRouteTable(req: operations.GETDeleteLocalGatewayRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteLocalGatewayRouteTableResponse>;
    /**
     *  Deletes a local gateway route table virtual interface group association.
     */
    getDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(req: operations.GETDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResponse>;
    /**
     * Deletes the specified association between a VPC and local gateway route table.
     */
    getDeleteLocalGatewayRouteTableVpcAssociation(req: operations.GETDeleteLocalGatewayRouteTableVpcAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteLocalGatewayRouteTableVpcAssociationResponse>;
    /**
     * Deletes the specified managed prefix list. You must first remove all references to the prefix list in your resources.
     */
    getDeleteManagedPrefixList(req: operations.GETDeleteManagedPrefixListRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteManagedPrefixListResponse>;
    /**
     * Deletes the specified NAT gateway. Deleting a public NAT gateway disassociates its Elastic IP address, but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway routes in your route tables.
     */
    getDeleteNatGateway(req: operations.GETDeleteNatGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteNatGatewayResponse>;
    /**
     * Deletes the specified network ACL. You can't delete the ACL if it's associated with any subnets. You can't delete the default network ACL.
     */
    getDeleteNetworkAcl(req: operations.GETDeleteNetworkAclRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteNetworkAclResponse>;
    /**
     * Deletes the specified ingress or egress entry (rule) from the specified network ACL.
     */
    getDeleteNetworkAclEntry(req: operations.GETDeleteNetworkAclEntryRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteNetworkAclEntryResponse>;
    /**
     * Deletes the specified Network Access Scope.
     */
    getDeleteNetworkInsightsAccessScope(req: operations.GETDeleteNetworkInsightsAccessScopeRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteNetworkInsightsAccessScopeResponse>;
    /**
     * Deletes the specified Network Access Scope analysis.
     */
    getDeleteNetworkInsightsAccessScopeAnalysis(req: operations.GETDeleteNetworkInsightsAccessScopeAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteNetworkInsightsAccessScopeAnalysisResponse>;
    /**
     * Deletes the specified network insights analysis.
     */
    getDeleteNetworkInsightsAnalysis(req: operations.GETDeleteNetworkInsightsAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteNetworkInsightsAnalysisResponse>;
    /**
     * Deletes the specified path.
     */
    getDeleteNetworkInsightsPath(req: operations.GETDeleteNetworkInsightsPathRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteNetworkInsightsPathResponse>;
    /**
     * Deletes the specified network interface. You must detach the network interface before you can delete it.
     */
    getDeleteNetworkInterface(req: operations.GETDeleteNetworkInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteNetworkInterfaceResponse>;
    /**
     * Deletes a permission for a network interface. By default, you cannot delete the permission if the account for which you're removing the permission has attached the network interface to an instance. However, you can force delete the permission, regardless of any attachment.
     */
    getDeleteNetworkInterfacePermission(req: operations.GETDeleteNetworkInterfacePermissionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteNetworkInterfacePermissionResponse>;
    /**
     * Deletes the specified placement group. You must terminate all instances in the placement group before you can delete the placement group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide</i>.
     */
    getDeletePlacementGroup(req: operations.GETDeletePlacementGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeletePlacementGroupResponse>;
    /**
     * Delete a public IPv4 pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to Amazon Web Services to manage with IPAM. IPv6 addresses you bring to Amazon Web Services, however, use IPAM pools only.
     */
    getDeletePublicIpv4Pool(req: operations.GETDeletePublicIpv4PoolRequest, config?: AxiosRequestConfig): Promise<operations.GETDeletePublicIpv4PoolResponse>;
    /**
     * Deletes the queued purchases for the specified Reserved Instances.
     */
    getDeleteQueuedReservedInstances(req: operations.GETDeleteQueuedReservedInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteQueuedReservedInstancesResponse>;
    /**
     * Deletes the specified route from the specified route table.
     */
    getDeleteRoute(req: operations.GETDeleteRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteRouteResponse>;
    /**
     * Deletes the specified route table. You must disassociate the route table from any subnets before you can delete it. You can't delete the main route table.
     */
    getDeleteRouteTable(req: operations.GETDeleteRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteRouteTableResponse>;
    /**
     * <p>Deletes a security group.</p> <p>If you attempt to delete a security group that is associated with an instance, or is referenced by another security group, the operation fails with <code>InvalidGroup.InUse</code> in EC2-Classic or <code>DependencyViolation</code> in EC2-VPC.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    getDeleteSecurityGroup(req: operations.GETDeleteSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteSecurityGroupResponse>;
    /**
     * <p>Deletes the specified snapshot.</p> <p>When you make periodic snapshots of a volume, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the volume.</p> <p>You cannot delete a snapshot of the root device of an EBS volume used by a registered AMI. You must first de-register the AMI before you can delete the snapshot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-snapshot.html">Delete an Amazon EBS snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getDeleteSnapshot(req: operations.GETDeleteSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteSnapshotResponse>;
    /**
     * Deletes the data feed for Spot Instances.
     */
    getDeleteSpotDatafeedSubscription(req: operations.GETDeleteSpotDatafeedSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteSpotDatafeedSubscriptionResponse>;
    /**
     * Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.
     */
    getDeleteSubnet(req: operations.GETDeleteSubnetRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteSubnetResponse>;
    /**
     * Deletes a subnet CIDR reservation.
     */
    getDeleteSubnetCidrReservation(req: operations.GETDeleteSubnetCidrReservationRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteSubnetCidrReservationResponse>;
    /**
     * <p>Deletes the specified Traffic Mirror filter.</p> <p>You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.</p>
     */
    getDeleteTrafficMirrorFilter(req: operations.GETDeleteTrafficMirrorFilterRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTrafficMirrorFilterResponse>;
    /**
     * Deletes the specified Traffic Mirror rule.
     */
    getDeleteTrafficMirrorFilterRule(req: operations.GETDeleteTrafficMirrorFilterRuleRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTrafficMirrorFilterRuleResponse>;
    /**
     * Deletes the specified Traffic Mirror session.
     */
    getDeleteTrafficMirrorSession(req: operations.GETDeleteTrafficMirrorSessionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTrafficMirrorSessionResponse>;
    /**
     * <p>Deletes the specified Traffic Mirror target.</p> <p>You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.</p>
     */
    getDeleteTrafficMirrorTarget(req: operations.GETDeleteTrafficMirrorTargetRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTrafficMirrorTargetResponse>;
    /**
     * Deletes the specified transit gateway.
     */
    getDeleteTransitGateway(req: operations.GETDeleteTransitGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayResponse>;
    /**
     * Deletes the specified Connect attachment. You must first delete any Connect peers for the attachment.
     */
    getDeleteTransitGatewayConnect(req: operations.GETDeleteTransitGatewayConnectRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayConnectResponse>;
    /**
     * Deletes the specified Connect peer.
     */
    getDeleteTransitGatewayConnectPeer(req: operations.GETDeleteTransitGatewayConnectPeerRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayConnectPeerResponse>;
    /**
     * Deletes the specified transit gateway multicast domain.
     */
    getDeleteTransitGatewayMulticastDomain(req: operations.GETDeleteTransitGatewayMulticastDomainRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayMulticastDomainResponse>;
    /**
     * Deletes a transit gateway peering attachment.
     */
    getDeleteTransitGatewayPeeringAttachment(req: operations.GETDeleteTransitGatewayPeeringAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayPeeringAttachmentResponse>;
    /**
     * Deletes the specified transit gateway policy table.
     */
    getDeleteTransitGatewayPolicyTable(req: operations.GETDeleteTransitGatewayPolicyTableRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayPolicyTableResponse>;
    /**
     * Deletes a reference (route) to a prefix list in a specified transit gateway route table.
     */
    getDeleteTransitGatewayPrefixListReference(req: operations.GETDeleteTransitGatewayPrefixListReferenceRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayPrefixListReferenceResponse>;
    /**
     * Deletes the specified route from the specified transit gateway route table.
     */
    getDeleteTransitGatewayRoute(req: operations.GETDeleteTransitGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayRouteResponse>;
    /**
     * Deletes the specified transit gateway route table. You must disassociate the route table from any transit gateway route tables before you can delete it.
     */
    getDeleteTransitGatewayRouteTable(req: operations.GETDeleteTransitGatewayRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayRouteTableResponse>;
    /**
     * Advertises to the transit gateway that a transit gateway route table is deleted.
     */
    getDeleteTransitGatewayRouteTableAnnouncement(req: operations.GETDeleteTransitGatewayRouteTableAnnouncementRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayRouteTableAnnouncementResponse>;
    /**
     * Deletes the specified VPC attachment.
     */
    getDeleteTransitGatewayVpcAttachment(req: operations.GETDeleteTransitGatewayVpcAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTransitGatewayVpcAttachmentResponse>;
    /**
     * Delete an Amazon Web Services Verified Access endpoint.
     */
    getDeleteVerifiedAccessEndpoint(req: operations.GETDeleteVerifiedAccessEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVerifiedAccessEndpointResponse>;
    /**
     * Delete an Amazon Web Services Verified Access group.
     */
    getDeleteVerifiedAccessGroup(req: operations.GETDeleteVerifiedAccessGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVerifiedAccessGroupResponse>;
    /**
     * Delete an Amazon Web Services Verified Access instance.
     */
    getDeleteVerifiedAccessInstance(req: operations.GETDeleteVerifiedAccessInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVerifiedAccessInstanceResponse>;
    /**
     * Delete an Amazon Web Services Verified Access trust provider.
     */
    getDeleteVerifiedAccessTrustProvider(req: operations.GETDeleteVerifiedAccessTrustProviderRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVerifiedAccessTrustProviderResponse>;
    /**
     * <p>Deletes the specified EBS volume. The volume must be in the <code>available</code> state (not attached to an instance).</p> <p>The volume can remain in the <code>deleting</code> state for several minutes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-volume.html">Delete an Amazon EBS volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getDeleteVolume(req: operations.GETDeleteVolumeRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVolumeResponse>;
    /**
     * Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the VPC before you can delete it. For example, you must terminate all instances running in the VPC, delete all security groups associated with the VPC (except the default one), delete all route tables associated with the VPC (except the default one), and so on.
     */
    getDeleteVpc(req: operations.GETDeleteVpcRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVpcResponse>;
    /**
     * Deletes the specified VPC endpoint connection notifications.
     */
    getDeleteVpcEndpointConnectionNotifications(req: operations.GETDeleteVpcEndpointConnectionNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVpcEndpointConnectionNotificationsResponse>;
    /**
     * Deletes the specified VPC endpoint service configurations. Before you can delete an endpoint service configuration, you must reject any <code>Available</code> or <code>PendingAcceptance</code> interface endpoint connections that are attached to the service.
     */
    getDeleteVpcEndpointServiceConfigurations(req: operations.GETDeleteVpcEndpointServiceConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVpcEndpointServiceConfigurationsResponse>;
    /**
     * <p>Deletes the specified VPC endpoints.</p> <p>When you delete a gateway endpoint, we delete the endpoint routes in the route tables for the endpoint.</p> <p>When you delete a Gateway Load Balancer endpoint, we delete its endpoint network interfaces. You can only delete Gateway Load Balancer endpoints when the routes that are associated with the endpoint are deleted.</p> <p>When you delete an interface endpoint, we delete its endpoint network interfaces.</p>
     */
    getDeleteVpcEndpoints(req: operations.GETDeleteVpcEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVpcEndpointsResponse>;
    /**
     * Deletes a VPC peering connection. Either the owner of the requester VPC or the owner of the accepter VPC can delete the VPC peering connection if it's in the <code>active</code> state. The owner of the requester VPC can delete a VPC peering connection in the <code>pending-acceptance</code> state. You cannot delete a VPC peering connection that's in the <code>failed</code> state.
     */
    getDeleteVpcPeeringConnection(req: operations.GETDeleteVpcPeeringConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVpcPeeringConnectionResponse>;
    /**
     * <p>Deletes the specified VPN connection.</p> <p>If you're deleting the VPC and its associated components, we recommend that you detach the virtual private gateway from the VPC and delete the VPC before deleting the VPN connection. If you believe that the tunnel credentials for your VPN connection have been compromised, you can delete the VPN connection and create a new one that has new keys, without needing to delete the VPC or virtual private gateway. If you create a new VPN connection, you must reconfigure the customer gateway device using the new configuration information returned with the new VPN connection ID.</p> <p>For certificate-based authentication, delete all Certificate Manager (ACM) private certificates used for the Amazon Web Services-side tunnel endpoints for the VPN connection before deleting the VPN connection.</p>
     */
    getDeleteVpnConnection(req: operations.GETDeleteVpnConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVpnConnectionResponse>;
    /**
     * Deletes the specified static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
     */
    getDeleteVpnConnectionRoute(req: operations.GETDeleteVpnConnectionRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVpnConnectionRouteResponse>;
    /**
     * Deletes the specified virtual private gateway. You must first detach the virtual private gateway from the VPC. Note that you don't need to delete the virtual private gateway if you plan to delete and recreate the VPN connection between your VPC and your network.
     */
    getDeleteVpnGateway(req: operations.GETDeleteVpnGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteVpnGatewayResponse>;
    /**
     * <p>Releases the specified address range that you provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.</p> <p>Before you can release an address range, you must stop advertising it using <a>WithdrawByoipCidr</a> and you must not have any IP addresses allocated from its address range.</p>
     */
    getDeprovisionByoipCidr(req: operations.GETDeprovisionByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETDeprovisionByoipCidrResponse>;
    /**
     * Deprovision a CIDR provisioned from an IPAM pool. If you deprovision a CIDR from a pool that has a source pool, the CIDR is recycled back into the source pool. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/depro-pool-cidr-ipam.html">Deprovision pool CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.
     */
    getDeprovisionIpamPoolCidr(req: operations.GETDeprovisionIpamPoolCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETDeprovisionIpamPoolCidrResponse>;
    /**
     * Deprovision a CIDR from a public IPv4 pool.
     */
    getDeprovisionPublicIpv4PoolCidr(req: operations.GETDeprovisionPublicIpv4PoolCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETDeprovisionPublicIpv4PoolCidrResponse>;
    /**
     * <p>Deregisters the specified AMI. After you deregister an AMI, it can't be used to launch new instances.</p> <p>If you deregister an AMI that matches a Recycle Bin retention rule, the AMI is retained in the Recycle Bin for the specified retention period. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle Bin</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>When you deregister an AMI, it doesn't affect any instances that you've already launched from the AMI. You'll continue to incur usage costs for those instances until you terminate them.</p> <p>When you deregister an Amazon EBS-backed AMI, it doesn't affect the snapshot that was created for the root volume of the instance during the AMI creation process. When you deregister an instance store-backed AMI, it doesn't affect the files that you uploaded to Amazon S3 when you created the AMI.</p>
     */
    getDeregisterImage(req: operations.GETDeregisterImageRequest, config?: AxiosRequestConfig): Promise<operations.GETDeregisterImageResponse>;
    /**
     * Deregisters tag keys to prevent tags that have the specified tag keys from being included in scheduled event notifications for resources in the Region.
     */
    getDeregisterInstanceEventNotificationAttributes(req: operations.GETDeregisterInstanceEventNotificationAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDeregisterInstanceEventNotificationAttributesResponse>;
    /**
     * Deregisters the specified members (network interfaces) from the transit gateway multicast group.
     */
    getDeregisterTransitGatewayMulticastGroupMembers(req: operations.GETDeregisterTransitGatewayMulticastGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.GETDeregisterTransitGatewayMulticastGroupMembersResponse>;
    /**
     * Deregisters the specified sources (network interfaces) from the transit gateway multicast group.
     */
    getDeregisterTransitGatewayMulticastGroupSources(req: operations.GETDeregisterTransitGatewayMulticastGroupSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GETDeregisterTransitGatewayMulticastGroupSourcesResponse>;
    /**
     * <p>Describes attributes of your Amazon Web Services account. The following are the supported account attributes:</p> <ul> <li> <p> <code>supported-platforms</code>: Indicates whether your account can launch instances into EC2-Classic and EC2-VPC, or only into EC2-VPC.</p> </li> <li> <p> <code>default-vpc</code>: The ID of the default VPC for your account, or <code>none</code>.</p> </li> <li> <p> <code>max-instances</code>: This attribute is no longer supported. The returned value does not reflect your actual vCPU limit for running On-Demand Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits">On-Demand Instance Limits</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </li> <li> <p> <code>vpc-max-security-groups-per-interface</code>: The maximum number of security groups that you can assign to a network interface.</p> </li> <li> <p> <code>max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can allocate for use with EC2-Classic. </p> </li> <li> <p> <code>vpc-max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can allocate for use with EC2-VPC.</p> </li> </ul> <note> <p>We are retiring EC2-Classic on August 15, 2022. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>.</p> </note>
     */
    getDescribeAccountAttributes(req: operations.GETDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAccountAttributesResponse>;
    /**
     * Describes an Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    getDescribeAddressTransfers(req: operations.GETDescribeAddressTransfersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAddressTransfersResponse>;
    /**
     * Describes the attributes of the specified Elastic IP addresses. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.
     */
    getDescribeAddressesAttribute(req: operations.GETDescribeAddressesAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAddressesAttributeResponse>;
    /**
     * <p>Describes the longer ID format settings for all resource types in a specific Region. This request is useful for performing a quick audit to determine whether a specific Region is fully opted in for longer IDs (17-character IDs).</p> <p>This request only returns information about resource types that support longer IDs.</p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
     */
    getDescribeAggregateIdFormat(req: operations.GETDescribeAggregateIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAggregateIdFormatResponse>;
    /**
     * <p>Describes the IP address ranges that were specified in calls to <a>ProvisionByoipCidr</a>.</p> <p>To describe the address pools that were created when you provisioned the address ranges, use <a>DescribePublicIpv4Pools</a> or <a>DescribeIpv6Pools</a>.</p>
     */
    getDescribeByoipCidrs(req: operations.GETDescribeByoipCidrsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeByoipCidrsResponse>;
    /**
     * <p>Describes the specified conversion tasks or all your conversion tasks. For more information, see the <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/">VM Import/Export User Guide</a>.</p> <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
     */
    getDescribeConversionTasks(req: operations.GETDescribeConversionTasksRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeConversionTasksResponse>;
    /**
     * <p>Describes the events for the specified EC2 Fleet during the specified time.</p> <p>EC2 Fleet events are delayed by up to 30 seconds before they can be described. This ensures that you can query by the last evaluated time and not miss a recorded event. EC2 Fleet events are available for 48 hours.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-monitor.html">Monitor fleet events using Amazon EventBridge</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getDescribeFleetHistory(req: operations.GETDescribeFleetHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeFleetHistoryResponse>;
    /**
     * Describes the specified attribute of the specified Amazon FPGA Image (AFI).
     */
    getDescribeFpgaImageAttribute(req: operations.GETDescribeFpgaImageAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeFpgaImageAttributeResponse>;
    /**
     * <p>Describes the ID format settings for your resources on a per-Region basis, for example, to view which resource types are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types.</p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p> <p>These settings apply to the IAM user who makes the request; they do not apply to the entire Amazon Web Services account. By default, an IAM user defaults to the same settings as the root user, unless they explicitly override the settings by running the <a>ModifyIdFormat</a> command. Resources created with longer IDs are visible to all IAM users, regardless of these settings and provided that they have permission to use the relevant <code>Describe</code> command for the resource type.</p>
     */
    getDescribeIdFormat(req: operations.GETDescribeIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeIdFormatResponse>;
    /**
     * <p>Describes the ID format settings for resources for the specified IAM user, IAM role, or root user. For example, you can view the resource types that are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p> <p>These settings apply to the principal specified in the request. They do not apply to the principal that makes the request.</p>
     */
    getDescribeIdentityIdFormat(req: operations.GETDescribeIdentityIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeIdentityIdFormatResponse>;
    /**
     * Describes the specified attribute of the specified AMI. You can specify only one attribute at a time.
     */
    getDescribeImageAttribute(req: operations.GETDescribeImageAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeImageAttributeResponse>;
    /**
     * Describes the specified attribute of the specified instance. You can specify only one attribute at a time. Valid attribute values are: <code>instanceType</code> | <code>kernel</code> | <code>ramdisk</code> | <code>userData</code> | <code>disableApiTermination</code> | <code>instanceInitiatedShutdownBehavior</code> | <code>rootDeviceName</code> | <code>blockDeviceMapping</code> | <code>productCodes</code> | <code>sourceDestCheck</code> | <code>groupSet</code> | <code>ebsOptimized</code> | <code>sriovNetSupport</code>
     */
    getDescribeInstanceAttribute(req: operations.GETDescribeInstanceAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeInstanceAttributeResponse>;
    /**
     * Describes the tag keys that are registered to appear in scheduled event notifications for resources in the current Region.
     */
    getDescribeInstanceEventNotificationAttributes(req: operations.GETDescribeInstanceEventNotificationAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeInstanceEventNotificationAttributesResponse>;
    /**
     * Describes a network interface attribute. You can specify only one attribute at a time.
     */
    getDescribeNetworkInterfaceAttribute(req: operations.GETDescribeNetworkInterfaceAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeNetworkInterfaceAttributeResponse>;
    /**
     * <p>Describes the ID format settings for the root user and all IAM roles and IAM users that have explicitly specified a longer ID (17-character ID) preference. </p> <p>By default, all IAM roles and IAM users default to the same ID settings as the root user, unless they explicitly override the settings. This request is useful for identifying those IAM users and IAM roles that have overridden the default ID settings.</p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
     */
    getDescribePrincipalIdFormat(req: operations.GETDescribePrincipalIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribePrincipalIdFormatResponse>;
    /**
     * [VPC only] Describes the VPCs on the other side of a VPC peering connection that are referencing the security groups you've specified in this request.
     */
    getDescribeSecurityGroupReferences(req: operations.GETDescribeSecurityGroupReferencesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSecurityGroupReferencesResponse>;
    /**
     * <p>Describes the specified attribute of the specified snapshot. You can specify only one attribute at a time.</p> <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getDescribeSnapshotAttribute(req: operations.GETDescribeSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSnapshotAttributeResponse>;
    /**
     * Describes the data feed for Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot Instance data feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
     */
    getDescribeSpotDatafeedSubscription(req: operations.GETDescribeSpotDatafeedSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSpotDatafeedSubscriptionResponse>;
    /**
     * Describes the running instances for the specified Spot Fleet.
     */
    getDescribeSpotFleetInstances(req: operations.GETDescribeSpotFleetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSpotFleetInstancesResponse>;
    /**
     * <p>Describes the events for the specified Spot Fleet request during the specified time.</p> <p>Spot Fleet events are delayed by up to 30 seconds before they can be described. This ensures that you can query by the last evaluated time and not miss a recorded event. Spot Fleet events are available for 48 hours.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-monitor.html">Monitor fleet events using Amazon EventBridge</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getDescribeSpotFleetRequestHistory(req: operations.GETDescribeSpotFleetRequestHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSpotFleetRequestHistoryResponse>;
    /**
     * <p>Describes your Spot Fleet requests.</p> <p>Spot Fleet requests are deleted 48 hours after they are canceled and their instances are terminated.</p>
     */
    getDescribeSpotFleetRequests(req: operations.GETDescribeSpotFleetRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSpotFleetRequestsResponse>;
    /**
     * [VPC only] Describes the stale security group rules for security groups in a specified VPC. Rules are stale when they reference a deleted security group in the same VPC or in a peer VPC, or if they reference a security group in a peer VPC for which the VPC peering connection has been deleted.
     */
    getDescribeStaleSecurityGroups(req: operations.GETDescribeStaleSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeStaleSecurityGroupsResponse>;
    /**
     * <p>Describes the specified attribute of the specified volume. You can specify only one attribute at a time.</p> <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getDescribeVolumeAttribute(req: operations.GETDescribeVolumeAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeVolumeAttributeResponse>;
    /**
     * Describes the specified attribute of the specified VPC. You can specify only one attribute at a time.
     */
    getDescribeVpcAttribute(req: operations.GETDescribeVpcAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeVpcAttributeResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Describes the ClassicLink DNS support status of one or more VPCs. If enabled, the DNS hostname of a linked EC2-Classic instance resolves to its private IP address when addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname of an instance in a VPC resolves to its private IP address when addressed from a linked EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getDescribeVpcClassicLinkDnsSupport(req: operations.GETDescribeVpcClassicLinkDnsSupportRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeVpcClassicLinkDnsSupportResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked, the VPC security groups are no longer associated with it. An instance is automatically unlinked from a VPC when it's stopped.</p>
     */
    getDetachClassicLinkVpc(req: operations.GETDetachClassicLinkVpcRequest, config?: AxiosRequestConfig): Promise<operations.GETDetachClassicLinkVpcResponse>;
    /**
     * Detaches an internet gateway from a VPC, disabling connectivity between the internet and the VPC. The VPC must not contain any running instances with Elastic IP addresses or public IPv4 addresses.
     */
    getDetachInternetGateway(req: operations.GETDetachInternetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETDetachInternetGatewayResponse>;
    /**
     * Detaches a network interface from an instance.
     */
    getDetachNetworkInterface(req: operations.GETDetachNetworkInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GETDetachNetworkInterfaceResponse>;
    /**
     * Detach a trust provider from an Amazon Web Services Verified Access instance.
     */
    getDetachVerifiedAccessTrustProvider(req: operations.GETDetachVerifiedAccessTrustProviderRequest, config?: AxiosRequestConfig): Promise<operations.GETDetachVerifiedAccessTrustProviderResponse>;
    /**
     * <p>Detaches an EBS volume from an instance. Make sure to unmount any file systems on the device within your operating system before detaching the volume. Failure to do so can result in the volume becoming stuck in the <code>busy</code> state while detaching. If this happens, detachment can be delayed indefinitely until you unmount the volume, force detachment, reboot the instance, or all three. If an EBS volume is the root device of an instance, it can't be detached while the instance is running. To detach the root volume, stop the instance first.</p> <p>When a volume with an Amazon Web Services Marketplace product code is detached from an instance, the product code is no longer associated with the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html">Detach an Amazon EBS volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getDetachVolume(req: operations.GETDetachVolumeRequest, config?: AxiosRequestConfig): Promise<operations.GETDetachVolumeResponse>;
    /**
     * <p>Detaches a virtual private gateway from a VPC. You do this if you're planning to turn off the VPC and not use it anymore. You can confirm a virtual private gateway has been completely detached from a VPC by describing the virtual private gateway (any attachments to the virtual private gateway are also described).</p> <p>You must wait for the attachment's state to switch to <code>detached</code> before you can delete the VPC or attach a different VPC to the virtual private gateway.</p>
     */
    getDetachVpnGateway(req: operations.GETDetachVpnGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETDetachVpnGatewayResponse>;
    /**
     * Disables Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    getDisableAddressTransfer(req: operations.GETDisableAddressTransferRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableAddressTransferResponse>;
    /**
     * Disables Infrastructure Performance metric subscriptions.
     */
    getDisableAwsNetworkPerformanceMetricSubscription(req: operations.GETDisableAwsNetworkPerformanceMetricSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableAwsNetworkPerformanceMetricSubscriptionResponse>;
    /**
     * <p>Disables EBS encryption by default for your account in the current Region.</p> <p>After you disable encryption by default, you can still create encrypted volumes by enabling encryption when you create each volume.</p> <p>Disabling encryption by default does not change the encryption status of your existing volumes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getDisableEbsEncryptionByDefault(req: operations.GETDisableEbsEncryptionByDefaultRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableEbsEncryptionByDefaultResponse>;
    /**
     * <p>Discontinue faster launching for a Windows AMI, and clean up existing pre-provisioned snapshots. When you disable faster launching, the AMI uses the standard launch process for each instance. All pre-provisioned snapshots must be removed before you can enable faster launching again.</p> <note> <p>To change these settings, you must own the AMI.</p> </note>
     */
    getDisableFastLaunch(req: operations.GETDisableFastLaunchRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableFastLaunchResponse>;
    /**
     * Disables fast snapshot restores for the specified snapshots in the specified Availability Zones.
     */
    getDisableFastSnapshotRestores(req: operations.GETDisableFastSnapshotRestoresRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableFastSnapshotRestoresResponse>;
    /**
     * <p>Cancels the deprecation of the specified AMI.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deprecate.html">Deprecate an AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getDisableImageDeprecation(req: operations.GETDisableImageDeprecationRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableImageDeprecationResponse>;
    /**
     * Disable the IPAM account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/enable-integ-ipam.html">Enable integration with Organizations</a> in the <i>Amazon VPC IPAM User Guide</i>.
     */
    getDisableIpamOrganizationAdminAccount(req: operations.GETDisableIpamOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableIpamOrganizationAdminAccountResponse>;
    /**
     * Disables access to the EC2 serial console of all instances for your account. By default, access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2 User Guide</i>.
     */
    getDisableSerialConsoleAccess(req: operations.GETDisableSerialConsoleAccessRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableSerialConsoleAccessResponse>;
    /**
     * Disables the specified resource attachment from propagating routes to the specified propagation route table.
     */
    getDisableTransitGatewayRouteTablePropagation(req: operations.GETDisableTransitGatewayRouteTablePropagationRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableTransitGatewayRouteTablePropagationResponse>;
    /**
     * Disables a virtual private gateway (VGW) from propagating routes to a specified route table of a VPC.
     */
    getDisableVgwRoutePropagation(req: operations.GETDisableVgwRoutePropagationRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableVgwRoutePropagationResponse>;
    /**
     * <p>Disables ClassicLink for a VPC. You cannot disable ClassicLink for a VPC that has EC2-Classic instances linked to it.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    getDisableVpcClassicLink(req: operations.GETDisableVpcClassicLinkRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableVpcClassicLinkResponse>;
    /**
     * <p>Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to public IP addresses when addressed between a linked EC2-Classic instance and instances in the VPC to which it's linked. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You must specify a VPC ID in the request.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    getDisableVpcClassicLinkDnsSupport(req: operations.GETDisableVpcClassicLinkDnsSupportRequest, config?: AxiosRequestConfig): Promise<operations.GETDisableVpcClassicLinkDnsSupportResponse>;
    /**
     * <p>Disassociates an Elastic IP address from the instance or network interface it's associated with.</p> <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error.</p>
     */
    getDisassociateAddress(req: operations.GETDisassociateAddressRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateAddressResponse>;
    /**
     * <p>Disassociates a target network from the specified Client VPN endpoint. When you disassociate the last target network from a Client VPN, the following happens:</p> <ul> <li> <p>The route that was automatically added for the VPC is deleted</p> </li> <li> <p>All active client connections are terminated</p> </li> <li> <p>New client connections are disallowed</p> </li> <li> <p>The Client VPN endpoint's status changes to <code>pending-associate</code> </p> </li> </ul>
     */
    getDisassociateClientVpnTargetNetwork(req: operations.GETDisassociateClientVpnTargetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateClientVpnTargetNetworkResponse>;
    /**
     * Disassociates an IAM role from an Certificate Manager (ACM) certificate. Disassociating an IAM role from an ACM certificate removes the Amazon S3 object that contains the certificate, certificate chain, and encrypted private key from the Amazon S3 bucket. It also revokes the IAM role's permission to use the KMS key used to encrypt the private key. This effectively revokes the role's permission to use the certificate.
     */
    getDisassociateEnclaveCertificateIamRole(req: operations.GETDisassociateEnclaveCertificateIamRoleRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateEnclaveCertificateIamRoleResponse>;
    /**
     * <p>Disassociates an IAM instance profile from a running or stopped instance.</p> <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association ID.</p>
     */
    getDisassociateIamInstanceProfile(req: operations.GETDisassociateIamInstanceProfileRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateIamInstanceProfileResponse>;
    /**
     * Disassociates a resource discovery from an Amazon VPC IPAM. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
     */
    getDisassociateIpamResourceDiscovery(req: operations.GETDisassociateIpamResourceDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateIpamResourceDiscoveryResponse>;
    /**
     * <p>Disassociates secondary Elastic IP addresses (EIPs) from a public NAT gateway. You cannot disassociate your primary EIP. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-edit-secondary">Edit secondary IP address associations</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>While disassociating is in progress, you cannot associate/disassociate additional EIPs while the connections are being drained. You are, however, allowed to delete the NAT gateway.</p> <p>An EIP will only be released at the end of MaxDrainDurationSeconds. The EIPs stay associated and support the existing connections but do not support any new connections (new connections are distributed across the remaining associated EIPs). As the existing connections drain out, the EIPs (and the corresponding private IPs mapped to them) get released.</p>
     */
    getDisassociateNatGatewayAddress(req: operations.GETDisassociateNatGatewayAddressRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateNatGatewayAddressResponse>;
    /**
     * <p>Disassociates a subnet or gateway from a route table.</p> <p>After you perform this action, the subnet no longer uses the routes in the route table. Instead, it uses the routes in the VPC's main route table. For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    getDisassociateRouteTable(req: operations.GETDisassociateRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateRouteTableResponse>;
    /**
     * Disassociates a CIDR block from a subnet. Currently, you can disassociate an IPv6 CIDR block only. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it.
     */
    getDisassociateSubnetCidrBlock(req: operations.GETDisassociateSubnetCidrBlockRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateSubnetCidrBlockResponse>;
    /**
     * Disassociates the specified subnets from the transit gateway multicast domain.
     */
    getDisassociateTransitGatewayMulticastDomain(req: operations.GETDisassociateTransitGatewayMulticastDomainRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateTransitGatewayMulticastDomainResponse>;
    /**
     * Removes the association between an an attachment and a policy table.
     */
    getDisassociateTransitGatewayPolicyTable(req: operations.GETDisassociateTransitGatewayPolicyTableRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateTransitGatewayPolicyTableResponse>;
    /**
     * Disassociates a resource attachment from a transit gateway route table.
     */
    getDisassociateTransitGatewayRouteTable(req: operations.GETDisassociateTransitGatewayRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateTransitGatewayRouteTableResponse>;
    /**
     * <note> <p>This API action is currently in <b>limited preview only</b>. If you are interested in using this feature, contact your account manager.</p> </note> <p>Removes an association between a branch network interface with a trunk network interface.</p>
     */
    getDisassociateTrunkInterface(req: operations.GETDisassociateTrunkInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateTrunkInterfaceResponse>;
    /**
     * <p>Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must specify its association ID. You can get the association ID by using <a>DescribeVpcs</a>. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it. </p> <p>You cannot disassociate the CIDR block with which you originally created the VPC (the primary CIDR block).</p>
     */
    getDisassociateVpcCidrBlock(req: operations.GETDisassociateVpcCidrBlockRequest, config?: AxiosRequestConfig): Promise<operations.GETDisassociateVpcCidrBlockResponse>;
    /**
     * Enables Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    getEnableAddressTransfer(req: operations.GETEnableAddressTransferRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableAddressTransferResponse>;
    /**
     * Enables Infrastructure Performance subscriptions.
     */
    getEnableAwsNetworkPerformanceMetricSubscription(req: operations.GETEnableAwsNetworkPerformanceMetricSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableAwsNetworkPerformanceMetricSubscriptionResponse>;
    /**
     * <p>Enables EBS encryption by default for your account in the current Region.</p> <p>After you enable encryption by default, the EBS volumes that you create are always encrypted, either using the default KMS key or the KMS key that you specified when you created each volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You can specify the default KMS key for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or <a>ResetEbsDefaultKmsKeyId</a>.</p> <p>Enabling encryption by default has no effect on the encryption status of your existing volumes.</p> <p>After you enable encryption by default, you can no longer launch instances using instance types that do not support encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported instance types</a>.</p>
     */
    getEnableEbsEncryptionByDefault(req: operations.GETEnableEbsEncryptionByDefaultRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableEbsEncryptionByDefaultResponse>;
    /**
     * <p>When you enable faster launching for a Windows AMI, images are pre-provisioned, using snapshots to launch instances up to 65% faster. To create the optimized Windows image, Amazon EC2 launches an instance and runs through Sysprep steps, rebooting as required. Then it creates a set of reserved snapshots that are used for subsequent launches. The reserved snapshots are automatically replenished as they are used, depending on your settings for launch frequency.</p> <note> <p>To change these settings, you must own the AMI.</p> </note>
     */
    getEnableFastLaunch(req: operations.GETEnableFastLaunchRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableFastLaunchResponse>;
    /**
     * <p>Enables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p> <p>You get the full benefit of fast snapshot restores after they enter the <code>enabled</code> state. To get the current state of fast snapshot restores, use <a>DescribeFastSnapshotRestores</a>. To disable fast snapshot restores, use <a>DisableFastSnapshotRestores</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html">Amazon EBS fast snapshot restore</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getEnableFastSnapshotRestores(req: operations.GETEnableFastSnapshotRestoresRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableFastSnapshotRestoresResponse>;
    /**
     * <p>Enables deprecation of the specified AMI at the specified date and time.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deprecate.html">Deprecate an AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getEnableImageDeprecation(req: operations.GETEnableImageDeprecationRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableImageDeprecationResponse>;
    /**
     * Enable an Organizations member account as the IPAM admin account. You cannot select the Organizations management account as the IPAM admin account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/enable-integ-ipam.html">Enable integration with Organizations</a> in the <i>Amazon VPC IPAM User Guide</i>.
     */
    getEnableIpamOrganizationAdminAccount(req: operations.GETEnableIpamOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableIpamOrganizationAdminAccountResponse>;
    /**
     * <p>Establishes a trust relationship between Reachability Analyzer and Organizations. This operation must be performed by the management account for the organization.</p> <p>After you establish a trust relationship, a user in the management account or a delegated administrator account can run a cross-account analysis using resources from the member accounts.</p>
     */
    getEnableReachabilityAnalyzerOrganizationSharing(req: operations.GETEnableReachabilityAnalyzerOrganizationSharingRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableReachabilityAnalyzerOrganizationSharingResponse>;
    /**
     * Enables access to the EC2 serial console of all instances for your account. By default, access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2 User Guide</i>.
     */
    getEnableSerialConsoleAccess(req: operations.GETEnableSerialConsoleAccessRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableSerialConsoleAccessResponse>;
    /**
     * Enables the specified attachment to propagate routes to the specified propagation route table.
     */
    getEnableTransitGatewayRouteTablePropagation(req: operations.GETEnableTransitGatewayRouteTablePropagationRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableTransitGatewayRouteTablePropagationResponse>;
    /**
     * Enables a virtual private gateway (VGW) to propagate routes to the specified route table of a VPC.
     */
    getEnableVgwRoutePropagation(req: operations.GETEnableVgwRoutePropagationRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableVgwRoutePropagationResponse>;
    /**
     * Enables I/O operations for a volume that had I/O operations disabled because the data on the volume was potentially inconsistent.
     */
    getEnableVolumeIO(req: operations.GETEnableVolumeIORequest, config?: AxiosRequestConfig): Promise<operations.GETEnableVolumeIOResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your ClassicLink-enabled VPC to allow communication over private IP addresses. You cannot enable your VPC for ClassicLink if any of your VPC route tables have existing routes for address ranges within the <code>10.0.0.0/8</code> IP address range, excluding local routes for VPCs in the <code>10.0.0.0/16</code> and <code>10.1.0.0/16</code> IP address ranges. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getEnableVpcClassicLink(req: operations.GETEnableVpcClassicLinkRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableVpcClassicLinkResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Enables a VPC to support DNS hostname resolution for ClassicLink. If enabled, the DNS hostname of a linked EC2-Classic instance resolves to its private IP address when addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname of an instance in a VPC resolves to its private IP address when addressed from a linked EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You must specify a VPC ID in the request.</p>
     */
    getEnableVpcClassicLinkDnsSupport(req: operations.GETEnableVpcClassicLinkDnsSupportRequest, config?: AxiosRequestConfig): Promise<operations.GETEnableVpcClassicLinkDnsSupportResponse>;
    /**
     * Downloads the client certificate revocation list for the specified Client VPN endpoint.
     */
    getExportClientVpnClientCertificateRevocationList(req: operations.GETExportClientVpnClientCertificateRevocationListRequest, config?: AxiosRequestConfig): Promise<operations.GETExportClientVpnClientCertificateRevocationListResponse>;
    /**
     * Downloads the contents of the Client VPN endpoint configuration file for the specified Client VPN endpoint. The Client VPN endpoint configuration file includes the Client VPN endpoint and certificate information clients need to establish a connection with the Client VPN endpoint.
     */
    getExportClientVpnClientConfiguration(req: operations.GETExportClientVpnClientConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GETExportClientVpnClientConfigurationResponse>;
    /**
     * Returns the IAM roles that are associated with the specified ACM (ACM) certificate. It also returns the name of the Amazon S3 bucket and the Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored, and the ARN of the KMS key that's used to encrypt the private key.
     */
    getGETAssociatedEnclaveCertificateIamRoles(req: operations.GETGETAssociatedEnclaveCertificateIamRolesRequest, config?: AxiosRequestConfig): Promise<operations.GETGETAssociatedEnclaveCertificateIamRolesResponse>;
    /**
     * Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.
     */
    getGETAssociatedIpv6PoolCidrs(req: operations.GETGETAssociatedIpv6PoolCidrsRequest, config?: AxiosRequestConfig): Promise<operations.GETGETAssociatedIpv6PoolCidrsResponse>;
    /**
     * Gets usage information about a Capacity Reservation. If the Capacity Reservation is shared, it shows usage information for the Capacity Reservation owner and each Amazon Web Services account that is currently using the shared capacity. If the Capacity Reservation is not shared, it shows only the Capacity Reservation owner's usage.
     */
    getGETCapacityReservationUsage(req: operations.GETGETCapacityReservationUsageRequest, config?: AxiosRequestConfig): Promise<operations.GETGETCapacityReservationUsageResponse>;
    /**
     * <p>Gets the console output for the specified instance. For Linux instances, the instance console output displays the exact console output that would normally be displayed on a physical monitor attached to a computer. For Windows instances, the instance console output includes the last three system event log errors.</p> <p>By default, the console output returns buffered information that was posted shortly after an instance transition state (start, stop, reboot, or terminate). This information is available for at least one hour after the most recent post. Only the most recent 64 KB of console output is available.</p> <p>You can optionally retrieve the latest serial console output at any time during the instance lifecycle. This option is supported on instance types that use the Nitro hypervisor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html#instance-console-console-output">Instance console output</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getGETConsoleOutput(req: operations.GETGETConsoleOutputRequest, config?: AxiosRequestConfig): Promise<operations.GETGETConsoleOutputResponse>;
    /**
     * <p>Retrieve a JPG-format screenshot of a running instance to help with troubleshooting.</p> <p>The returned content is Base64-encoded.</p>
     */
    getGETConsoleScreenshot(req: operations.GETGETConsoleScreenshotRequest, config?: AxiosRequestConfig): Promise<operations.GETGETConsoleScreenshotResponse>;
    /**
     * <p>Describes the default credit option for CPU usage of a burstable performance instance family.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getGETDefaultCreditSpecification(req: operations.GETGETDefaultCreditSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.GETGETDefaultCreditSpecificationResponse>;
    /**
     * <p>Describes the default KMS key for EBS encryption by default for your account in this Region. You can change the default KMS key for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or <a>ResetEbsDefaultKmsKeyId</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getGETEbsDefaultKmsKeyId(req: operations.GETGETEbsDefaultKmsKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.GETGETEbsDefaultKmsKeyIdResponse>;
    /**
     * <p>Describes whether EBS encryption by default is enabled for your account in the current Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getGETEbsEncryptionByDefault(req: operations.GETGETEbsEncryptionByDefaultRequest, config?: AxiosRequestConfig): Promise<operations.GETGETEbsEncryptionByDefaultResponse>;
    /**
     * Lists the resource groups to which a Capacity Reservation has been added.
     */
    getGETGroupsForCapacityReservation(req: operations.GETGETGroupsForCapacityReservationRequest, config?: AxiosRequestConfig): Promise<operations.GETGETGroupsForCapacityReservationResponse>;
    /**
     * <p>Preview a reservation purchase with configurations that match those of your Dedicated Host. You must have active Dedicated Hosts in your account before you purchase a reservation.</p> <p>This is a preview of the <a>PurchaseHostReservation</a> action and does not result in the offering being purchased.</p>
     */
    getGETHostReservationPurchasePreview(req: operations.GETGETHostReservationPurchasePreviewRequest, config?: AxiosRequestConfig): Promise<operations.GETGETHostReservationPurchasePreviewResponse>;
    /**
     * <p>A binary representation of the UEFI variable store. Only non-volatile variables are stored. This is a base64 encoded and zlib compressed binary value that must be properly encoded.</p> <p>When you use <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/register-image.html">register-image</a> to create an AMI, you can create an exact copy of your variable store by passing the UEFI data in the <code>UefiData</code> parameter. You can modify the UEFI data by using the <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on GitHub. You can use the tool to convert the UEFI data into a human-readable format (JSON), which you can inspect and modify, and then convert back into the binary format to use with register-image.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getGETInstanceUefiData(req: operations.GETGETInstanceUefiDataRequest, config?: AxiosRequestConfig): Promise<operations.GETGETInstanceUefiDataResponse>;
    /**
     * Retrieve historical information about a CIDR within an IPAM scope. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/view-history-cidr-ipam.html">View the history of IP addresses</a> in the <i>Amazon VPC IPAM User Guide</i>.
     */
    getGETIpamAddressHistory(req: operations.GETGETIpamAddressHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GETGETIpamAddressHistoryResponse>;
    /**
     * <p>Retrieves the configuration data of the specified instance. You can use this data to create a launch template. </p> <p>This action calls on other describe actions to get instance information. Depending on your instance configuration, you may need to allow the following actions in your IAM policy: <code>DescribeSpotInstanceRequests</code>, <code>DescribeInstanceCreditSpecifications</code>, <code>DescribeVolumes</code>, <code>DescribeInstanceAttribute</code>, and <code>DescribeElasticGpus</code>. Or, you can allow <code>describe*</code> depending on your instance requirements.</p>
     */
    getGETLaunchTemplateData(req: operations.GETGETLaunchTemplateDataRequest, config?: AxiosRequestConfig): Promise<operations.GETGETLaunchTemplateDataResponse>;
    /**
     * Gets information about the resources that are associated with the specified managed prefix list.
     */
    getGETManagedPrefixListAssociations(req: operations.GETGETManagedPrefixListAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GETGETManagedPrefixListAssociationsResponse>;
    /**
     * Gets information about the entries for a specified managed prefix list.
     */
    getGETManagedPrefixListEntries(req: operations.GETGETManagedPrefixListEntriesRequest, config?: AxiosRequestConfig): Promise<operations.GETGETManagedPrefixListEntriesResponse>;
    /**
     * Gets the findings for the specified Network Access Scope analysis.
     */
    getGETNetworkInsightsAccessScopeAnalysisFindings(req: operations.GETGETNetworkInsightsAccessScopeAnalysisFindingsRequest, config?: AxiosRequestConfig): Promise<operations.GETGETNetworkInsightsAccessScopeAnalysisFindingsResponse>;
    /**
     * Gets the content for the specified Network Access Scope.
     */
    getGETNetworkInsightsAccessScopeContent(req: operations.GETGETNetworkInsightsAccessScopeContentRequest, config?: AxiosRequestConfig): Promise<operations.GETGETNetworkInsightsAccessScopeContentResponse>;
    /**
     * <p>Retrieves the encrypted administrator password for a running Windows instance.</p> <p>The Windows password is generated at boot by the <code>EC2Config</code> service or <code>EC2Launch</code> scripts (Windows Server 2016 and later). This usually only happens the first time an instance is launched. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/UsingConfig_WinAMI.html">EC2Config</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2launch.html">EC2Launch</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>For the <code>EC2Config</code> service, the password is not generated for rebundled AMIs unless <code>Ec2SetPassword</code> is enabled before bundling.</p> <p>The password is encrypted using the key pair that you specified when you launched the instance. You must provide the corresponding key pair file.</p> <p>When you launch an instance, password generation and encryption may take a few minutes. If you try to retrieve the password before it's available, the output returns an empty string. We recommend that you wait up to 15 minutes after launching an instance before trying to retrieve the generated password.</p>
     */
    getGETPasswordData(req: operations.GETGETPasswordDataRequest, config?: AxiosRequestConfig): Promise<operations.GETGETPasswordDataResponse>;
    /**
     * Retrieves the access status of your account to the EC2 serial console of all instances. By default, access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2 User Guide</i>.
     */
    getGETSerialConsoleAccessStatus(req: operations.GETGETSerialConsoleAccessStatusRequest, config?: AxiosRequestConfig): Promise<operations.GETGETSerialConsoleAccessStatusResponse>;
    /**
     * Get the Verified Access policy associated with the endpoint.
     */
    getGETVerifiedAccessEndpointPolicy(req: operations.GETGETVerifiedAccessEndpointPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GETGETVerifiedAccessEndpointPolicyResponse>;
    /**
     * Shows the contents of the Verified Access policy associated with the group.
     */
    getGETVerifiedAccessGroupPolicy(req: operations.GETGETVerifiedAccessGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GETGETVerifiedAccessGroupPolicyResponse>;
    /**
     * Download an Amazon Web Services-provided sample configuration file to be used with the customer gateway device specified for your Site-to-Site VPN connection.
     */
    getGETVpnConnectionDeviceSampleConfiguration(req: operations.GETGETVpnConnectionDeviceSampleConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GETGETVpnConnectionDeviceSampleConfigurationResponse>;
    /**
     * Obtain a list of customer gateway devices for which sample configuration files can be provided. The request has no additional parameters. You can also see the list of device types with sample configuration files available under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer gateway device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.
     */
    getGETVpnConnectionDeviceTypes(req: operations.GETGETVpnConnectionDeviceTypesRequest, config?: AxiosRequestConfig): Promise<operations.GETGETVpnConnectionDeviceTypesResponse>;
    /**
     * <p>Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list.</p> <p>Uploading a client certificate revocation list resets existing client connections.</p>
     */
    getImportClientVpnClientCertificateRevocationList(req: operations.GETImportClientVpnClientCertificateRevocationListRequest, config?: AxiosRequestConfig): Promise<operations.GETImportClientVpnClientCertificateRevocationListResponse>;
    /**
     * <p>Creates an import volume task using metadata from the specified disk image.</p> <p>This API action supports only single-volume VMs. To import multi-volume VMs, use <a>ImportImage</a> instead. To import a disk to a snapshot, use <a>ImportSnapshot</a> instead.</p> <p>This API action is not supported by the Command Line Interface (CLI). For information about using the Amazon EC2 CLI, which is deprecated, see <a href="https://awsdocs.s3.amazonaws.com/EC2/ec2-clt.pdf#importing-your-volumes-into-amazon-ebs">Importing Disks to Amazon EBS</a> in the <i>Amazon EC2 CLI Reference</i> PDF file.</p> <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
     */
    getImportVolume(req: operations.GETImportVolumeRequest, config?: AxiosRequestConfig): Promise<operations.GETImportVolumeResponse>;
    /**
     * Lists one or more AMIs that are currently in the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle Bin</a> in the <i>Amazon EC2 User Guide</i>.
     */
    getListImagesInRecycleBin(req: operations.GETListImagesInRecycleBinRequest, config?: AxiosRequestConfig): Promise<operations.GETListImagesInRecycleBinResponse>;
    /**
     * Lists one or more snapshots that are currently in the Recycle Bin.
     */
    getListSnapshotsInRecycleBin(req: operations.GETListSnapshotsInRecycleBinRequest, config?: AxiosRequestConfig): Promise<operations.GETListSnapshotsInRecycleBinResponse>;
    /**
     * Modifies an attribute of the specified Elastic IP address. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.
     */
    getModifyAddressAttribute(req: operations.GETModifyAddressAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyAddressAttributeResponse>;
    /**
     * <p>Changes the opt-in status of the Local Zone and Wavelength Zone group for your account.</p> <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html"> DescribeAvailabilityZones</a> to view the value for <code>GroupName</code>.</p>
     */
    getModifyAvailabilityZoneGroup(req: operations.GETModifyAvailabilityZoneGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyAvailabilityZoneGroupResponse>;
    /**
     * Modifies a Capacity Reservation's capacity and the conditions under which it is to be released. You cannot change a Capacity Reservation's instance type, EBS optimization, instance store settings, platform, Availability Zone, or instance eligibility. If you need to modify any of these attributes, we recommend that you cancel the Capacity Reservation, and then create a new one with the required attributes.
     */
    getModifyCapacityReservation(req: operations.GETModifyCapacityReservationRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyCapacityReservationResponse>;
    /**
     * <p>Modifies a Capacity Reservation Fleet.</p> <p>When you modify the total target capacity of a Capacity Reservation Fleet, the Fleet automatically creates new Capacity Reservations, or modifies or cancels existing Capacity Reservations in the Fleet to meet the new total target capacity. When you modify the end date for the Fleet, the end dates for all of the individual Capacity Reservations in the Fleet are updated accordingly.</p>
     */
    getModifyCapacityReservationFleet(req: operations.GETModifyCapacityReservationFleetRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyCapacityReservationFleetResponse>;
    /**
     * Modifies the specified Client VPN endpoint. Modifying the DNS server resets existing client connections.
     */
    getModifyClientVpnEndpoint(req: operations.GETModifyClientVpnEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyClientVpnEndpointResponse>;
    /**
     * <p>Modifies the default credit option for CPU usage of burstable performance instances. The default credit option is set at the account level per Amazon Web Services Region, and is specified per instance family. All new burstable performance instances in the account launch using the default credit option.</p> <p> <code>ModifyDefaultCreditSpecification</code> is an asynchronous operation, which works at an Amazon Web Services Region level and modifies the credit option for each Availability Zone. All zones in a Region are updated within five minutes. But if instances are launched during this operation, they might not get the new credit option until the zone is updated. To verify whether the update has occurred, you can call <code>GetDefaultCreditSpecification</code> and check <code>DefaultCreditSpecification</code> for updates.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getModifyDefaultCreditSpecification(req: operations.GETModifyDefaultCreditSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyDefaultCreditSpecificationResponse>;
    /**
     * <p>Changes the default KMS key for EBS encryption by default for your account in this Region.</p> <p>Amazon Web Services creates a unique Amazon Web Services managed KMS key in each Region for use with encryption by default. If you change the default KMS key to a symmetric customer managed KMS key, it is used instead of the Amazon Web Services managed KMS key. To reset the default KMS key to the Amazon Web Services managed KMS key for EBS, use <a>ResetEbsDefaultKmsKeyId</a>. Amazon EBS does not support asymmetric KMS keys.</p> <p>If you delete or disable the customer managed KMS key that you specified for use with encryption by default, your instances will fail to launch.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getModifyEbsDefaultKmsKeyId(req: operations.GETModifyEbsDefaultKmsKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyEbsDefaultKmsKeyIdResponse>;
    /**
     * <p>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled, any instances that you launch with a tenancy of <code>host</code> but without a specific host ID are placed onto any available Dedicated Host in your account that has auto-placement enabled. When auto-placement is disabled, you need to provide a host ID to have the instance launch onto a specific host. If no host ID is provided, the instance is launched onto a suitable host with auto-placement enabled.</p> <p>You can also use this API action to modify a Dedicated Host to support either multiple instance types in an instance family, or to support a specific instance type only.</p>
     */
    getModifyHosts(req: operations.GETModifyHostsRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyHostsResponse>;
    /**
     * <p>Modifies the ID format for the specified resource on a per-Region basis. You can specify that resources should receive longer IDs (17-character IDs) when they are created.</p> <p>This request can only be used to modify longer ID settings for resource types that are within the opt-in period. Resources currently in their opt-in period include: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p> <p>This setting applies to the IAM user who makes the request; it does not apply to the entire Amazon Web Services account. By default, an IAM user defaults to the same settings as the root user. If you're using this action as the root user, then these settings apply to the entire account, unless an IAM user explicitly overrides these settings for themselves. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Resources created with longer IDs are visible to all IAM roles and users, regardless of these settings and provided that they have permission to use the relevant <code>Describe</code> command for the resource type.</p>
     */
    getModifyIdFormat(req: operations.GETModifyIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyIdFormatResponse>;
    /**
     * <p>Modifies the ID format of a resource for a specified IAM user, IAM role, or the root user for an account; or all IAM users, IAM roles, and the root user for an account. You can specify that resources should receive longer IDs (17-character IDs) when they are created. </p> <p>This request can only be used to modify longer ID settings for resource types that are within the opt-in period. Resources currently in their opt-in period include: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> <p>This setting applies to the principal specified in the request; it does not apply to the principal that makes the request. </p> <p>Resources created with longer IDs are visible to all IAM roles and users, regardless of these settings and provided that they have permission to use the relevant <code>Describe</code> command for the resource type.</p>
     */
    getModifyIdentityIdFormat(req: operations.GETModifyIdentityIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyIdentityIdFormatResponse>;
    /**
     * Modifies the start time for a scheduled Amazon EC2 instance event.
     */
    getModifyInstanceEventStartTime(req: operations.GETModifyInstanceEventStartTimeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyInstanceEventStartTimeResponse>;
    /**
     * Modifies the recovery behavior of your instance to disable simplified automatic recovery or set the recovery behavior to default. The default configuration will not enable simplified automatic recovery for an unsupported instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.
     */
    getModifyInstanceMaintenanceOptions(req: operations.GETModifyInstanceMaintenanceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyInstanceMaintenanceOptionsResponse>;
    /**
     * Modify the instance metadata parameters on a running or stopped instance. When you modify the parameters on a stopped instance, they are applied when the instance is started. When you modify the parameters on a running instance, the API responds with a state of “pending”. After the parameter modifications are successfully applied to the instance, the state of the modifications changes from “pending” to “applied” in subsequent describe-instances API calls. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon EC2 User Guide</i>.
     */
    getModifyInstanceMetadataOptions(req: operations.GETModifyInstanceMetadataOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyInstanceMetadataOptionsResponse>;
    /**
     * <p>Modifies the placement attributes for a specified instance. You can do the following:</p> <ul> <li> <p>Modify the affinity between an instance and a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Host</a>. When affinity is set to <code>host</code> and the instance is not associated with a specific Dedicated Host, the next time the instance is launched, it is automatically associated with the host on which it lands. If the instance is restarted or rebooted, this relationship persists.</p> </li> <li> <p>Change the Dedicated Host with which an instance is associated.</p> </li> <li> <p>Change the instance tenancy of an instance.</p> </li> <li> <p>Move an instance to or from a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">placement group</a>.</p> </li> </ul> <p>At least one attribute for affinity, host ID, tenancy, or placement group name must be specified in the request. Affinity and tenancy can be modified in the same request.</p> <p>To modify the host ID, tenancy, placement group, or partition for an instance, the instance must be in the <code>stopped</code> state.</p>
     */
    getModifyInstancePlacement(req: operations.GETModifyInstancePlacementRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyInstancePlacementResponse>;
    /**
     * <p>Modify a resource CIDR. You can use this action to transfer resource CIDRs between scopes and ignore resource CIDRs that you do not want to manage. If set to false, the resource will not be tracked for overlap, it cannot be auto-imported into a pool, and it will be removed from any pool it has an allocation in.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/move-resource-ipam.html">Move resource CIDRs between scopes</a> and <a href="https://docs.aws.amazon.com/vpc/latest/ipam/change-monitoring-state-ipam.html">Change the monitoring state of resource CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
     */
    getModifyIpamResourceCidr(req: operations.GETModifyIpamResourceCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyIpamResourceCidrResponse>;
    /**
     * Modify an IPAM scope.
     */
    getModifyIpamScope(req: operations.GETModifyIpamScopeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyIpamScopeResponse>;
    /**
     * Modifies a launch template. You can specify which version of the launch template to set as the default version. When launching an instance, the default version applies when a launch template version is not specified.
     */
    getModifyLaunchTemplate(req: operations.GETModifyLaunchTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyLaunchTemplateResponse>;
    /**
     * Modifies the specified local gateway route.
     */
    getModifyLocalGatewayRoute(req: operations.GETModifyLocalGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyLocalGatewayRouteResponse>;
    /**
     * Modifies the options for instance hostnames for the specified instance.
     */
    getModifyPrivateDnsNameOptions(req: operations.GETModifyPrivateDnsNameOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyPrivateDnsNameOptionsResponse>;
    /**
     * Archives an Amazon EBS snapshot. When you archive a snapshot, it is converted to a full snapshot that includes all of the blocks of data that were written to the volume at the time the snapshot was created, and moved from the standard tier to the archive tier. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-archive.html">Archive Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
     */
    getModifySnapshotTier(req: operations.GETModifySnapshotTierRequest, config?: AxiosRequestConfig): Promise<operations.GETModifySnapshotTierResponse>;
    /**
     * <p>Modifies a subnet attribute. You can only modify one attribute at a time.</p> <p>Use this action to modify subnets on Amazon Web Services Outposts.</p> <ul> <li> <p>To modify a subnet on an Outpost rack, set both <code>MapCustomerOwnedIpOnLaunch</code> and <code>CustomerOwnedIpv4Pool</code>. These two parameters act as a single attribute.</p> </li> <li> <p>To modify a subnet on an Outpost server, set either <code>EnableLniAtDeviceIndex</code> or <code>DisableLniAtDeviceIndex</code>.</p> </li> </ul> <p>For more information about Amazon Web Services Outposts, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/outposts/latest/userguide/how-servers-work.html">Outpost servers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/outposts/latest/userguide/how-racks-work.html">Outpost racks</a> </p> </li> </ul>
     */
    getModifySubnetAttribute(req: operations.GETModifySubnetAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifySubnetAttributeResponse>;
    /**
     * <p>Allows or restricts mirroring network services.</p> <p> By default, Amazon DNS network services are not eligible for Traffic Mirror. Use <code>AddNetworkServices</code> to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored. When you no longer want to mirror network services, use <code>RemoveNetworkServices</code> to remove the network services from the Traffic Mirror filter. </p>
     */
    getModifyTrafficMirrorFilterNetworkServices(req: operations.GETModifyTrafficMirrorFilterNetworkServicesRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyTrafficMirrorFilterNetworkServicesResponse>;
    /**
     * <p>Modifies the specified Traffic Mirror rule.</p> <p> <code>DestinationCidrBlock</code> and <code>SourceCidrBlock</code> must both be an IPv4 range or an IPv6 range.</p>
     */
    getModifyTrafficMirrorFilterRule(req: operations.GETModifyTrafficMirrorFilterRuleRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyTrafficMirrorFilterRuleResponse>;
    /**
     * Modifies a Traffic Mirror session.
     */
    getModifyTrafficMirrorSession(req: operations.GETModifyTrafficMirrorSessionRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyTrafficMirrorSessionResponse>;
    /**
     * Modifies the specified transit gateway. When you modify a transit gateway, the modified options are applied to new transit gateway attachments only. Your existing transit gateway attachments are not modified.
     */
    getModifyTransitGateway(req: operations.GETModifyTransitGatewayRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyTransitGatewayResponse>;
    /**
     * Modifies a reference (route) to a prefix list in a specified transit gateway route table.
     */
    getModifyTransitGatewayPrefixListReference(req: operations.GETModifyTransitGatewayPrefixListReferenceRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyTransitGatewayPrefixListReferenceResponse>;
    /**
     * Modifies the specified VPC attachment.
     */
    getModifyTransitGatewayVpcAttachment(req: operations.GETModifyTransitGatewayVpcAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyTransitGatewayVpcAttachmentResponse>;
    /**
     * Modifies the configuration of an Amazon Web Services Verified Access endpoint.
     */
    getModifyVerifiedAccessEndpoint(req: operations.GETModifyVerifiedAccessEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVerifiedAccessEndpointResponse>;
    /**
     * Modifies the specified Verified Access endpoint policy.
     */
    getModifyVerifiedAccessEndpointPolicy(req: operations.GETModifyVerifiedAccessEndpointPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVerifiedAccessEndpointPolicyResponse>;
    /**
     * Modifies the specified Verified Access group configuration.
     */
    getModifyVerifiedAccessGroup(req: operations.GETModifyVerifiedAccessGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVerifiedAccessGroupResponse>;
    /**
     * Modifies the specified Verified Access group policy.
     */
    getModifyVerifiedAccessGroupPolicy(req: operations.GETModifyVerifiedAccessGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVerifiedAccessGroupPolicyResponse>;
    /**
     * Modifies the configuration of the specified Verified Access instance.
     */
    getModifyVerifiedAccessInstance(req: operations.GETModifyVerifiedAccessInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVerifiedAccessInstanceResponse>;
    /**
     * Modifies the configuration of the specified Amazon Web Services Verified Access trust provider.
     */
    getModifyVerifiedAccessTrustProvider(req: operations.GETModifyVerifiedAccessTrustProviderRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVerifiedAccessTrustProviderResponse>;
    /**
     * <p>You can modify several parameters of an existing EBS volume, including volume size, volume type, and IOPS capacity. If your EBS volume is attached to a current-generation EC2 instance type, you might be able to apply these changes without stopping the instance or detaching the volume from it. For more information about modifying EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modify-volume.html">Amazon EBS Elastic Volumes</a> (Linux instances) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-modify-volume.html">Amazon EBS Elastic Volumes</a> (Windows instances).</p> <p>When you complete a resize operation on your volume, you need to extend the volume's file-system size to take advantage of the new storage capacity. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#recognize-expanded-volume-linux">Extend a Linux file system</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html#recognize-expanded-volume-windows">Extend a Windows file system</a>.</p> <p> You can use CloudWatch Events to check the status of a modification to an EBS volume. For information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. You can also track the status of a modification using <a>DescribeVolumesModifications</a>. For information about tracking status changes using either method, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-modifications.html">Monitor the progress of volume modifications</a>.</p> <p>With previous-generation instance types, resizing an EBS volume might require detaching and reattaching the volume or stopping and restarting the instance.</p> <p>After modifying a volume, you must wait at least six hours and ensure that the volume is in the <code>in-use</code> or <code>available</code> state before you can modify the same volume. This is sometimes referred to as a cooldown period.</p>
     */
    getModifyVolume(req: operations.GETModifyVolumeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVolumeResponse>;
    /**
     * <p>Modifies a volume attribute.</p> <p>By default, all I/O operations for the volume are suspended when the data on the volume is determined to be potentially inconsistent, to prevent undetectable, latent data corruption. The I/O access to the volume can be resumed by first enabling I/O access and then checking the data consistency on your volume.</p> <p>You can change the default behavior to resume I/O operations. We recommend that you change this only for boot volumes or for volumes that are stateless or disposable.</p>
     */
    getModifyVolumeAttribute(req: operations.GETModifyVolumeAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVolumeAttributeResponse>;
    /**
     * Modifies the specified attribute of the specified VPC.
     */
    getModifyVpcAttribute(req: operations.GETModifyVpcAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpcAttributeResponse>;
    /**
     * Modifies attributes of a specified VPC endpoint. The attributes that you can modify depend on the type of VPC endpoint (interface, gateway, or Gateway Load Balancer). For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/">Amazon Web Services PrivateLink Guide</a>.
     */
    getModifyVpcEndpoint(req: operations.GETModifyVpcEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpcEndpointResponse>;
    /**
     * Modifies a connection notification for VPC endpoint or VPC endpoint service. You can change the SNS topic for the notification, or the events for which to be notified.
     */
    getModifyVpcEndpointConnectionNotification(req: operations.GETModifyVpcEndpointConnectionNotificationRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpcEndpointConnectionNotificationResponse>;
    /**
     * <p>Modifies the attributes of your VPC endpoint service configuration. You can change the Network Load Balancers or Gateway Load Balancers for your service, and you can specify whether acceptance is required for requests to connect to your endpoint service through an interface VPC endpoint.</p> <p>If you set or modify the private DNS name, you must prove that you own the private DNS domain name.</p>
     */
    getModifyVpcEndpointServiceConfiguration(req: operations.GETModifyVpcEndpointServiceConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpcEndpointServiceConfigurationResponse>;
    /**
     * Modifies the payer responsibility for your VPC endpoint service.
     */
    getModifyVpcEndpointServicePayerResponsibility(req: operations.GETModifyVpcEndpointServicePayerResponsibilityRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpcEndpointServicePayerResponsibilityResponse>;
    /**
     * <p>Modifies the permissions for your VPC endpoint service. You can add or remove permissions for service consumers (Amazon Web Services accounts, users, and IAM roles) to connect to your endpoint service.</p> <p>If you grant permissions to all principals, the service is public. Any users who know the name of a public service can send a request to attach an endpoint. If the service does not require manual approval, attachments are automatically approved.</p>
     */
    getModifyVpcEndpointServicePermissions(req: operations.GETModifyVpcEndpointServicePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpcEndpointServicePermissionsResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Modifies the VPC peering connection options on one side of a VPC peering connection. You can do the following:</p> <ul> <li> <p>Enable/disable communication over the peering connection between an EC2-Classic instance that's linked to your VPC (using ClassicLink) and instances in the peer VPC.</p> </li> <li> <p>Enable/disable communication over the peering connection between instances in your VPC and an EC2-Classic instance that's linked to the peer VPC.</p> </li> <li> <p>Enable/disable the ability to resolve public DNS hostnames to private IP addresses when queried from instances in the peer VPC.</p> </li> </ul> <p>If the peered VPCs are in the same Amazon Web Services account, you can enable DNS resolution for queries from the local VPC. This ensures that queries from the local VPC resolve to private IP addresses in the peer VPC. This option is not available if the peered VPCs are in different Amazon Web Services accounts or different Regions. For peered VPCs in different Amazon Web Services accounts, each Amazon Web Services account owner must initiate a separate request to modify the peering connection options. For inter-region peering connections, you must use the Region for the requester VPC to modify the requester VPC peering options and the Region for the accepter VPC to modify the accepter VPC peering options. To verify which VPCs are the accepter and the requester for a VPC peering connection, use the <a>DescribeVpcPeeringConnections</a> command.</p>
     */
    getModifyVpcPeeringConnectionOptions(req: operations.GETModifyVpcPeeringConnectionOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpcPeeringConnectionOptionsResponse>;
    /**
     * <p>Modifies the instance tenancy attribute of the specified VPC. You can change the instance tenancy attribute of a VPC to <code>default</code> only. You cannot change the instance tenancy attribute to <code>dedicated</code>.</p> <p>After you modify the tenancy of the VPC, any new instances that you launch into the VPC have a tenancy of <code>default</code>, unless you specify otherwise during launch. The tenancy of any existing instances in the VPC is not affected.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getModifyVpcTenancy(req: operations.GETModifyVpcTenancyRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpcTenancyResponse>;
    /**
     * <p>Modifies the customer gateway or the target gateway of an Amazon Web Services Site-to-Site VPN connection. To modify the target gateway, the following migration options are available:</p> <ul> <li> <p>An existing virtual private gateway to a new virtual private gateway</p> </li> <li> <p>An existing virtual private gateway to a transit gateway</p> </li> <li> <p>An existing transit gateway to a new transit gateway</p> </li> <li> <p>An existing transit gateway to a virtual private gateway</p> </li> </ul> <p>Before you perform the migration to the new gateway, you must configure the new gateway. Use <a>CreateVpnGateway</a> to create a virtual private gateway, or <a>CreateTransitGateway</a> to create a transit gateway.</p> <p>This step is required when you migrate from a virtual private gateway with static routes to a transit gateway. </p> <p>You must delete the static routes before you migrate to the new gateway.</p> <p>Keep a copy of the static route before you delete it. You will need to add back these routes to the transit gateway after the VPN connection migration is complete.</p> <p>After you migrate to the new gateway, you might need to modify your VPC route table. Use <a>CreateRoute</a> and <a>DeleteRoute</a> to make the changes described in <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/modify-vpn-target.html#step-update-routing">Update VPC route tables</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p> <p>When the new gateway is a transit gateway, modify the transit gateway route table to allow traffic between the VPC and the Amazon Web Services Site-to-Site VPN connection. Use <a>CreateTransitGatewayRoute</a> to add the routes.</p> <p> If you deleted VPN static routes, you must add the static routes to the transit gateway route table.</p> <p>After you perform this operation, the VPN endpoint's IP addresses on the Amazon Web Services side and the tunnel options remain intact. Your Amazon Web Services Site-to-Site VPN connection will be temporarily unavailable for a brief period while we provision the new endpoints.</p>
     */
    getModifyVpnConnection(req: operations.GETModifyVpnConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpnConnectionResponse>;
    /**
     * <p>Modifies the connection options for your Site-to-Site VPN connection.</p> <p>When you modify the VPN connection options, the VPN endpoint IP addresses on the Amazon Web Services side do not change, and the tunnel options do not change. Your VPN connection will be temporarily unavailable for a brief period while the VPN connection is updated.</p>
     */
    getModifyVpnConnectionOptions(req: operations.GETModifyVpnConnectionOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpnConnectionOptionsResponse>;
    /**
     * Modifies the VPN tunnel endpoint certificate.
     */
    getModifyVpnTunnelCertificate(req: operations.GETModifyVpnTunnelCertificateRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyVpnTunnelCertificateResponse>;
    /**
     * <p>Enables detailed monitoring for a running instance. Otherwise, basic monitoring is enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitor your instances using CloudWatch</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>To disable detailed monitoring, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnmonitorInstances.html">UnmonitorInstances</a>.</p>
     */
    getMonitorInstances(req: operations.GETMonitorInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GETMonitorInstancesResponse>;
    /**
     * <p>Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The Elastic IP address must be allocated to your account for more than 24 hours, and it must not be associated with an instance. After the Elastic IP address is moved, it is no longer available for use in the EC2-Classic platform, unless you move it back using the <a>RestoreAddressToClassic</a> request. You cannot move an Elastic IP address that was originally allocated for use in the EC2-VPC platform to the EC2-Classic platform.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    getMoveAddressToVpc(req: operations.GETMoveAddressToVpcRequest, config?: AxiosRequestConfig): Promise<operations.GETMoveAddressToVpcResponse>;
    /**
     * <p>Move a BYOIPv4 CIDR to IPAM from a public IPv4 pool.</p> <p>If you already have a BYOIPv4 CIDR with Amazon Web Services, you can move the CIDR to IPAM from a public IPv4 pool. You cannot move an IPv6 CIDR to IPAM. If you are bringing a new IP address to Amazon Web Services for the first time, complete the steps in <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoip-ipam.html">Tutorial: BYOIP address CIDRs to IPAM</a>.</p>
     */
    getMoveByoipCidrToIpam(req: operations.GETMoveByoipCidrToIpamRequest, config?: AxiosRequestConfig): Promise<operations.GETMoveByoipCidrToIpamResponse>;
    /**
     * <p>Provision a CIDR to an IPAM pool. You can use this action to provision new CIDRs to a top-level pool or to transfer a CIDR from a top-level pool to a pool within it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/prov-cidr-ipam.html">Provision CIDRs to pools</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    getProvisionIpamPoolCidr(req: operations.GETProvisionIpamPoolCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETProvisionIpamPoolCidrResponse>;
    /**
     * <p>Provision a CIDR to a public IPv4 pool.</p> <p>For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
     */
    getProvisionPublicIpv4PoolCidr(req: operations.GETProvisionPublicIpv4PoolCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETProvisionPublicIpv4PoolCidrResponse>;
    /**
     * <p>Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay a lower hourly rate compared to On-Demand instance pricing.</p> <p>Use <a>DescribeReservedInstancesOfferings</a> to get a list of Reserved Instance offerings that match your specifications. After you've purchased a Reserved Instance, you can check for your new Reserved Instance with <a>DescribeReservedInstances</a>.</p> <p>To queue a purchase for a future date and time, specify a purchase time. If you do not specify a purchase time, the default is the current time.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved Instances</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon EC2 User Guide</i>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    getPurchaseReservedInstancesOffering(req: operations.GETPurchaseReservedInstancesOfferingRequest, config?: AxiosRequestConfig): Promise<operations.GETPurchaseReservedInstancesOfferingResponse>;
    /**
     * <p>Requests a reboot of the specified instances. This operation is asynchronous; it only queues a request to reboot the specified instances. The operation succeeds if the instances are valid and belong to you. Requests to reboot terminated instances are ignored.</p> <p>If an instance does not cleanly shut down within a few minutes, Amazon EC2 performs a hard reboot.</p> <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html">Troubleshoot an unreachable instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getRebootInstances(req: operations.GETRebootInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GETRebootInstancesResponse>;
    /**
     * <p>Registers a set of tag keys to include in scheduled event notifications for your resources. </p> <p>To remove tags, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterInstanceEventNotificationAttributes.html">DeregisterInstanceEventNotificationAttributes</a>.</p>
     */
    getRegisterInstanceEventNotificationAttributes(req: operations.GETRegisterInstanceEventNotificationAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETRegisterInstanceEventNotificationAttributesResponse>;
    /**
     * <p>Registers members (network interfaces) with the transit gateway multicast group. A member is a network interface associated with a supported EC2 instance that receives multicast traffic. For information about supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast Consideration</a> in <i>Amazon VPC Transit Gateways</i>.</p> <p>After you add the members, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the members were added to the transit gateway multicast group.</p>
     */
    getRegisterTransitGatewayMulticastGroupMembers(req: operations.GETRegisterTransitGatewayMulticastGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.GETRegisterTransitGatewayMulticastGroupMembersResponse>;
    /**
     * <p>Registers sources (network interfaces) with the specified transit gateway multicast group.</p> <p>A multicast source is a network interface attached to a supported instance that sends multicast traffic. For information about supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast Considerations</a> in <i>Amazon VPC Transit Gateways</i>.</p> <p>After you add the source, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the source was added to the multicast group.</p>
     */
    getRegisterTransitGatewayMulticastGroupSources(req: operations.GETRegisterTransitGatewayMulticastGroupSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GETRegisterTransitGatewayMulticastGroupSourcesResponse>;
    /**
     * Rejects a request to associate cross-account subnets with a transit gateway multicast domain.
     */
    getRejectTransitGatewayMulticastDomainAssociations(req: operations.GETRejectTransitGatewayMulticastDomainAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GETRejectTransitGatewayMulticastDomainAssociationsResponse>;
    /**
     * Rejects a transit gateway peering attachment request.
     */
    getRejectTransitGatewayPeeringAttachment(req: operations.GETRejectTransitGatewayPeeringAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GETRejectTransitGatewayPeeringAttachmentResponse>;
    /**
     * <p>Rejects a request to attach a VPC to a transit gateway.</p> <p>The VPC attachment must be in the <code>pendingAcceptance</code> state. Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests. Use <a>AcceptTransitGatewayVpcAttachment</a> to accept a VPC attachment request.</p>
     */
    getRejectTransitGatewayVpcAttachment(req: operations.GETRejectTransitGatewayVpcAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GETRejectTransitGatewayVpcAttachmentResponse>;
    /**
     * Rejects VPC endpoint connection requests to your VPC endpoint service.
     */
    getRejectVpcEndpointConnections(req: operations.GETRejectVpcEndpointConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GETRejectVpcEndpointConnectionsResponse>;
    /**
     * Rejects a VPC peering connection request. The VPC peering connection must be in the <code>pending-acceptance</code> state. Use the <a>DescribeVpcPeeringConnections</a> request to view your outstanding VPC peering connection requests. To delete an active VPC peering connection, or to delete a VPC peering connection request that you initiated, use <a>DeleteVpcPeeringConnection</a>.
     */
    getRejectVpcPeeringConnection(req: operations.GETRejectVpcPeeringConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GETRejectVpcPeeringConnectionResponse>;
    /**
     * <p>Releases the specified Elastic IP address.</p> <p>[EC2-Classic, default VPC] Releasing an Elastic IP address automatically disassociates it from any instance that it's associated with. To disassociate an Elastic IP address without releasing it, use <a>DisassociateAddress</a>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>[Nondefault VPC] You must use <a>DisassociateAddress</a> to disassociate the Elastic IP address before you can release it. Otherwise, Amazon EC2 returns an error (<code>InvalidIPAddress.InUse</code>).</p> <p>After releasing an Elastic IP address, it is released to the IP address pool. Be sure to update your DNS records and any servers or devices that communicate with the address. If you attempt to release an Elastic IP address that you already released, you'll get an <code>AuthFailure</code> error if the address is already allocated to another Amazon Web Services account.</p> <p>[EC2-VPC] After you release an Elastic IP address for use in a VPC, you might be able to recover it. For more information, see <a>AllocateAddress</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getReleaseAddress(req: operations.GETReleaseAddressRequest, config?: AxiosRequestConfig): Promise<operations.GETReleaseAddressResponse>;
    /**
     * <p>When you no longer want to use an On-Demand Dedicated Host it can be released. On-Demand billing is stopped and the host goes into <code>released</code> state. The host ID of Dedicated Hosts that have been released can no longer be specified in another request, for example, to modify the host. You must stop or terminate all instances on a host before it can be released.</p> <p>When Dedicated Hosts are released, it may take some time for them to stop counting toward your limit and you may receive capacity errors when trying to allocate new Dedicated Hosts. Wait a few minutes and then try again.</p> <p>Released hosts still appear in a <a>DescribeHosts</a> response.</p>
     */
    getReleaseHosts(req: operations.GETReleaseHostsRequest, config?: AxiosRequestConfig): Promise<operations.GETReleaseHostsResponse>;
    /**
     * <p>Release an allocation within an IPAM pool. You can only use this action to release manual allocations. To remove an allocation for a resource without deleting the resource, set its monitored state to false using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamResourceCidr.html">ModifyIpamResourceCidr</a>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/release-pool-alloc-ipam.html">Release an allocation</a> in the <i>Amazon VPC IPAM User Guide</i>. </p> <note> <p>All EC2 API actions follow an <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/query-api-troubleshooting.html#eventual-consistency">eventual consistency</a> model.</p> </note>
     */
    getReleaseIpamPoolAllocation(req: operations.GETReleaseIpamPoolAllocationRequest, config?: AxiosRequestConfig): Promise<operations.GETReleaseIpamPoolAllocationResponse>;
    /**
     * <p>Replaces an IAM instance profile for the specified running instance. You can use this action to change the IAM instance profile that's associated with an instance without having to disassociate the existing IAM instance profile first.</p> <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association ID.</p>
     */
    getReplaceIamInstanceProfileAssociation(req: operations.GETReplaceIamInstanceProfileAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GETReplaceIamInstanceProfileAssociationResponse>;
    /**
     * <p>Changes which network ACL a subnet is associated with. By default when you create a subnet, it's automatically associated with the default network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>This is an idempotent operation.</p>
     */
    getReplaceNetworkAclAssociation(req: operations.GETReplaceNetworkAclAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GETReplaceNetworkAclAssociationResponse>;
    /**
     * Replaces an entry (rule) in a network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    getReplaceNetworkAclEntry(req: operations.GETReplaceNetworkAclEntryRequest, config?: AxiosRequestConfig): Promise<operations.GETReplaceNetworkAclEntryResponse>;
    /**
     * <p>Replaces an existing route within a route table in a VPC.</p> <p>You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the resources from the parameter list, or reset the local route to its default target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    getReplaceRoute(req: operations.GETReplaceRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETReplaceRouteResponse>;
    /**
     * <p>Changes the route table associated with a given subnet, internet gateway, or virtual private gateway in a VPC. After the operation completes, the subnet or gateway uses the routes in the new route table. For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>You can also use this operation to change which table is the main route table in the VPC. Specify the main route table's association ID and the route table ID of the new main route table.</p>
     */
    getReplaceRouteTableAssociation(req: operations.GETReplaceRouteTableAssociationRequest, config?: AxiosRequestConfig): Promise<operations.GETReplaceRouteTableAssociationResponse>;
    /**
     * Replaces the specified route in the specified transit gateway route table.
     */
    getReplaceTransitGatewayRoute(req: operations.GETReplaceTransitGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.GETReplaceTransitGatewayRouteResponse>;
    /**
     * <p>Submits feedback about the status of an instance. The instance must be in the <code>running</code> state. If your experience with the instance differs from the instance status returned by <a>DescribeInstanceStatus</a>, use <a>ReportInstanceStatus</a> to report your experience with the instance. Amazon EC2 collects this information to improve the accuracy of status checks.</p> <p>Use of this action does not change the value returned by <a>DescribeInstanceStatus</a>.</p>
     */
    getReportInstanceStatus(req: operations.GETReportInstanceStatusRequest, config?: AxiosRequestConfig): Promise<operations.GETReportInstanceStatusResponse>;
    /**
     * Resets the attribute of the specified IP address. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.
     */
    getResetAddressAttribute(req: operations.GETResetAddressAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETResetAddressAttributeResponse>;
    /**
     * <p>Resets the default KMS key for EBS encryption for your account in this Region to the Amazon Web Services managed KMS key for EBS.</p> <p>After resetting the default KMS key to the Amazon Web Services managed KMS key, you can continue to encrypt by a customer managed KMS key by specifying it when you create the volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getResetEbsDefaultKmsKeyId(req: operations.GETResetEbsDefaultKmsKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.GETResetEbsDefaultKmsKeyIdResponse>;
    /**
     * Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value. You can only reset the load permission attribute.
     */
    getResetFpgaImageAttribute(req: operations.GETResetFpgaImageAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETResetFpgaImageAttributeResponse>;
    /**
     * Resets an attribute of an AMI to its default value.
     */
    getResetImageAttribute(req: operations.GETResetImageAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETResetImageAttributeResponse>;
    /**
     * <p>Resets an attribute of an instance to its default value. To reset the <code>kernel</code> or <code>ramdisk</code>, the instance must be in a stopped state. To reset the <code>sourceDestCheck</code>, the instance can be either running or stopped.</p> <p>The <code>sourceDestCheck</code> attribute controls whether source/destination checking is enabled. The default value is <code>true</code>, which means checking is enabled. This value must be <code>false</code> for a NAT instance to perform NAT. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT Instances</a> in the <i>Amazon VPC User Guide</i>.</p>
     */
    getResetInstanceAttribute(req: operations.GETResetInstanceAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETResetInstanceAttributeResponse>;
    /**
     * Resets a network interface attribute. You can specify only one attribute at a time.
     */
    getResetNetworkInterfaceAttribute(req: operations.GETResetNetworkInterfaceAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETResetNetworkInterfaceAttributeResponse>;
    /**
     * <p>Resets permission settings for the specified snapshot.</p> <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Share a snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getResetSnapshotAttribute(req: operations.GETResetSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GETResetSnapshotAttributeResponse>;
    /**
     * <p>Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    getRestoreAddressToClassic(req: operations.GETRestoreAddressToClassicRequest, config?: AxiosRequestConfig): Promise<operations.GETRestoreAddressToClassicResponse>;
    /**
     * Restores an AMI from the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle Bin</a> in the <i>Amazon EC2 User Guide</i>.
     */
    getRestoreImageFromRecycleBin(req: operations.GETRestoreImageFromRecycleBinRequest, config?: AxiosRequestConfig): Promise<operations.GETRestoreImageFromRecycleBinResponse>;
    /**
     * Restores the entries from a previous version of a managed prefix list to a new version of the prefix list.
     */
    getRestoreManagedPrefixListVersion(req: operations.GETRestoreManagedPrefixListVersionRequest, config?: AxiosRequestConfig): Promise<operations.GETRestoreManagedPrefixListVersionResponse>;
    /**
     * Restores a snapshot from the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-snaps.html#recycle-bin-restore-snaps">Restore snapshots from the Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
     */
    getRestoreSnapshotFromRecycleBin(req: operations.GETRestoreSnapshotFromRecycleBinRequest, config?: AxiosRequestConfig): Promise<operations.GETRestoreSnapshotFromRecycleBinResponse>;
    /**
     * <p>Restores an archived Amazon EBS snapshot for use temporarily or permanently, or modifies the restore period or restore type for a snapshot that was previously temporarily restored.</p> <p>For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-snapshot-archiving.html#restore-archived-snapshot"> Restore an archived snapshot</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-snapshot-archiving.html#modify-temp-restore-period"> modify the restore period or restore type for a temporarily restored snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    getRestoreSnapshotTier(req: operations.GETRestoreSnapshotTierRequest, config?: AxiosRequestConfig): Promise<operations.GETRestoreSnapshotTierResponse>;
    /**
     * Removes an ingress authorization rule from a Client VPN endpoint.
     */
    getRevokeClientVpnIngress(req: operations.GETRevokeClientVpnIngressRequest, config?: AxiosRequestConfig): Promise<operations.GETRevokeClientVpnIngressResponse>;
    /**
     * <p>Sends a diagnostic interrupt to the specified Amazon EC2 instance to trigger a <i>kernel panic</i> (on Linux instances), or a <i>blue screen</i>/<i>stop error</i> (on Windows instances). For instances based on Intel and AMD processors, the interrupt is received as a <i>non-maskable interrupt</i> (NMI).</p> <p>In general, the operating system crashes and reboots when a kernel panic or stop error is triggered. The operating system can also be configured to perform diagnostic tasks, such as generating a memory dump file, loading a secondary kernel, or obtaining a call trace.</p> <p>Before sending a diagnostic interrupt to your instance, ensure that its operating system is configured to perform the required diagnostic tasks.</p> <p>For more information about configuring your operating system to generate a crash dump when a kernel panic or stop error occurs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/diagnostic-interrupt.html">Send a diagnostic interrupt (for advanced users)</a> (Linux instances) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/diagnostic-interrupt.html">Send a diagnostic interrupt (for advanced users)</a> (Windows instances).</p>
     */
    getSendDiagnosticInterrupt(req: operations.GETSendDiagnosticInterruptRequest, config?: AxiosRequestConfig): Promise<operations.GETSendDiagnosticInterruptResponse>;
    /**
     * <p>Starts an Amazon EBS-backed instance that you've previously stopped.</p> <p>Instances that use Amazon EBS volumes as their root devices can be quickly stopped and started. When an instance is stopped, the compute resources are released and you are not billed for instance usage. However, your root partition Amazon EBS volume remains and continues to persist your data, and you are charged for Amazon EBS volume usage. You can restart your instance at any time. Every time you start your instance, Amazon EC2 charges a one-minute minimum for instance usage, and thereafter charges per second for instance usage.</p> <p>Before stopping an instance, make sure it is in a state from which it can be restarted. Stopping an instance does not preserve data stored in RAM.</p> <p>Performing this operation on an instance that uses an instance store as its root device returns an error.</p> <p>If you attempt to start a T3 instance with <code>host</code> tenancy and the <code>unlimted</code> CPU credit option, the request fails. The <code>unlimited</code> CPU credit option is not supported on Dedicated Hosts. Before you start the instance, either change its CPU credit option to <code>standard</code>, or change its tenancy to <code>default</code> or <code>dedicated</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stop and start your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getStartInstances(req: operations.GETStartInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GETStartInstancesResponse>;
    /**
     * <p>Initiates the verification process to prove that the service provider owns the private DNS name domain for the endpoint service.</p> <p>The service provider must successfully perform the verification before the consumer can use the name to access the service.</p> <p>Before the service provider runs this command, they must add a record to the DNS server.</p>
     */
    getStartVpcEndpointServicePrivateDnsVerification(req: operations.GETStartVpcEndpointServicePrivateDnsVerificationRequest, config?: AxiosRequestConfig): Promise<operations.GETStartVpcEndpointServicePrivateDnsVerificationResponse>;
    /**
     * <p>Stops an Amazon EBS-backed instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stop and start your instance</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>You can use the Stop action to hibernate an instance if the instance is <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#enabling-hibernation">enabled for hibernation</a> and it meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>We don't charge usage for a stopped instance, or data transfer fees; however, your root partition Amazon EBS volume remains and continues to persist your data, and you are charged for Amazon EBS volume usage. Every time you start your instance, Amazon EC2 charges a one-minute minimum for instance usage, and thereafter charges per second for instance usage.</p> <p>You can't stop or hibernate instance store-backed instances. You can't use the Stop action to hibernate Spot Instances, but you can specify that Amazon EC2 should hibernate Spot Instances when they are interrupted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html#hibernate-spot-instances">Hibernating interrupted Spot Instances</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>When you stop or hibernate an instance, we shut it down. You can restart your instance at any time. Before stopping or hibernating an instance, make sure it is in a state from which it can be restarted. Stopping an instance does not preserve data stored in RAM, but hibernating an instance does preserve data stored in RAM. If an instance cannot hibernate successfully, a normal shutdown occurs.</p> <p>Stopping and hibernating an instance is different to rebooting or terminating it. For example, when you stop or hibernate an instance, the root device and any other devices attached to the instance persist. When you terminate an instance, the root device and any other devices attached during the instance launch are automatically deleted. For more information about the differences between rebooting, stopping, hibernating, and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>When you stop an instance, we attempt to shut it down forcibly after a short while. If your instance appears stuck in the stopping state after a period of time, there may be an issue with the underlying host computer. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshoot stopping your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getStopInstances(req: operations.GETStopInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GETStopInstancesResponse>;
    /**
     * Terminates active Client VPN endpoint connections. This action can be used to terminate a specific client connection, or up to five connections established by a specific user.
     */
    getTerminateClientVpnConnections(req: operations.GETTerminateClientVpnConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GETTerminateClientVpnConnectionsResponse>;
    /**
     * <p>Shuts down the specified instances. This operation is idempotent; if you terminate an instance more than once, each call succeeds. </p> <p>If you specify multiple instances and the request fails (for example, because of a single incorrect instance ID), none of the instances are terminated.</p> <p>If you terminate multiple instances across multiple Availability Zones, and one or more of the specified instances are enabled for termination protection, the request fails with the following results:</p> <ul> <li> <p>The specified instances that are in the same Availability Zone as the protected instance are not terminated.</p> </li> <li> <p>The specified instances that are in different Availability Zones, where no other specified instances are protected, are successfully terminated.</p> </li> </ul> <p>For example, say you have the following instances:</p> <ul> <li> <p>Instance A: <code>us-east-1a</code>; Not protected</p> </li> <li> <p>Instance B: <code>us-east-1a</code>; Not protected</p> </li> <li> <p>Instance C: <code>us-east-1b</code>; Protected</p> </li> <li> <p>Instance D: <code>us-east-1b</code>; not protected</p> </li> </ul> <p>If you attempt to terminate all of these instances in the same request, the request reports failure with the following results:</p> <ul> <li> <p>Instance A and Instance B are successfully terminated because none of the specified instances in <code>us-east-1a</code> are enabled for termination protection.</p> </li> <li> <p>Instance C and Instance D fail to terminate because at least one of the specified instances in <code>us-east-1b</code> (Instance C) is enabled for termination protection.</p> </li> </ul> <p>Terminated instances remain visible after termination (for approximately one hour).</p> <p>By default, Amazon EC2 deletes all EBS volumes that were attached when the instance launched. Volumes attached after instance launch continue running.</p> <p>You can stop, start, and terminate EBS-backed instances. You can only terminate instance store-backed instances. What happens to an instance differs if you stop it or terminate it. For example, when you stop an instance, the root device and any other devices attached to the instance persist. When you terminate an instance, any attached EBS volumes with the <code>DeleteOnTermination</code> block device mapping parameter set to <code>true</code> are automatically deleted. For more information about the differences between stopping and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesShuttingDown.html">Troubleshooting terminating your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    getTerminateInstances(req: operations.GETTerminateInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GETTerminateInstancesResponse>;
    /**
     * Unassigns one or more IPv6 addresses IPv4 Prefix Delegation prefixes from a network interface.
     */
    getUnassignIpv6Addresses(req: operations.GETUnassignIpv6AddressesRequest, config?: AxiosRequestConfig): Promise<operations.GETUnassignIpv6AddressesResponse>;
    /**
     * Unassigns one or more secondary private IP addresses, or IPv4 Prefix Delegation prefixes from a network interface.
     */
    getUnassignPrivateIpAddresses(req: operations.GETUnassignPrivateIpAddressesRequest, config?: AxiosRequestConfig): Promise<operations.GETUnassignPrivateIpAddressesResponse>;
    /**
     * <p>Unassigns secondary private IPv4 addresses from a private NAT gateway. You cannot unassign your primary private IP. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-edit-secondary">Edit secondary IP address associations</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>While unassigning is in progress, you cannot assign/unassign additional IP addresses while the connections are being drained. You are, however, allowed to delete the NAT gateway.</p> <p>A private IP address will only be released at the end of MaxDrainDurationSeconds. The private IP addresses stay associated and support the existing connections but do not support any new connections (new connections are distributed across the remaining assigned private IP address). After the existing connections drain out, the private IP addresses get released. </p> <p/> <p/>
     */
    getUnassignPrivateNatGatewayAddress(req: operations.GETUnassignPrivateNatGatewayAddressRequest, config?: AxiosRequestConfig): Promise<operations.GETUnassignPrivateNatGatewayAddressResponse>;
    /**
     * Disables detailed monitoring for a running instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring your instances and volumes</a> in the <i>Amazon EC2 User Guide</i>.
     */
    getUnmonitorInstances(req: operations.GETUnmonitorInstancesRequest, config?: AxiosRequestConfig): Promise<operations.GETUnmonitorInstancesResponse>;
    /**
     * <p>Stops advertising an address range that is provisioned as an address pool.</p> <p>You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of BGP propagation delays.</p>
     */
    getWithdrawByoipCidr(req: operations.GETWithdrawByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.GETWithdrawByoipCidrResponse>;
    /**
     * Accepts an Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#using-instance-addressing-eips-transfer-accept">Accept a transferred Elastic IP address</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    postAcceptAddressTransfer(req: operations.POSTAcceptAddressTransferRequest, config?: AxiosRequestConfig): Promise<operations.POSTAcceptAddressTransferResponse>;
    /**
     * Accepts the Convertible Reserved Instance exchange quote described in the <a>GetReservedInstancesExchangeQuote</a> call.
     */
    postAcceptReservedInstancesExchangeQuote(req: operations.POSTAcceptReservedInstancesExchangeQuoteRequest, config?: AxiosRequestConfig): Promise<operations.POSTAcceptReservedInstancesExchangeQuoteResponse>;
    /**
     * Accepts a request to associate subnets with a transit gateway multicast domain.
     */
    postAcceptTransitGatewayMulticastDomainAssociations(req: operations.POSTAcceptTransitGatewayMulticastDomainAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTAcceptTransitGatewayMulticastDomainAssociationsResponse>;
    /**
     * Accepts a transit gateway peering attachment request. The peering attachment must be in the <code>pendingAcceptance</code> state.
     */
    postAcceptTransitGatewayPeeringAttachment(req: operations.POSTAcceptTransitGatewayPeeringAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTAcceptTransitGatewayPeeringAttachmentResponse>;
    /**
     * <p>Accepts a request to attach a VPC to a transit gateway.</p> <p>The VPC attachment must be in the <code>pendingAcceptance</code> state. Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests. Use <a>RejectTransitGatewayVpcAttachment</a> to reject a VPC attachment request.</p>
     */
    postAcceptTransitGatewayVpcAttachment(req: operations.POSTAcceptTransitGatewayVpcAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTAcceptTransitGatewayVpcAttachmentResponse>;
    /**
     * Accepts connection requests to your VPC endpoint service.
     */
    postAcceptVpcEndpointConnections(req: operations.POSTAcceptVpcEndpointConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTAcceptVpcEndpointConnectionsResponse>;
    /**
     * <p>Accept a VPC peering connection request. To accept a request, the VPC peering connection must be in the <code>pending-acceptance</code> state, and you must be the owner of the peer VPC. Use <a>DescribeVpcPeeringConnections</a> to view your outstanding VPC peering connection requests.</p> <p>For an inter-Region VPC peering connection request, you must accept the VPC peering connection in the Region of the accepter VPC.</p>
     */
    postAcceptVpcPeeringConnection(req: operations.POSTAcceptVpcPeeringConnectionRequest, config?: AxiosRequestConfig): Promise<operations.POSTAcceptVpcPeeringConnectionResponse>;
    /**
     * <p>Advertises an IPv4 or IPv6 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP).</p> <p>You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise it from Amazon Web Services. To minimize down time, you can configure your Amazon Web Services resources to use an address from a BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current location and start advertising it through Amazon Web Services.</p> <p>It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of BGP propagation delays.</p> <p>To stop advertising the BYOIP CIDR, use <a>WithdrawByoipCidr</a>.</p>
     */
    postAdvertiseByoipCidr(req: operations.POSTAdvertiseByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTAdvertiseByoipCidrResponse>;
    /**
     * <p>Allocates an Elastic IP address to your Amazon Web Services account. After you allocate the Elastic IP address you can associate it with an instance or network interface. After you release an Elastic IP address, it is released to the IP address pool and can be allocated to a different Amazon Web Services account.</p> <p>You can allocate an Elastic IP address from an address pool owned by Amazon Web Services or from an address pool created from a public IPv4 address range that you have brought to Amazon Web Services for use with your Amazon Web Services resources using bring your own IP addresses (BYOIP). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>[EC2-VPC] If you release an Elastic IP address, you might be able to recover it. You cannot recover an Elastic IP address that you released after it is allocated to another Amazon Web Services account. You cannot recover an Elastic IP address for EC2-Classic. To attempt to recover an Elastic IP address that you released, specify it in this operation.</p> <p>An Elastic IP address is for use either in the EC2-Classic platform or in a VPC. By default, you can allocate 5 Elastic IP addresses for EC2-Classic per Region and 5 Elastic IP addresses for EC2-VPC per Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You can allocate a carrier IP address which is a public IP address from a telecommunication carrier, to a network interface which resides in a subnet in a Wavelength Zone (for example an EC2 instance). </p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postAllocateAddress(req: operations.POSTAllocateAddressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAllocateAddressResponse>;
    /**
     * Allocates a Dedicated Host to your account. At a minimum, specify the supported instance type or instance family, the Availability Zone in which to allocate the host, and the number of hosts to allocate.
     */
    postAllocateHosts(req: operations.POSTAllocateHostsRequest, config?: AxiosRequestConfig): Promise<operations.POSTAllocateHostsResponse>;
    /**
     * <p>Allocate a CIDR from an IPAM pool. In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/allocate-cidrs-ipam.html">Allocate CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p> <note> <p>This action creates an allocation with strong consistency. The returned CIDR will not overlap with any other allocations from the same pool.</p> </note>
     */
    postAllocateIpamPoolCidr(req: operations.POSTAllocateIpamPoolCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTAllocateIpamPoolCidrResponse>;
    /**
     * Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing security groups with the specified security groups.
     */
    postApplySecurityGroupsToClientVpnTargetNetwork(req: operations.POSTApplySecurityGroupsToClientVpnTargetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.POSTApplySecurityGroupsToClientVpnTargetNetworkResponse>;
    /**
     * <p>Assigns one or more IPv6 addresses to the specified network interface. You can specify one or more specific IPv6 addresses, or you can specify the number of IPv6 addresses to be automatically assigned from within the subnet's IPv6 CIDR block range. You can assign as many IPv6 addresses to a network interface as you can assign private IPv4 addresses, and the limit varies per instance type. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per Network Interface Per Instance Type</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You must specify either the IPv6 addresses or the IPv6 address count in the request. </p> <p>You can optionally use Prefix Delegation on the network interface. You must specify either the IPV6 Prefix Delegation prefixes, or the IPv6 Prefix Delegation count. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html"> Assigning prefixes to Amazon EC2 network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postAssignIpv6Addresses(req: operations.POSTAssignIpv6AddressesRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssignIpv6AddressesResponse>;
    /**
     * <p>Assigns one or more secondary private IP addresses to the specified network interface.</p> <p>You can specify one or more specific secondary IP addresses, or you can specify the number of secondary IP addresses to be automatically assigned within the subnet's CIDR block range. The number of secondary IP addresses that you can assign to an instance varies by instance type. For information about instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about Elastic IP addresses, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>When you move a secondary private IP address to another network interface, any Elastic IP address that is associated with the IP address is also moved.</p> <p>Remapping an IP address is an asynchronous operation. When you move an IP address from one network interface to another, check <code>network/interfaces/macs/mac/local-ipv4s</code> in the instance metadata to confirm that the remapping is complete.</p> <p>You must specify either the IP addresses or the IP address count in the request.</p> <p>You can optionally use Prefix Delegation on the network interface. You must specify either the IPv4 Prefix Delegation prefixes, or the IPv4 Prefix Delegation count. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html"> Assigning prefixes to Amazon EC2 network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postAssignPrivateIpAddresses(req: operations.POSTAssignPrivateIpAddressesRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssignPrivateIpAddressesResponse>;
    /**
     * Assigns one or more private IPv4 addresses to a private NAT gateway. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-working-with">Work with NAT gateways</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    postAssignPrivateNatGatewayAddress(req: operations.POSTAssignPrivateNatGatewayAddressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssignPrivateNatGatewayAddressResponse>;
    /**
     * <p>Associates an Elastic IP address, or carrier IP address (for instances that are in subnets in Wavelength Zones) with an instance or a network interface. Before you can use an Elastic IP address, you must allocate it to your account.</p> <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>[EC2-Classic, VPC in an EC2-VPC-only account] If the Elastic IP address is already associated with a different instance, it is disassociated from that instance and associated with the specified instance. If you associate an Elastic IP address with an instance that has an existing Elastic IP address, the existing address is disassociated from the instance, but remains allocated to your account.</p> <p>[VPC in an EC2-Classic account] If you don't specify a private IP address, the Elastic IP address is associated with the primary IP address. If the Elastic IP address is already associated with a different instance or a network interface, you get an error unless you allow reassociation. You cannot associate an Elastic IP address with an instance or network interface that has an existing Elastic IP address.</p> <p>[Subnets in Wavelength Zones] You can associate an IP address from the telecommunication carrier to the instance or network interface. </p> <p>You cannot associate an Elastic IP address with an interface in a different network border group.</p> <important> <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error, and you may be charged for each time the Elastic IP address is remapped to the same instance. For more information, see the <i>Elastic IP Addresses</i> section of <a href="http://aws.amazon.com/ec2/pricing/">Amazon EC2 Pricing</a>.</p> </important> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postAssociateAddress(req: operations.POSTAssociateAddressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateAddressResponse>;
    /**
     * <p>Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy.</p> <p>If you specified a VPC when you created the Client VPN endpoint or if you have previous subnet associations, the specified subnet must be in the same VPC. To specify a subnet that's in a different VPC, you must first modify the Client VPN endpoint (<a>ModifyClientVpnEndpoint</a>) and change the VPC that's associated with it.</p>
     */
    postAssociateClientVpnTargetNetwork(req: operations.POSTAssociateClientVpnTargetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateClientVpnTargetNetworkResponse>;
    /**
     * <p>Associates a set of DHCP options (that you've previously created) with the specified VPC, or associates no DHCP options with the VPC.</p> <p>After you associate the options with the VPC, any existing instances and all new instances that you launch in that VPC use the options. You don't need to restart or relaunch the instances. They automatically pick up the changes within a few hours, depending on how frequently the instance renews its DHCP lease. You can explicitly renew the lease using the operating system on the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP options sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postAssociateDhcpOptions(req: operations.POSTAssociateDhcpOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateDhcpOptionsResponse>;
    /**
     * <p>Associates an Identity and Access Management (IAM) role with an Certificate Manager (ACM) certificate. This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html">Certificate Manager for Nitro Enclaves</a> in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p> <p>When the IAM role is associated with the ACM certificate, the certificate, certificate chain, and encrypted private key are placed in an Amazon S3 location that only the associated IAM role can access. The private key of the certificate is encrypted with an Amazon Web Services managed key that has an attached attestation-based key policy.</p> <p>To enable the IAM role to access the Amazon S3 object, you must grant it permission to call <code>s3:GetObject</code> on the Amazon S3 bucket returned by the command. To enable the IAM role to access the KMS key, you must grant it permission to call <code>kms:Decrypt</code> on the KMS key returned by the command. For more information, see <a href="https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html#add-policy"> Grant the role permission to access the certificate and encryption key</a> in the <i>Amazon Web Services Nitro Enclaves User Guide</i>.</p>
     */
    postAssociateEnclaveCertificateIamRole(req: operations.POSTAssociateEnclaveCertificateIamRoleRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateEnclaveCertificateIamRoleResponse>;
    /**
     * Associates an IAM instance profile with a running or stopped instance. You cannot associate more than one IAM instance profile with an instance.
     */
    postAssociateIamInstanceProfile(req: operations.POSTAssociateIamInstanceProfileRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateIamInstanceProfileResponse>;
    /**
     * <p>Associates one or more targets with an event window. Only one type of target (instance IDs, Dedicated Host IDs, or tags) can be specified with an event window.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled events</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postAssociateInstanceEventWindow(req: operations.POSTAssociateInstanceEventWindowRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateInstanceEventWindowResponse>;
    /**
     * Associates an IPAM resource discovery with an Amazon VPC IPAM. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
     */
    postAssociateIpamResourceDiscovery(req: operations.POSTAssociateIpamResourceDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateIpamResourceDiscoveryResponse>;
    /**
     * <p>Associates Elastic IP addresses (EIPs) and private IPv4 addresses with a public NAT gateway. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-working-with">Work with NAT gateways</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>By default, you can associate up to 2 Elastic IP addresses per public NAT gateway. You can increase the limit by requesting a quota adjustment. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-eips">Elastic IP address quotas</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postAssociateNatGatewayAddress(req: operations.POSTAssociateNatGatewayAddressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateNatGatewayAddressResponse>;
    /**
     * <p>Associates a subnet in your VPC or an internet gateway or virtual private gateway attached to your VPC with a route table in your VPC. This association causes traffic from the subnet or gateway to be routed according to the routes in the route table. The action returns an association ID, which you need in order to disassociate the route table later. A route table can be associated with multiple subnets.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postAssociateRouteTable(req: operations.POSTAssociateRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateRouteTableResponse>;
    /**
     * Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR block with your subnet. An IPv6 CIDR block must have a prefix length of /64.
     */
    postAssociateSubnetCidrBlock(req: operations.POSTAssociateSubnetCidrBlockRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateSubnetCidrBlockResponse>;
    /**
     * <p>Associates the specified subnets and transit gateway attachments with the specified transit gateway multicast domain.</p> <p>The transit gateway attachment must be in the available state before you can add a resource. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html">DescribeTransitGatewayAttachments</a> to see the state of the attachment.</p>
     */
    postAssociateTransitGatewayMulticastDomain(req: operations.POSTAssociateTransitGatewayMulticastDomainRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateTransitGatewayMulticastDomainResponse>;
    /**
     * Associates the specified transit gateway attachment with a transit gateway policy table.
     */
    postAssociateTransitGatewayPolicyTable(req: operations.POSTAssociateTransitGatewayPolicyTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateTransitGatewayPolicyTableResponse>;
    /**
     * Associates the specified attachment with the specified transit gateway route table. You can associate only one route table with an attachment.
     */
    postAssociateTransitGatewayRouteTable(req: operations.POSTAssociateTransitGatewayRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateTransitGatewayRouteTableResponse>;
    /**
     * <note> <p>This API action is currently in <b>limited preview only</b>. If you are interested in using this feature, contact your account manager.</p> </note> <p>Associates a branch network interface with a trunk network interface.</p> <p>Before you create the association, run the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html">create-network-interface</a> command and set <code>--interface-type</code> to <code>trunk</code>. You must also create a network interface for each branch network interface that you want to associate with the trunk network interface.</p>
     */
    postAssociateTrunkInterface(req: operations.POSTAssociateTrunkInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateTrunkInterfaceResponse>;
    /**
     * <p>Associates a CIDR block with your VPC. You can associate a secondary IPv4 CIDR block, an Amazon-provided IPv6 CIDR block, or an IPv6 CIDR block from an IPv6 address pool that you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>). The IPv6 CIDR block size is fixed at /56.</p> <p>You must specify one of the following in the request: an IPv4 CIDR block, an IPv6 pool, or an Amazon-provided IPv6 CIDR block.</p> <p>For more information about associating CIDR blocks with your VPC and applicable restrictions, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#VPC_Sizing">VPC and subnet sizing</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postAssociateVpcCidrBlock(req: operations.POSTAssociateVpcCidrBlockRequest, config?: AxiosRequestConfig): Promise<operations.POSTAssociateVpcCidrBlockResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Links an EC2-Classic instance to a ClassicLink-enabled VPC through one or more of the VPC's security groups. You cannot link an EC2-Classic instance to more than one VPC at a time. You can only link an instance that's in the <code>running</code> state. An instance is automatically unlinked from a VPC when it's stopped - you can link it to the VPC again when you restart it.</p> <p>After you've linked an instance, you cannot change the VPC security groups that are associated with it. To change the security groups, you must first unlink the instance, and then link it again.</p> <p>Linking your instance to a VPC is sometimes referred to as <i>attaching</i> your instance.</p>
     */
    postAttachClassicLinkVpc(req: operations.POSTAttachClassicLinkVpcRequest, config?: AxiosRequestConfig): Promise<operations.POSTAttachClassicLinkVpcResponse>;
    /**
     * Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and the VPC. For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.
     */
    postAttachInternetGateway(req: operations.POSTAttachInternetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTAttachInternetGatewayResponse>;
    /**
     * Attaches a network interface to an instance.
     */
    postAttachNetworkInterface(req: operations.POSTAttachNetworkInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.POSTAttachNetworkInterfaceResponse>;
    /**
     * A trust provider is a third-party entity that creates, maintains, and manages identity information for users and devices. One or more trust providers can be attached to an Amazon Web Services Verified Access instance.
     */
    postAttachVerifiedAccessTrustProvider(req: operations.POSTAttachVerifiedAccessTrustProviderRequest, config?: AxiosRequestConfig): Promise<operations.POSTAttachVerifiedAccessTrustProviderResponse>;
    /**
     * <p>Attaches an EBS volume to a running or stopped instance and exposes it to the instance with the specified device name.</p> <p>Encrypted EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>After you attach an EBS volume, you must make it available. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html">Make an EBS volume available for use</a>.</p> <p>If a volume has an Amazon Web Services Marketplace product code:</p> <ul> <li> <p>The volume can be attached only to a stopped instance.</p> </li> <li> <p>Amazon Web Services Marketplace product codes are copied from the volume to the instance.</p> </li> <li> <p>You must be subscribed to the product.</p> </li> <li> <p>The instance type and operating system of the instance must support the product. For example, you can't detach a volume from a Windows instance and attach it to a Linux instance.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-attaching-volume.html">Attach an Amazon EBS volume to an instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postAttachVolume(req: operations.POSTAttachVolumeRequest, config?: AxiosRequestConfig): Promise<operations.POSTAttachVolumeResponse>;
    /**
     * <p>Attaches a virtual private gateway to a VPC. You can attach one virtual private gateway to one VPC at a time.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
     */
    postAttachVpnGateway(req: operations.POSTAttachVpnGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTAttachVpnGatewayResponse>;
    /**
     * Adds an ingress authorization rule to a Client VPN endpoint. Ingress authorization rules act as firewall rules that grant access to networks. You must configure ingress authorization rules to enable clients to access resources in Amazon Web Services or on-premises networks.
     */
    postAuthorizeClientVpnIngress(req: operations.POSTAuthorizeClientVpnIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAuthorizeClientVpnIngressResponse>;
    /**
     * <p>[VPC only] Adds the specified outbound (egress) rules to a security group for use with a VPC.</p> <p>An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 CIDR address ranges, or to the instances that are associated with the specified source security groups. When specifying an outbound rule for your security group in a VPC, the <code>IpPermissions</code> must include a destination for the traffic.</p> <p>You specify a protocol for each rule (for example, TCP). For the TCP and UDP protocols, you must also specify the destination port or port range. For the ICMP protocol, you must also specify the ICMP type and code. You can use -1 for the type or code to mean all types or all codes.</p> <p>Rule changes are propagated to affected instances as quickly as possible. However, a small delay might occur.</p> <p>For information about VPC security group quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC quotas</a>.</p>
     */
    postAuthorizeSecurityGroupEgress(req: operations.POSTAuthorizeSecurityGroupEgressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAuthorizeSecurityGroupEgressResponse>;
    /**
     * <p>Adds the specified inbound (ingress) rules to a security group.</p> <p>An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 CIDR address range, or from the instances that are associated with the specified destination security groups. When specifying an inbound rule for your security group in a VPC, the <code>IpPermissions</code> must include a source for the traffic.</p> <p>You specify a protocol for each rule (for example, TCP). For TCP and UDP, you must also specify the destination port or port range. For ICMP/ICMPv6, you must also specify the ICMP/ICMPv6 type and code. You can use -1 to mean all types or all codes.</p> <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p> <p>For more information about VPC security group quotas, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC quotas</a>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postAuthorizeSecurityGroupIngress(req: operations.POSTAuthorizeSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTAuthorizeSecurityGroupIngressResponse>;
    /**
     * <p>Bundles an Amazon instance store-backed Windows instance.</p> <p>During bundling, only the root device volume (C:\) is bundled. Data on other instance store volumes is not preserved.</p> <note> <p>This action is not applicable for Linux/Unix instances or Windows instances that are backed by Amazon EBS.</p> </note>
     */
    postBundleInstance(req: operations.POSTBundleInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTBundleInstanceResponse>;
    /**
     * Cancels a bundling operation for an instance store-backed Windows instance.
     */
    postCancelBundleTask(req: operations.POSTCancelBundleTaskRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelBundleTaskResponse>;
    /**
     * <p>Cancels the specified Capacity Reservation, releases the reserved capacity, and changes the Capacity Reservation's state to <code>cancelled</code>.</p> <p>Instances running in the reserved capacity continue running until you stop them. Stopped instances that target the Capacity Reservation can no longer launch. Modify these instances to either target a different Capacity Reservation, launch On-Demand Instance capacity, or run in any open Capacity Reservation that has matching attributes and sufficient capacity.</p>
     */
    postCancelCapacityReservation(req: operations.POSTCancelCapacityReservationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelCapacityReservationResponse>;
    /**
     * <p>Cancels one or more Capacity Reservation Fleets. When you cancel a Capacity Reservation Fleet, the following happens:</p> <ul> <li> <p>The Capacity Reservation Fleet's status changes to <code>cancelled</code>.</p> </li> <li> <p>The individual Capacity Reservations in the Fleet are cancelled. Instances running in the Capacity Reservations at the time of cancelling the Fleet continue to run in shared capacity.</p> </li> <li> <p>The Fleet stops creating new Capacity Reservations.</p> </li> </ul>
     */
    postCancelCapacityReservationFleets(req: operations.POSTCancelCapacityReservationFleetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelCapacityReservationFleetsResponse>;
    /**
     * <p>Cancels an active conversion task. The task can be the import of an instance or volume. The action removes all artifacts of the conversion, including a partially uploaded volume or instance. If the conversion is complete or is in the process of transferring the final disk image, the command fails and returns an exception.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a Virtual Machine Using the Amazon EC2 CLI</a>.</p>
     */
    postCancelConversionTask(req: operations.POSTCancelConversionTaskRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelConversionTaskResponse>;
    /**
     * Cancels an active export task. The request removes all artifacts of the export, including any partially-created Amazon S3 objects. If the export task is complete or is in the process of transferring the final disk image, the command fails and returns an error.
     */
    postCancelExportTask(req: operations.POSTCancelExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelExportTaskResponse>;
    /**
     * Removes your Amazon Web Services account from the launch permissions for the specified AMI. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cancel-sharing-an-AMI.html"> Cancel having an AMI shared with your Amazon Web Services account</a> in the <i>Amazon EC2 User Guide</i>.
     */
    postCancelImageLaunchPermission(req: operations.POSTCancelImageLaunchPermissionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelImageLaunchPermissionResponse>;
    /**
     * Cancels an in-process import virtual machine or import snapshot task.
     */
    postCancelImportTask(req: operations.POSTCancelImportTaskRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelImportTaskResponse>;
    /**
     * <p>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postCancelReservedInstancesListing(req: operations.POSTCancelReservedInstancesListingRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelReservedInstancesListingResponse>;
    /**
     * <p>Cancels the specified Spot Fleet requests.</p> <p>After you cancel a Spot Fleet request, the Spot Fleet launches no new instances.</p> <p>You must also specify whether a canceled Spot Fleet request should terminate its instances. If you choose to terminate the instances, the Spot Fleet request enters the <code>cancelled_terminating</code> state. Otherwise, the Spot Fleet request enters the <code>cancelled_running</code> state and the instances continue to run until they are interrupted or you terminate them manually.</p>
     */
    postCancelSpotFleetRequests(req: operations.POSTCancelSpotFleetRequestsRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelSpotFleetRequestsResponse>;
    /**
     * <p>Cancels one or more Spot Instance requests.</p> <important> <p>Canceling a Spot Instance request does not terminate running Spot Instances associated with the request.</p> </important>
     */
    postCancelSpotInstanceRequests(req: operations.POSTCancelSpotInstanceRequestsRequest, config?: AxiosRequestConfig): Promise<operations.POSTCancelSpotInstanceRequestsResponse>;
    /**
     * Determines whether a product code is associated with an instance. This action can only be used by the owner of the product code. It is useful when a product code owner must verify whether another user's instance is eligible for support.
     */
    postConfirmProductInstance(req: operations.POSTConfirmProductInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTConfirmProductInstanceResponse>;
    /**
     * Copies the specified Amazon FPGA Image (AFI) to the current Region.
     */
    postCopyFpgaImage(req: operations.POSTCopyFpgaImageRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyFpgaImageResponse>;
    /**
     * <p>Initiates the copy of an AMI. You can copy an AMI from one Region to another, or from a Region to an Outpost. You can't copy an AMI from an Outpost to a Region, from one Outpost to another, or within the same Outpost. To copy an AMI to another partition, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html">CreateStoreImageTask</a>.</p> <p>To copy an AMI from one Region to another, specify the source Region using the <b>SourceRegion</b> parameter, and specify the destination Region using its endpoint. Copies of encrypted backing snapshots for the AMI are encrypted. Copies of unencrypted backing snapshots remain unencrypted, unless you set <code>Encrypted</code> during the copy operation. You cannot create an unencrypted copy of an encrypted backing snapshot.</p> <p>To copy an AMI from a Region to an Outpost, specify the source Region using the <b>SourceRegion</b> parameter, and specify the ARN of the destination Outpost using <b>DestinationOutpostArn</b>. Backing snapshots copied to an Outpost are encrypted by default using the default encryption key for the Region, or a different key that you specify in the request using <b>KmsKeyId</b>. Outposts do not support unencrypted snapshots. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami"> Amazon EBS local snapshots on Outposts</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>For more information about the prerequisites and limits when copying an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/CopyingAMIs.html">Copy an AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postCopyImage(req: operations.POSTCopyImageRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopyImageResponse>;
    /**
     * <p>Copies a point-in-time snapshot of an EBS volume and stores it in Amazon S3. You can copy a snapshot within the same Region, from one Region to another, or from a Region to an Outpost. You can't copy a snapshot from an Outpost to a Region, from one Outpost to another, or within the same Outpost.</p> <p>You can use the snapshot to create EBS volumes or Amazon Machine Images (AMIs).</p> <p>When copying snapshots to a Region, copies of encrypted EBS snapshots remain encrypted. Copies of unencrypted snapshots remain unencrypted, unless you enable encryption for the snapshot copy operation. By default, encrypted snapshot copies use the default Key Management Service (KMS) KMS key; however, you can specify a different KMS key. To copy an encrypted snapshot that has been shared from another account, you must have permissions for the KMS key used to encrypt the snapshot.</p> <p>Snapshots copied to an Outpost are encrypted by default using the default encryption key for the Region, or a different key that you specify in the request using <b>KmsKeyId</b>. Outposts do not support unencrypted snapshots. For more information, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshots-outposts.html#ami"> Amazon EBS local snapshots on Outposts</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Snapshots created by copying another snapshot have an arbitrary volume ID that should not be used for any purpose.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html">Copy an Amazon EBS snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCopySnapshot(req: operations.POSTCopySnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCopySnapshotResponse>;
    /**
     * <p>Creates a new Capacity Reservation with the specified attributes.</p> <p>Capacity Reservations enable you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration. This gives you the flexibility to selectively add capacity reservations and still get the Regional RI discounts for that usage. By creating Capacity Reservations, you ensure that you always have access to Amazon EC2 capacity when you need it, for as long as you need it. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">Capacity Reservations</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>Your request to create a Capacity Reservation could fail if Amazon EC2 does not have sufficient capacity to fulfill the request. If your request fails due to Amazon EC2 capacity constraints, either try again at a later time, try in a different Availability Zone, or request a smaller capacity reservation. If your application is flexible across instance types and sizes, try to create a Capacity Reservation with different instance attributes.</p> <p>Your request could also fail if the requested quantity exceeds your On-Demand Instance limit for the selected instance type. If your request fails due to limit constraints, increase your On-Demand Instance limit for the required instance type and try again. For more information about increasing your instance limits, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 Service Quotas</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postCreateCapacityReservation(req: operations.POSTCreateCapacityReservationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCapacityReservationResponse>;
    /**
     * Creates a Capacity Reservation Fleet. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-cr-fleets.html#create-crfleet">Create a Capacity Reservation Fleet</a> in the Amazon EC2 User Guide.
     */
    postCreateCapacityReservationFleet(req: operations.POSTCreateCapacityReservationFleetRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCapacityReservationFleetResponse>;
    /**
     * Creates a carrier gateway. For more information about carrier gateways, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#wavelength-carrier-gateway">Carrier gateways</a> in the <i>Amazon Web Services Wavelength Developer Guide</i>.
     */
    postCreateCarrierGateway(req: operations.POSTCreateCarrierGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCarrierGatewayResponse>;
    /**
     * Creates a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions are terminated.
     */
    postCreateClientVpnEndpoint(req: operations.POSTCreateClientVpnEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateClientVpnEndpointResponse>;
    /**
     * Adds a route to a network to a Client VPN endpoint. Each Client VPN endpoint has a route table that describes the available destination network routes. Each route in the route table specifies the path for traﬃc to speciﬁc resources or networks.
     */
    postCreateClientVpnRoute(req: operations.POSTCreateClientVpnRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateClientVpnRouteResponse>;
    /**
     *  Creates a range of customer-owned IP addresses.
     */
    postCreateCoipCidr(req: operations.POSTCreateCoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCoipCidrResponse>;
    /**
     *  Creates a pool of customer-owned IP (CoIP) addresses.
     */
    postCreateCoipPool(req: operations.POSTCreateCoipPoolRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCoipPoolResponse>;
    /**
     * <p>Provides information to Amazon Web Services about your customer gateway device. The customer gateway device is the appliance at your end of the VPN connection. You must provide the IP address of the customer gateway device’s external interface. The IP address must be static and can be behind a device performing network address translation (NAT).</p> <p>For devices that use Border Gateway Protocol (BGP), you can also provide the device's BGP Autonomous System Number (ASN). You can use an existing ASN assigned to your network. If you don't have an ASN already, you can use a private ASN. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/cgw-options.html">Customer gateway options for your Site-to-Site VPN connection</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p> <p>To create more than one customer gateway with the same VPN type, IP address, and BGP ASN, specify a unique device name for each customer gateway. An identical request returns information about the existing customer gateway; it doesn't create a new customer gateway.</p>
     */
    postCreateCustomerGateway(req: operations.POSTCreateCustomerGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateCustomerGatewayResponse>;
    /**
     * Creates a default subnet with a size <code>/20</code> IPv4 CIDR block in the specified Availability Zone in your default VPC. You can have only one default subnet per Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-subnet">Creating a default subnet</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    postCreateDefaultSubnet(req: operations.POSTCreateDefaultSubnetRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDefaultSubnetResponse>;
    /**
     * <p>Creates a default VPC with a size <code>/16</code> IPv4 CIDR block and a default subnet in each Availability Zone. For more information about the components of a default VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html">Default VPC and default subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>. You cannot specify the components of the default VPC yourself.</p> <p>If you deleted your previous default VPC, you can create a default VPC. You cannot have more than one default VPC per Region.</p> <p>If your account supports EC2-Classic, you cannot use this action to create a default VPC in a Region that supports EC2-Classic. If you want a default VPC in a Region that supports EC2-Classic, see "I really want a default VPC for my existing EC2 account. Is that possible?" in the <a href="http://aws.amazon.com/vpc/faqs/#Default_VPCs">Default VPCs FAQ</a>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postCreateDefaultVpc(req: operations.POSTCreateDefaultVpcRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDefaultVpcResponse>;
    /**
     * <p>Creates a set of DHCP options for your VPC. After creating the set, you must associate it with the VPC, causing all existing and new instances that you launch in the VPC to use this set of DHCP options. The following are the individual DHCP options you can specify. For more information about the options, see <a href="http://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p> <ul> <li> <p> <code>domain-name-servers</code> - The IP addresses of up to four domain name servers, or AmazonProvidedDNS. The default DHCP option set specifies AmazonProvidedDNS. If specifying more than one domain name server, specify the IP addresses in a single parameter, separated by commas. To have your instance receive a custom DNS hostname as specified in <code>domain-name</code>, you must set <code>domain-name-servers</code> to a custom DNS server.</p> </li> <li> <p> <code>domain-name</code> - If you're using AmazonProvidedDNS in <code>us-east-1</code>, specify <code>ec2.internal</code>. If you're using AmazonProvidedDNS in another Region, specify <code>region.compute.internal</code> (for example, <code>ap-northeast-1.compute.internal</code>). Otherwise, specify a domain name (for example, <code>ExampleCompany.com</code>). This value is used to complete unqualified DNS hostnames. <b>Important</b>: Some Linux operating systems accept multiple domain names separated by spaces. However, Windows and other Linux operating systems treat the value as a single domain, which results in unexpected behavior. If your DHCP options set is associated with a VPC that has instances with multiple operating systems, specify only one domain name.</p> </li> <li> <p> <code>ntp-servers</code> - The IP addresses of up to four Network Time Protocol (NTP) servers.</p> </li> <li> <p> <code>netbios-name-servers</code> - The IP addresses of up to four NetBIOS name servers.</p> </li> <li> <p> <code>netbios-node-type</code> - The NetBIOS node type (1, 2, 4, or 8). We recommend that you specify 2 (broadcast and multicast are not currently supported). For more information about these node types, see <a href="http://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p> </li> </ul> <p>Your VPC automatically starts out with a set of DHCP options that includes only a DNS server that we provide (AmazonProvidedDNS). If you create a set of options, and if your VPC has an internet gateway, make sure to set the <code>domain-name-servers</code> option either to <code>AmazonProvidedDNS</code> or to a domain name server of your choice. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP options sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postCreateDhcpOptions(req: operations.POSTCreateDhcpOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateDhcpOptionsResponse>;
    /**
     * [IPv6 only] Creates an egress-only internet gateway for your VPC. An egress-only internet gateway is used to enable outbound communication over IPv6 from instances in your VPC to the internet, and prevents hosts outside of your VPC from initiating an IPv6 connection with your instance.
     */
    postCreateEgressOnlyInternetGateway(req: operations.POSTCreateEgressOnlyInternetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateEgressOnlyInternetGatewayResponse>;
    /**
     * <p>Launches an EC2 Fleet.</p> <p>You can create a single EC2 Fleet that includes multiple launch specifications that vary by instance type, AMI, Availability Zone, or subnet.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html">EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postCreateFleet(req: operations.POSTCreateFleetRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateFleetResponse>;
    /**
     * <p>Creates one or more flow logs to capture information about IP traffic for a specific network interface, subnet, or VPC. </p> <p>Flow log data for a monitored network interface is recorded as flow log records, which are log events consisting of fields that describe the traffic flow. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records">Flow log records</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>When publishing to CloudWatch Logs, flow log records are published to a log group, and each network interface has a unique log stream in the log group. When publishing to Amazon S3, flow log records for all of the monitored network interfaces are published to a single log file object that is stored in the specified bucket.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html">VPC Flow Logs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postCreateFlowLogs(req: operations.POSTCreateFlowLogsRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateFlowLogsResponse>;
    /**
     * <p>Creates an Amazon FPGA Image (AFI) from the specified design checkpoint (DCP).</p> <p>The create operation is asynchronous. To verify that the AFI is ready for use, check the output logs.</p> <p>An AFI contains the FPGA bitstream that is ready to download to an FPGA. You can securely deploy an AFI on multiple FPGA-accelerated instances. For more information, see the <a href="https://github.com/aws/aws-fpga/">Amazon Web Services FPGA Hardware Development Kit</a>.</p>
     */
    postCreateFpgaImage(req: operations.POSTCreateFpgaImageRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateFpgaImageResponse>;
    /**
     * <p>Creates an Amazon EBS-backed AMI from an Amazon EBS-backed instance that is either running or stopped.</p> <p>By default, when Amazon EC2 creates the new AMI, it reboots the instance so that it can take snapshots of the attached volumes while data is at rest, in order to ensure a consistent state. You can set the <code>NoReboot</code> parameter to <code>true</code> in the API request, or use the <code>--no-reboot</code> option in the CLI to prevent Amazon EC2 from shutting down and rebooting the instance.</p> <important> <p>If you choose to bypass the shutdown and reboot process by setting the <code>NoReboot</code> parameter to <code>true</code> in the API request, or by using the <code>--no-reboot</code> option in the CLI, we can't guarantee the file system integrity of the created image.</p> </important> <p>If you customized your instance with instance store volumes or Amazon EBS volumes in addition to the root device volume, the new AMI contains block device mapping information for those volumes. When you launch an instance from this new AMI, the instance automatically launches with those additional volumes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Create an Amazon EBS-backed Linux AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCreateImage(req: operations.POSTCreateImageRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateImageResponse>;
    /**
     * <p>Creates an event window in which scheduled events for the associated Amazon EC2 instances can run.</p> <p>You can define either a set of time ranges or a cron expression when creating the event window, but not both. All event window times are in UTC.</p> <p>You can create up to 200 event windows per Amazon Web Services Region.</p> <p>When you create the event window, targets (instance IDs, Dedicated Host IDs, or tags) are not yet associated with it. To ensure that the event window can be used, you must associate one or more targets with it by using the <a>AssociateInstanceEventWindow</a> API.</p> <important> <p>Event windows are applicable only for scheduled events that stop, reboot, or terminate instances.</p> <p>Event windows are <i>not</i> applicable for:</p> <ul> <li> <p>Expedited scheduled events and network maintenance events. </p> </li> <li> <p>Unscheduled maintenance such as AutoRecovery and unplanned reboots.</p> </li> </ul> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled events</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postCreateInstanceEventWindow(req: operations.POSTCreateInstanceEventWindowRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateInstanceEventWindowResponse>;
    /**
     * <p>Exports a running or stopped instance to an Amazon S3 bucket.</p> <p>For information about the supported operating systems, image formats, and known limitations for the types of instances you can export, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html">Exporting an instance as a VM Using VM Import/Export</a> in the <i>VM Import/Export User Guide</i>.</p>
     */
    postCreateInstanceExportTask(req: operations.POSTCreateInstanceExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateInstanceExportTaskResponse>;
    /**
     * <p>Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach it to a VPC using <a>AttachInternetGateway</a>.</p> <p>For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
     */
    postCreateInternetGateway(req: operations.POSTCreateInternetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateInternetGatewayResponse>;
    /**
     * <p>Create an IPAM. Amazon VPC IP Address Manager (IPAM) is a VPC feature that you can use to automate your IP address management workflows including assigning, tracking, troubleshooting, and auditing IP addresses across Amazon Web Services Regions and accounts throughout your Amazon Web Services Organization.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html">Create an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    postCreateIpam(req: operations.POSTCreateIpamRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateIpamResponse>;
    /**
     * <p>Create an IP address pool for Amazon VPC IP Address Manager (IPAM). In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-top-ipam.html">Create a top-level pool</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    postCreateIpamPool(req: operations.POSTCreateIpamPoolRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateIpamPoolResponse>;
    /**
     * Creates an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
     */
    postCreateIpamResourceDiscovery(req: operations.POSTCreateIpamResourceDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateIpamResourceDiscoveryResponse>;
    /**
     * <p>Create an IPAM scope. In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/add-scope-ipam.html">Add a scope</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
     */
    postCreateIpamScope(req: operations.POSTCreateIpamScopeRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateIpamScopeResponse>;
    /**
     * <p>Creates an ED25519 or 2048-bit RSA key pair with the specified name and in the specified PEM or PPK format. Amazon EC2 stores the public key and displays the private key for you to save to a file. The private key is returned as an unencrypted PEM encoded PKCS#1 private key or an unencrypted PPK formatted private key for use with PuTTY. If a key with the specified name already exists, Amazon EC2 returns an error.</p> <p>The key pair returned to you is available only in the Amazon Web Services Region in which you create it. If you prefer, you can create your own key pair using a third-party tool and upload it to any Region using <a>ImportKeyPair</a>.</p> <p>You can have up to 5,000 key pairs per Amazon Web Services Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCreateKeyPair(req: operations.POSTCreateKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateKeyPairResponse>;
    /**
     * <p>Creates a launch template.</p> <p>A launch template contains the parameters to launch an instance. When you launch an instance using <a>RunInstances</a>, you can specify a launch template instead of providing the launch parameters in the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">Launch an instance from a launch template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>If you want to clone an existing launch template as the basis for creating a new launch template, you can use the Amazon EC2 console. The API, SDKs, and CLI do not support cloning a template. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template-from-existing-launch-template">Create a launch template from an existing launch template</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCreateLaunchTemplate(req: operations.POSTCreateLaunchTemplateRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateLaunchTemplateResponse>;
    /**
     * <p>Creates a new version of a launch template. You can specify an existing version of launch template from which to base the new version.</p> <p>Launch template versions are numbered in the order in which they are created. You cannot specify, change, or replace the numbering of launch template versions.</p> <p>Launch templates are immutable; after you create a launch template, you can't modify it. Instead, you can create a new version of the launch template that includes any changes you require.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#manage-launch-template-versions">Modify a launch template (manage launch template versions)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCreateLaunchTemplateVersion(req: operations.POSTCreateLaunchTemplateVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateLaunchTemplateVersionResponse>;
    /**
     * <p>Creates a static route for the specified local gateway route table. You must specify one of the following targets: </p> <ul> <li> <p> <code>LocalGatewayVirtualInterfaceGroupId</code> </p> </li> <li> <p> <code>NetworkInterfaceId</code> </p> </li> </ul>
     */
    postCreateLocalGatewayRoute(req: operations.POSTCreateLocalGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateLocalGatewayRouteResponse>;
    /**
     *  Creates a local gateway route table.
     */
    postCreateLocalGatewayRouteTable(req: operations.POSTCreateLocalGatewayRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateLocalGatewayRouteTableResponse>;
    /**
     *  Creates a local gateway route table virtual interface group association.
     */
    postCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociation(req: operations.POSTCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResponse>;
    /**
     * Associates the specified VPC with the specified local gateway route table.
     */
    postCreateLocalGatewayRouteTableVpcAssociation(req: operations.POSTCreateLocalGatewayRouteTableVpcAssociationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateLocalGatewayRouteTableVpcAssociationResponse>;
    /**
     * Creates a managed prefix list. You can specify one or more entries for the prefix list. Each entry consists of a CIDR block and an optional description.
     */
    postCreateManagedPrefixList(req: operations.POSTCreateManagedPrefixListRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateManagedPrefixListResponse>;
    /**
     * <p>Creates a NAT gateway in the specified subnet. This action creates a network interface in the specified subnet with a private IP address from the IP address range of the subnet. You can create either a public NAT gateway or a private NAT gateway.</p> <p>With a public NAT gateway, internet-bound traffic from a private subnet can be routed to the NAT gateway, so that instances in a private subnet can connect to the internet.</p> <p>With a private NAT gateway, private communication is routed across VPCs and on-premises networks through a transit gateway or virtual private gateway. Common use cases include running large workloads behind a small pool of allowlisted IPv4 addresses, preserving private IPv4 addresses, and communicating between overlapping networks.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">NAT gateways</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postCreateNatGateway(req: operations.POSTCreateNatGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateNatGatewayResponse>;
    /**
     * <p>Creates a network ACL in a VPC. Network ACLs provide an optional layer of security (in addition to security groups) for the instances in your VPC.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postCreateNetworkAcl(req: operations.POSTCreateNetworkAclRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateNetworkAclResponse>;
    /**
     * <p>Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of ingress rules and a separate set of egress rules.</p> <p>We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules.</p> <p>After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one.</p> <p>For more information about network ACLs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postCreateNetworkAclEntry(req: operations.POSTCreateNetworkAclEntryRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateNetworkAclEntryResponse>;
    /**
     * <p>Creates a Network Access Scope.</p> <p>Amazon Web Services Network Access Analyzer enables cloud networking and cloud operations teams to verify that their networks on Amazon Web Services conform to their network security and governance objectives. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/network-access-analyzer/">Amazon Web Services Network Access Analyzer Guide</a>.</p>
     */
    postCreateNetworkInsightsAccessScope(req: operations.POSTCreateNetworkInsightsAccessScopeRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateNetworkInsightsAccessScopeResponse>;
    /**
     * <p>Creates a path to analyze for reachability.</p> <p>Reachability Analyzer enables you to analyze and debug network reachability between two resources in your virtual private cloud (VPC). For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/reachability/">Reachability Analyzer Guide</a>.</p>
     */
    postCreateNetworkInsightsPath(req: operations.POSTCreateNetworkInsightsPathRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateNetworkInsightsPathResponse>;
    /**
     * <p>Creates a network interface in the specified subnet.</p> <p>The number of IP addresses you can assign to a network interface varies by instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per ENI Per Instance Type</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>For more information about network interfaces, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html">Elastic network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCreateNetworkInterface(req: operations.POSTCreateNetworkInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateNetworkInterfaceResponse>;
    /**
     * <p>Grants an Amazon Web Services-authorized account permission to attach the specified network interface to an instance in their account.</p> <p>You can grant permission to a single Amazon Web Services account only, and only one account at a time.</p>
     */
    postCreateNetworkInterfacePermission(req: operations.POSTCreateNetworkInterfacePermissionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateNetworkInterfacePermissionResponse>;
    /**
     * <p>Creates a placement group in which to launch instances. The strategy of the placement group determines how the instances are organized within the group. </p> <p>A <code>cluster</code> placement group is a logical grouping of instances within a single Availability Zone that benefit from low network latency, high network throughput. A <code>spread</code> placement group places instances on distinct hardware. A <code>partition</code> placement group places groups of instances in different partitions, where instances in one partition do not share the same hardware with instances in another partition.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postCreatePlacementGroup(req: operations.POSTCreatePlacementGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreatePlacementGroupResponse>;
    /**
     * Creates a public IPv4 address pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to Amazon Web Services to manage with IPAM. IPv6 addresses you bring to Amazon Web Services, however, use IPAM pools only. To monitor the status of pool creation, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribePublicIpv4Pools.html">DescribePublicIpv4Pools</a>.
     */
    postCreatePublicIpv4Pool(req: operations.POSTCreatePublicIpv4PoolRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreatePublicIpv4PoolResponse>;
    /**
     * <p>Replaces the EBS-backed root volume for a <code>running</code> instance with a new volume that is restored to the original root volume's launch state, that is restored to a specific snapshot taken from the original root volume, or that is restored from an AMI that has the same key characteristics as that of the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replace-root.html">Replace a root volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCreateReplaceRootVolumeTask(req: operations.POSTCreateReplaceRootVolumeTaskRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateReplaceRootVolumeTaskResponse>;
    /**
     * <p>Creates a listing for Amazon EC2 Standard Reserved Instances to be sold in the Reserved Instance Marketplace. You can submit one Standard Reserved Instance listing at a time. To get a list of your Standard Reserved Instances, you can use the <a>DescribeReservedInstances</a> operation.</p> <note> <p>Only Standard Reserved Instances can be sold in the Reserved Instance Marketplace. Convertible Reserved Instances cannot be sold.</p> </note> <p>The Reserved Instance Marketplace matches sellers who want to resell Standard Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p> <p>To sell your Standard Reserved Instances, you must first register as a seller in the Reserved Instance Marketplace. After completing the registration process, you can create a Reserved Instance Marketplace listing of some or all of your Standard Reserved Instances, and specify the upfront price to receive for them. Your Standard Reserved Instance listings then become available for purchase. To view the details of your Standard Reserved Instance listing, you can use the <a>DescribeReservedInstancesListings</a> operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postCreateReservedInstancesListing(req: operations.POSTCreateReservedInstancesListingRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateReservedInstancesListingResponse>;
    /**
     * <p>Starts a task that restores an AMI from an Amazon S3 object that was previously created by using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateStoreImageTask.html">CreateStoreImageTask</a>.</p> <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using Amazon S3</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using Amazon S3</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postCreateRestoreImageTask(req: operations.POSTCreateRestoreImageTaskRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateRestoreImageTaskResponse>;
    /**
     * <p>Creates a route in a route table within a VPC.</p> <p>You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the resources from the parameter list.</p> <p>When determining how to route traffic, we use the route with the most specific match. For example, traffic is destined for the IPv4 address <code>192.0.2.3</code>, and the route table includes the following two IPv4 routes:</p> <ul> <li> <p> <code>192.0.2.0/24</code> (goes to some target A)</p> </li> <li> <p> <code>192.0.2.0/28</code> (goes to some target B)</p> </li> </ul> <p>Both routes apply to the traffic destined for <code>192.0.2.3</code>. However, the second route in the list covers a smaller number of IP addresses and is therefore more specific, so we use that route to determine where to target the traffic.</p> <p>For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postCreateRoute(req: operations.POSTCreateRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateRouteResponse>;
    /**
     * <p>Creates a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postCreateRouteTable(req: operations.POSTCreateRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateRouteTableResponse>;
    /**
     * <p>Creates a security group.</p> <p>A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 security groups</a> in the <i>Amazon Elastic Compute Cloud User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security groups for your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>When you create a security group, you specify a friendly name of your choice. You can have a security group for use in EC2-Classic with the same name as a security group for use in a VPC. However, you can't have two security groups for use in EC2-Classic with the same name or two security groups for use in a VPC with the same name.</p> <p>You have a default security group for use in EC2-Classic and a default security group for use in your VPC. If you don't specify a security group when you launch an instance, the instance is launched into the appropriate default security group. A default security group includes a default rule that grants instances unrestricted network access to each other.</p> <p>You can add or remove rules from your security groups using <a>AuthorizeSecurityGroupIngress</a>, <a>AuthorizeSecurityGroupEgress</a>, <a>RevokeSecurityGroupIngress</a>, and <a>RevokeSecurityGroupEgress</a>.</p> <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postCreateSecurityGroup(req: operations.POSTCreateSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateSecurityGroupResponse>;
    /**
     * <p>Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use snapshots for backups, to make copies of EBS volumes, and to save data before shutting down an instance.</p> <p>You can create snapshots of volumes in a Region and volumes on an Outpost. If you create a snapshot of a volume in a Region, the snapshot must be stored in the same Region as the volume. If you create a snapshot of a volume on an Outpost, the snapshot can be stored on the same Outpost as the volume, or in the Region for that Outpost.</p> <p>When a snapshot is created, any Amazon Web Services Marketplace product codes that are associated with the source volume are propagated to the snapshot.</p> <p>You can take a snapshot of an attached volume that is in use. However, snapshots only capture data that has been written to your Amazon EBS volume at the time the snapshot command is issued; this might exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the volume long enough to take a snapshot, your snapshot should be complete. However, if you cannot pause all file writes to the volume, you should unmount the volume from within the instance, issue the snapshot command, and then remount the volume to ensure a consistent and complete snapshot. You may remount and use your volume while the snapshot status is <code>pending</code>.</p> <p>When you create a snapshot for an EBS volume that serves as a root device, we recommend that you stop the instance before taking the snapshot.</p> <p>Snapshots that are taken from encrypted volumes are automatically encrypted. Volumes that are created from encrypted snapshots are also automatically encrypted. Your encrypted volumes and any associated snapshots always remain protected.</p> <p>You can tag your snapshots during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2 resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html">Amazon Elastic Block Store</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCreateSnapshot(req: operations.POSTCreateSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateSnapshotResponse>;
    /**
     * <p>Creates crash-consistent snapshots of multiple EBS volumes and stores the data in S3. Volumes are chosen by specifying an instance. Any attached volumes will produce one snapshot each that is crash-consistent across the instance.</p> <p>You can include all of the volumes currently attached to the instance, or you can exclude the root volume or specific data (non-root) volumes from the multi-volume snapshot set.</p> <p>You can create multi-volume snapshots of instances in a Region and instances on an Outpost. If you create snapshots from an instance in a Region, the snapshots must be stored in the same Region as the instance. If you create snapshots from an instance on an Outpost, the snapshots can be stored on the same Outpost as the instance, or in the Region for that Outpost.</p>
     */
    postCreateSnapshots(req: operations.POSTCreateSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateSnapshotsResponse>;
    /**
     * Creates a data feed for Spot Instances, enabling you to view Spot Instance usage logs. You can create one data feed per Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot Instance data feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
     */
    postCreateSpotDatafeedSubscription(req: operations.POSTCreateSpotDatafeedSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateSpotDatafeedSubscriptionResponse>;
    /**
     * <p>Stores an AMI as a single object in an Amazon S3 bucket.</p> <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using Amazon S3</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using Amazon S3</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postCreateStoreImageTask(req: operations.POSTCreateStoreImageTaskRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateStoreImageTaskResponse>;
    /**
     * <p>Creates a subnet in the specified VPC. For an IPv4 only subnet, specify an IPv4 CIDR block. If the VPC has an IPv6 CIDR block, you can create an IPv6 only subnet or a dual stack subnet instead. For an IPv6 only subnet, specify an IPv6 CIDR block. For a dual stack subnet, specify both an IPv4 CIDR block and an IPv6 CIDR block.</p> <p>A subnet CIDR block must not overlap the CIDR block of an existing subnet in the VPC. After you create a subnet, you can't change its CIDR block.</p> <p>The allowed size for an IPv4 subnet is between a /28 netmask (16 IP addresses) and a /16 netmask (65,536 IP addresses). Amazon Web Services reserves both the first four and the last IPv4 address in each subnet's CIDR block. They're not available for your use.</p> <p>If you've associated an IPv6 CIDR block with your VPC, you can associate an IPv6 CIDR block with a subnet when you create it. The allowed block size for an IPv6 subnet is a /64 netmask.</p> <p>If you add more than one subnet to a VPC, they're set up in a star topology with a logical router in the middle.</p> <p>When you stop an instance in a subnet, it retains its private IPv4 address. It's therefore possible to have a subnet with no running instances (they're all stopped), but no remaining IP addresses available.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html">Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postCreateSubnet(req: operations.POSTCreateSubnetRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateSubnetResponse>;
    /**
     * Creates a subnet CIDR reservation. For information about subnet CIDR reservations, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/subnet-cidr-reservation.html">Subnet CIDR reservations</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    postCreateSubnetCidrReservation(req: operations.POSTCreateSubnetCidrReservationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateSubnetCidrReservationResponse>;
    /**
     * <p>Adds or overwrites only the specified tags for the specified Amazon EC2 resource or resources. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique per resource.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2 resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. For more information about creating IAM policies that control users' access to resources based on tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-iam-actions-resources.html">Supported resource-level permissions for Amazon EC2 API actions</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCreateTags(req: operations.POSTCreateTagsRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTagsResponse>;
    /**
     * <p>Creates a Traffic Mirror filter.</p> <p>A Traffic Mirror filter is a set of rules that defines the traffic to mirror.</p> <p>By default, no traffic is mirrored. To mirror traffic, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilterRule.htm">CreateTrafficMirrorFilterRule</a> to add Traffic Mirror rules to the filter. The rules you add define what traffic gets mirrored. You can also use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterNetworkServices.html">ModifyTrafficMirrorFilterNetworkServices</a> to mirror supported network services.</p>
     */
    postCreateTrafficMirrorFilter(req: operations.POSTCreateTrafficMirrorFilterRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTrafficMirrorFilterResponse>;
    /**
     * <p>Creates a Traffic Mirror filter rule.</p> <p>A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.</p> <p>You need the Traffic Mirror filter ID when you create the rule.</p>
     */
    postCreateTrafficMirrorFilterRule(req: operations.POSTCreateTrafficMirrorFilterRuleRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTrafficMirrorFilterRuleResponse>;
    /**
     * <p>Creates a Traffic Mirror session.</p> <p>A Traffic Mirror session actively copies packets from a Traffic Mirror source to a Traffic Mirror target. Create a filter, and then assign it to the session to define a subset of the traffic to mirror, for example all TCP traffic.</p> <p>The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in a different VPC connected via VPC peering or a transit gateway. </p> <p>By default, no traffic is mirrored. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilter.htm">CreateTrafficMirrorFilter</a> to create filter rules that specify the traffic to mirror.</p>
     */
    postCreateTrafficMirrorSession(req: operations.POSTCreateTrafficMirrorSessionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTrafficMirrorSessionResponse>;
    /**
     * <p>Creates a target for your Traffic Mirror session.</p> <p>A Traffic Mirror target is the destination for mirrored traffic. The Traffic Mirror source and the Traffic Mirror target (monitoring appliances) can be in the same VPC, or in different VPCs connected via VPC peering or a transit gateway.</p> <p>A Traffic Mirror target can be a network interface, a Network Load Balancer, or a Gateway Load Balancer endpoint.</p> <p>To use the target in a Traffic Mirror session, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorSession.htm">CreateTrafficMirrorSession</a>.</p>
     */
    postCreateTrafficMirrorTarget(req: operations.POSTCreateTrafficMirrorTargetRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTrafficMirrorTargetResponse>;
    /**
     * <p>Creates a transit gateway.</p> <p>You can use a transit gateway to interconnect your virtual private clouds (VPC) and on-premises networks. After the transit gateway enters the <code>available</code> state, you can attach your VPCs and VPN connections to the transit gateway.</p> <p>To attach your VPCs, use <a>CreateTransitGatewayVpcAttachment</a>.</p> <p>To attach a VPN connection, use <a>CreateCustomerGateway</a> to create a customer gateway and specify the ID of the customer gateway and the ID of the transit gateway in a call to <a>CreateVpnConnection</a>.</p> <p>When you create a transit gateway, we create a default transit gateway route table and use it as the default association route table and the default propagation route table. You can use <a>CreateTransitGatewayRouteTable</a> to create additional transit gateway route tables. If you disable automatic route propagation, we do not create a default transit gateway route table. You can use <a>EnableTransitGatewayRouteTablePropagation</a> to propagate routes from a resource attachment to a transit gateway route table. If you disable automatic associations, you can use <a>AssociateTransitGatewayRouteTable</a> to associate a resource attachment with a transit gateway route table.</p>
     */
    postCreateTransitGateway(req: operations.POSTCreateTransitGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayResponse>;
    /**
     * <p>Creates a Connect attachment from a specified transit gateway attachment. A Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a transit gateway and an appliance.</p> <p>A Connect attachment uses an existing VPC or Amazon Web Services Direct Connect attachment as the underlying transport mechanism.</p>
     */
    postCreateTransitGatewayConnect(req: operations.POSTCreateTransitGatewayConnectRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayConnectResponse>;
    /**
     * <p>Creates a Connect peer for a specified transit gateway Connect attachment between a transit gateway and an appliance.</p> <p>The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html#tgw-connect-peer">Connect peers</a> in the <i>Transit Gateways Guide</i>.</p>
     */
    postCreateTransitGatewayConnectPeer(req: operations.POSTCreateTransitGatewayConnectPeerRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayConnectPeerResponse>;
    /**
     * <p>Creates a multicast domain using the specified transit gateway.</p> <p>The transit gateway must be in the available state before you create a domain. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGateways.html">DescribeTransitGateways</a> to see the state of transit gateway.</p>
     */
    postCreateTransitGatewayMulticastDomain(req: operations.POSTCreateTransitGatewayMulticastDomainRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayMulticastDomainResponse>;
    /**
     * <p>Requests a transit gateway peering attachment between the specified transit gateway (requester) and a peer transit gateway (accepter). The peer transit gateway can be in your account or a different Amazon Web Services account.</p> <p>After you create the peering attachment, the owner of the accepter transit gateway must accept the attachment request.</p>
     */
    postCreateTransitGatewayPeeringAttachment(req: operations.POSTCreateTransitGatewayPeeringAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayPeeringAttachmentResponse>;
    /**
     * Creates a transit gateway policy table.
     */
    postCreateTransitGatewayPolicyTable(req: operations.POSTCreateTransitGatewayPolicyTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayPolicyTableResponse>;
    /**
     * Creates a reference (route) to a prefix list in a specified transit gateway route table.
     */
    postCreateTransitGatewayPrefixListReference(req: operations.POSTCreateTransitGatewayPrefixListReferenceRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayPrefixListReferenceResponse>;
    /**
     * Creates a static route for the specified transit gateway route table.
     */
    postCreateTransitGatewayRoute(req: operations.POSTCreateTransitGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayRouteResponse>;
    /**
     * Creates a route table for the specified transit gateway.
     */
    postCreateTransitGatewayRouteTable(req: operations.POSTCreateTransitGatewayRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayRouteTableResponse>;
    /**
     * Advertises a new transit gateway route table.
     */
    postCreateTransitGatewayRouteTableAnnouncement(req: operations.POSTCreateTransitGatewayRouteTableAnnouncementRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayRouteTableAnnouncementResponse>;
    /**
     * <p>Attaches the specified VPC to the specified transit gateway.</p> <p>If you attach a VPC with a CIDR range that overlaps the CIDR range of a VPC that is already attached, the new VPC CIDR range is not propagated to the default propagation route table.</p> <p>To send VPC traffic to an attached transit gateway, add a route to the VPC route table using <a>CreateRoute</a>.</p>
     */
    postCreateTransitGatewayVpcAttachment(req: operations.POSTCreateTransitGatewayVpcAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTransitGatewayVpcAttachmentResponse>;
    /**
     * An Amazon Web Services Verified Access endpoint is where you define your application along with an optional endpoint-level access policy.
     */
    postCreateVerifiedAccessEndpoint(req: operations.POSTCreateVerifiedAccessEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVerifiedAccessEndpointResponse>;
    /**
     * An Amazon Web Services Verified Access group is a collection of Amazon Web Services Verified Access endpoints who's associated applications have similar security requirements. Each instance within an Amazon Web Services Verified Access group shares an Amazon Web Services Verified Access policy. For example, you can group all Amazon Web Services Verified Access instances associated with “sales” applications together and use one common Amazon Web Services Verified Access policy.
     */
    postCreateVerifiedAccessGroup(req: operations.POSTCreateVerifiedAccessGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVerifiedAccessGroupResponse>;
    /**
     * An Amazon Web Services Verified Access instance is a regional entity that evaluates application requests and grants access only when your security requirements are met.
     */
    postCreateVerifiedAccessInstance(req: operations.POSTCreateVerifiedAccessInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVerifiedAccessInstanceResponse>;
    /**
     * A trust provider is a third-party entity that creates, maintains, and manages identity information for users and devices. When an application request is made, the identity information sent by the trust provider will be evaluated by Amazon Web Services Verified Access, before allowing or denying the application request.
     */
    postCreateVerifiedAccessTrustProvider(req: operations.POSTCreateVerifiedAccessTrustProviderRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVerifiedAccessTrustProviderResponse>;
    /**
     * <p>Creates an EBS volume that can be attached to an instance in the same Availability Zone.</p> <p>You can create a new empty volume or restore a volume from an EBS snapshot. Any Amazon Web Services Marketplace product codes from the snapshot are propagated to the volume.</p> <p>You can create encrypted volumes. Encrypted volumes must be attached to instances that support Amazon EBS encryption. Volumes that are created from encrypted snapshots are also automatically encrypted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You can tag your volumes during creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2 resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-volume.html">Create an Amazon EBS volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCreateVolume(req: operations.POSTCreateVolumeRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVolumeResponse>;
    /**
     * <p>Creates a VPC with the specified CIDR blocks. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/configure-your-vpc.html#vpc-cidr-blocks">VPC CIDR blocks</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>You can optionally request an IPv6 CIDR block for the VPC. You can request an Amazon-provided IPv6 CIDR block from Amazon's pool of IPv6 addresses, or an IPv6 CIDR block from an IPv6 address pool that you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>).</p> <p>By default, each instance that you launch in the VPC has the default DHCP options, which include only a default DNS server that we provide (AmazonProvidedDNS). For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP option sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>You can specify the instance tenancy value for the VPC when you create it. You can't change this value for the VPC after you create it. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postCreateVpc(req: operations.POSTCreateVpcRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVpcResponse>;
    /**
     * Creates a VPC endpoint for a specified service. An endpoint enables you to create a private connection between your VPC and the service. The service may be provided by Amazon Web Services, an Amazon Web Services Marketplace Partner, or another Amazon Web Services account. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/">Amazon Web Services PrivateLink Guide</a>.
     */
    postCreateVpcEndpoint(req: operations.POSTCreateVpcEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVpcEndpointResponse>;
    /**
     * <p>Creates a connection notification for a specified VPC endpoint or VPC endpoint service. A connection notification notifies you of specific endpoint events. You must create an SNS topic to receive notifications. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Create a Topic</a> in the <i>Amazon Simple Notification Service Developer Guide</i>.</p> <p>You can create a connection notification for interface endpoints only.</p>
     */
    postCreateVpcEndpointConnectionNotification(req: operations.POSTCreateVpcEndpointConnectionNotificationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVpcEndpointConnectionNotificationResponse>;
    /**
     * <p>Creates a VPC endpoint service to which service consumers (Amazon Web Services accounts, users, and IAM roles) can connect.</p> <p>Before you create an endpoint service, you must create one of the following for your service:</p> <ul> <li> <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/">Network Load Balancer</a>. Service consumers connect to your service using an interface endpoint.</p> </li> <li> <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/">Gateway Load Balancer</a>. Service consumers connect to your service using a Gateway Load Balancer endpoint.</p> </li> </ul> <p>If you set the private DNS name, you must prove that you own the private DNS domain name.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/">Amazon Web Services PrivateLink Guide</a>.</p>
     */
    postCreateVpcEndpointServiceConfiguration(req: operations.POSTCreateVpcEndpointServiceConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVpcEndpointServiceConfigurationResponse>;
    /**
     * <p>Requests a VPC peering connection between two VPCs: a requester VPC that you own and an accepter VPC with which to create the connection. The accepter VPC can belong to another Amazon Web Services account and can be in a different Region to the requester VPC. The requester VPC and accepter VPC cannot have overlapping CIDR blocks.</p> <note> <p>Limitations and rules apply to a VPC peering connection. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html#vpc-peering-limitations">limitations</a> section in the <i>VPC Peering Guide</i>.</p> </note> <p>The owner of the accepter VPC must accept the peering request to activate the peering connection. The VPC peering connection request expires after 7 days, after which it cannot be accepted or rejected.</p> <p>If you create a VPC peering connection request between VPCs with overlapping CIDR blocks, the VPC peering connection has a status of <code>failed</code>.</p>
     */
    postCreateVpcPeeringConnection(req: operations.POSTCreateVpcPeeringConnectionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVpcPeeringConnectionResponse>;
    /**
     * <p>Creates a VPN connection between an existing virtual private gateway or transit gateway and a customer gateway. The supported connection type is <code>ipsec.1</code>.</p> <p>The response includes information that you need to give to your network administrator to configure your customer gateway.</p> <important> <p>We strongly recommend that you use HTTPS when calling this operation because the response contains sensitive cryptographic information for configuring your customer gateway device.</p> </important> <p>If you decide to shut down your VPN connection for any reason and later create a new VPN connection, you must reconfigure your customer gateway with the new information returned from this call.</p> <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
     */
    postCreateVpnConnection(req: operations.POSTCreateVpnConnectionRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVpnConnectionResponse>;
    /**
     * <p>Creates a static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
     */
    postCreateVpnConnectionRoute(req: operations.POSTCreateVpnConnectionRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVpnConnectionRouteResponse>;
    /**
     * <p>Creates a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
     */
    postCreateVpnGateway(req: operations.POSTCreateVpnGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateVpnGatewayResponse>;
    /**
     * <p>Deletes a carrier gateway.</p> <important> <p>If you do not delete the route that contains the carrier gateway as the Target, the route is a blackhole route. For information about how to delete a route, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html">DeleteRoute</a>.</p> </important>
     */
    postDeleteCarrierGateway(req: operations.POSTDeleteCarrierGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteCarrierGatewayResponse>;
    /**
     * Deletes the specified Client VPN endpoint. You must disassociate all target networks before you can delete a Client VPN endpoint.
     */
    postDeleteClientVpnEndpoint(req: operations.POSTDeleteClientVpnEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteClientVpnEndpointResponse>;
    /**
     * Deletes a route from a Client VPN endpoint. You can only delete routes that you manually added using the <b>CreateClientVpnRoute</b> action. You cannot delete routes that were automatically added when associating a subnet. To remove routes that have been automatically added, disassociate the target subnet from the Client VPN endpoint.
     */
    postDeleteClientVpnRoute(req: operations.POSTDeleteClientVpnRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteClientVpnRouteResponse>;
    /**
     *  Deletes a range of customer-owned IP addresses.
     */
    postDeleteCoipCidr(req: operations.POSTDeleteCoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteCoipCidrResponse>;
    /**
     * Deletes a pool of customer-owned IP (CoIP) addresses.
     */
    postDeleteCoipPool(req: operations.POSTDeleteCoipPoolRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteCoipPoolResponse>;
    /**
     * Deletes the specified customer gateway. You must delete the VPN connection before you can delete the customer gateway.
     */
    postDeleteCustomerGateway(req: operations.POSTDeleteCustomerGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteCustomerGatewayResponse>;
    /**
     * Deletes the specified set of DHCP options. You must disassociate the set of DHCP options before you can delete it. You can disassociate the set of DHCP options by associating either a new set of options or the default set of options with the VPC.
     */
    postDeleteDhcpOptions(req: operations.POSTDeleteDhcpOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteDhcpOptionsResponse>;
    /**
     * Deletes an egress-only internet gateway.
     */
    postDeleteEgressOnlyInternetGateway(req: operations.POSTDeleteEgressOnlyInternetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteEgressOnlyInternetGatewayResponse>;
    /**
     * <p>Deletes the specified EC2 Fleets.</p> <p>After you delete an EC2 Fleet, it launches no new instances.</p> <p>You must also specify whether a deleted EC2 Fleet should terminate its instances. If you choose to terminate the instances, the EC2 Fleet enters the <code>deleted_terminating</code> state. Otherwise, the EC2 Fleet enters the <code>deleted_running</code> state, and the instances continue to run until they are interrupted or you terminate them manually.</p> <p>For <code>instant</code> fleets, EC2 Fleet must terminate the instances when the fleet is deleted. A deleted <code>instant</code> fleet with running instances is not supported.</p> <p class="title"> <b>Restrictions</b> </p> <ul> <li> <p>You can delete up to 25 <code>instant</code> fleets in a single request. If you exceed this number, no <code>instant</code> fleets are deleted and an error is returned. There is no restriction on the number of fleets of type <code>maintain</code> or <code>request</code> that can be deleted in a single request.</p> </li> <li> <p>Up to 1000 instances can be terminated in a single request to delete <code>instant</code> fleets.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#delete-fleet">Delete an EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDeleteFleets(req: operations.POSTDeleteFleetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteFleetsResponse>;
    /**
     * Deletes one or more flow logs.
     */
    postDeleteFlowLogs(req: operations.POSTDeleteFlowLogsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteFlowLogsResponse>;
    /**
     * Deletes the specified Amazon FPGA Image (AFI).
     */
    postDeleteFpgaImage(req: operations.POSTDeleteFpgaImageRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteFpgaImageResponse>;
    /**
     * <p>Deletes the specified event window.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled events</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDeleteInstanceEventWindow(req: operations.POSTDeleteInstanceEventWindowRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteInstanceEventWindowResponse>;
    /**
     * Deletes the specified internet gateway. You must detach the internet gateway from the VPC before you can delete it.
     */
    postDeleteInternetGateway(req: operations.POSTDeleteInternetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteInternetGatewayResponse>;
    /**
     * <p>Delete an IPAM. Deleting an IPAM removes all monitored data associated with the IPAM including the historical data for CIDRs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/delete-ipam.html">Delete an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    postDeleteIpam(req: operations.POSTDeleteIpamRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteIpamResponse>;
    /**
     * <p>Delete an IPAM pool.</p> <note> <p>You cannot delete an IPAM pool if there are allocations in it or CIDRs provisioned to it. To release allocations, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseIpamPoolAllocation.html">ReleaseIpamPoolAllocation</a>. To deprovision pool CIDRs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeprovisionIpamPoolCidr.html">DeprovisionIpamPoolCidr</a>.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/delete-pool-ipam.html">Delete a pool</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    postDeleteIpamPool(req: operations.POSTDeleteIpamPoolRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteIpamPoolResponse>;
    /**
     * Deletes an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
     */
    postDeleteIpamResourceDiscovery(req: operations.POSTDeleteIpamResourceDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteIpamResourceDiscoveryResponse>;
    /**
     * <p>Delete the scope for an IPAM. You cannot delete the default scopes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/delete-scope-ipam.html">Delete a scope</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    postDeleteIpamScope(req: operations.POSTDeleteIpamScopeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteIpamScopeResponse>;
    /**
     * Deletes the specified key pair, by removing the public key from Amazon EC2.
     */
    postDeleteKeyPair(req: operations.POSTDeleteKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteKeyPairResponse>;
    /**
     * Deletes a launch template. Deleting a launch template deletes all of its versions.
     */
    postDeleteLaunchTemplate(req: operations.POSTDeleteLaunchTemplateRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteLaunchTemplateResponse>;
    /**
     * Deletes one or more versions of a launch template. You cannot delete the default version of a launch template; you must first assign a different version as the default. If the default version is the only version for the launch template, you must delete the entire launch template using <a>DeleteLaunchTemplate</a>.
     */
    postDeleteLaunchTemplateVersions(req: operations.POSTDeleteLaunchTemplateVersionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteLaunchTemplateVersionsResponse>;
    /**
     * Deletes the specified route from the specified local gateway route table.
     */
    postDeleteLocalGatewayRoute(req: operations.POSTDeleteLocalGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteLocalGatewayRouteResponse>;
    /**
     *  Deletes a local gateway route table.
     */
    postDeleteLocalGatewayRouteTable(req: operations.POSTDeleteLocalGatewayRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteLocalGatewayRouteTableResponse>;
    /**
     *  Deletes a local gateway route table virtual interface group association.
     */
    postDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(req: operations.POSTDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationResponse>;
    /**
     * Deletes the specified association between a VPC and local gateway route table.
     */
    postDeleteLocalGatewayRouteTableVpcAssociation(req: operations.POSTDeleteLocalGatewayRouteTableVpcAssociationRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteLocalGatewayRouteTableVpcAssociationResponse>;
    /**
     * Deletes the specified managed prefix list. You must first remove all references to the prefix list in your resources.
     */
    postDeleteManagedPrefixList(req: operations.POSTDeleteManagedPrefixListRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteManagedPrefixListResponse>;
    /**
     * Deletes the specified NAT gateway. Deleting a public NAT gateway disassociates its Elastic IP address, but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway routes in your route tables.
     */
    postDeleteNatGateway(req: operations.POSTDeleteNatGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteNatGatewayResponse>;
    /**
     * Deletes the specified network ACL. You can't delete the ACL if it's associated with any subnets. You can't delete the default network ACL.
     */
    postDeleteNetworkAcl(req: operations.POSTDeleteNetworkAclRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteNetworkAclResponse>;
    /**
     * Deletes the specified ingress or egress entry (rule) from the specified network ACL.
     */
    postDeleteNetworkAclEntry(req: operations.POSTDeleteNetworkAclEntryRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteNetworkAclEntryResponse>;
    /**
     * Deletes the specified Network Access Scope.
     */
    postDeleteNetworkInsightsAccessScope(req: operations.POSTDeleteNetworkInsightsAccessScopeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteNetworkInsightsAccessScopeResponse>;
    /**
     * Deletes the specified Network Access Scope analysis.
     */
    postDeleteNetworkInsightsAccessScopeAnalysis(req: operations.POSTDeleteNetworkInsightsAccessScopeAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteNetworkInsightsAccessScopeAnalysisResponse>;
    /**
     * Deletes the specified network insights analysis.
     */
    postDeleteNetworkInsightsAnalysis(req: operations.POSTDeleteNetworkInsightsAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteNetworkInsightsAnalysisResponse>;
    /**
     * Deletes the specified path.
     */
    postDeleteNetworkInsightsPath(req: operations.POSTDeleteNetworkInsightsPathRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteNetworkInsightsPathResponse>;
    /**
     * Deletes the specified network interface. You must detach the network interface before you can delete it.
     */
    postDeleteNetworkInterface(req: operations.POSTDeleteNetworkInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteNetworkInterfaceResponse>;
    /**
     * Deletes a permission for a network interface. By default, you cannot delete the permission if the account for which you're removing the permission has attached the network interface to an instance. However, you can force delete the permission, regardless of any attachment.
     */
    postDeleteNetworkInterfacePermission(req: operations.POSTDeleteNetworkInterfacePermissionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteNetworkInterfacePermissionResponse>;
    /**
     * Deletes the specified placement group. You must terminate all instances in the placement group before you can delete the placement group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide</i>.
     */
    postDeletePlacementGroup(req: operations.POSTDeletePlacementGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeletePlacementGroupResponse>;
    /**
     * Delete a public IPv4 pool. A public IPv4 pool is an EC2 IP address pool required for the public IPv4 CIDRs that you own and bring to Amazon Web Services to manage with IPAM. IPv6 addresses you bring to Amazon Web Services, however, use IPAM pools only.
     */
    postDeletePublicIpv4Pool(req: operations.POSTDeletePublicIpv4PoolRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeletePublicIpv4PoolResponse>;
    /**
     * Deletes the queued purchases for the specified Reserved Instances.
     */
    postDeleteQueuedReservedInstances(req: operations.POSTDeleteQueuedReservedInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteQueuedReservedInstancesResponse>;
    /**
     * Deletes the specified route from the specified route table.
     */
    postDeleteRoute(req: operations.POSTDeleteRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteRouteResponse>;
    /**
     * Deletes the specified route table. You must disassociate the route table from any subnets before you can delete it. You can't delete the main route table.
     */
    postDeleteRouteTable(req: operations.POSTDeleteRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteRouteTableResponse>;
    /**
     * <p>Deletes a security group.</p> <p>If you attempt to delete a security group that is associated with an instance, or is referenced by another security group, the operation fails with <code>InvalidGroup.InUse</code> in EC2-Classic or <code>DependencyViolation</code> in EC2-VPC.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postDeleteSecurityGroup(req: operations.POSTDeleteSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteSecurityGroupResponse>;
    /**
     * <p>Deletes the specified snapshot.</p> <p>When you make periodic snapshots of a volume, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the volume.</p> <p>You cannot delete a snapshot of the root device of an EBS volume used by a registered AMI. You must first de-register the AMI before you can delete the snapshot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-snapshot.html">Delete an Amazon EBS snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDeleteSnapshot(req: operations.POSTDeleteSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteSnapshotResponse>;
    /**
     * Deletes the data feed for Spot Instances.
     */
    postDeleteSpotDatafeedSubscription(req: operations.POSTDeleteSpotDatafeedSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteSpotDatafeedSubscriptionResponse>;
    /**
     * Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.
     */
    postDeleteSubnet(req: operations.POSTDeleteSubnetRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteSubnetResponse>;
    /**
     * Deletes a subnet CIDR reservation.
     */
    postDeleteSubnetCidrReservation(req: operations.POSTDeleteSubnetCidrReservationRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteSubnetCidrReservationResponse>;
    /**
     * <p>Deletes the specified set of tags from the specified set of resources.</p> <p>To list the current tags, use <a>DescribeTags</a>. For more information about tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2 resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDeleteTags(req: operations.POSTDeleteTagsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTagsResponse>;
    /**
     * <p>Deletes the specified Traffic Mirror filter.</p> <p>You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.</p>
     */
    postDeleteTrafficMirrorFilter(req: operations.POSTDeleteTrafficMirrorFilterRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTrafficMirrorFilterResponse>;
    /**
     * Deletes the specified Traffic Mirror rule.
     */
    postDeleteTrafficMirrorFilterRule(req: operations.POSTDeleteTrafficMirrorFilterRuleRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTrafficMirrorFilterRuleResponse>;
    /**
     * Deletes the specified Traffic Mirror session.
     */
    postDeleteTrafficMirrorSession(req: operations.POSTDeleteTrafficMirrorSessionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTrafficMirrorSessionResponse>;
    /**
     * <p>Deletes the specified Traffic Mirror target.</p> <p>You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.</p>
     */
    postDeleteTrafficMirrorTarget(req: operations.POSTDeleteTrafficMirrorTargetRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTrafficMirrorTargetResponse>;
    /**
     * Deletes the specified transit gateway.
     */
    postDeleteTransitGateway(req: operations.POSTDeleteTransitGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayResponse>;
    /**
     * Deletes the specified Connect attachment. You must first delete any Connect peers for the attachment.
     */
    postDeleteTransitGatewayConnect(req: operations.POSTDeleteTransitGatewayConnectRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayConnectResponse>;
    /**
     * Deletes the specified Connect peer.
     */
    postDeleteTransitGatewayConnectPeer(req: operations.POSTDeleteTransitGatewayConnectPeerRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayConnectPeerResponse>;
    /**
     * Deletes the specified transit gateway multicast domain.
     */
    postDeleteTransitGatewayMulticastDomain(req: operations.POSTDeleteTransitGatewayMulticastDomainRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayMulticastDomainResponse>;
    /**
     * Deletes a transit gateway peering attachment.
     */
    postDeleteTransitGatewayPeeringAttachment(req: operations.POSTDeleteTransitGatewayPeeringAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayPeeringAttachmentResponse>;
    /**
     * Deletes the specified transit gateway policy table.
     */
    postDeleteTransitGatewayPolicyTable(req: operations.POSTDeleteTransitGatewayPolicyTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayPolicyTableResponse>;
    /**
     * Deletes a reference (route) to a prefix list in a specified transit gateway route table.
     */
    postDeleteTransitGatewayPrefixListReference(req: operations.POSTDeleteTransitGatewayPrefixListReferenceRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayPrefixListReferenceResponse>;
    /**
     * Deletes the specified route from the specified transit gateway route table.
     */
    postDeleteTransitGatewayRoute(req: operations.POSTDeleteTransitGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayRouteResponse>;
    /**
     * Deletes the specified transit gateway route table. You must disassociate the route table from any transit gateway route tables before you can delete it.
     */
    postDeleteTransitGatewayRouteTable(req: operations.POSTDeleteTransitGatewayRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayRouteTableResponse>;
    /**
     * Advertises to the transit gateway that a transit gateway route table is deleted.
     */
    postDeleteTransitGatewayRouteTableAnnouncement(req: operations.POSTDeleteTransitGatewayRouteTableAnnouncementRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayRouteTableAnnouncementResponse>;
    /**
     * Deletes the specified VPC attachment.
     */
    postDeleteTransitGatewayVpcAttachment(req: operations.POSTDeleteTransitGatewayVpcAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTransitGatewayVpcAttachmentResponse>;
    /**
     * Delete an Amazon Web Services Verified Access endpoint.
     */
    postDeleteVerifiedAccessEndpoint(req: operations.POSTDeleteVerifiedAccessEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVerifiedAccessEndpointResponse>;
    /**
     * Delete an Amazon Web Services Verified Access group.
     */
    postDeleteVerifiedAccessGroup(req: operations.POSTDeleteVerifiedAccessGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVerifiedAccessGroupResponse>;
    /**
     * Delete an Amazon Web Services Verified Access instance.
     */
    postDeleteVerifiedAccessInstance(req: operations.POSTDeleteVerifiedAccessInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVerifiedAccessInstanceResponse>;
    /**
     * Delete an Amazon Web Services Verified Access trust provider.
     */
    postDeleteVerifiedAccessTrustProvider(req: operations.POSTDeleteVerifiedAccessTrustProviderRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVerifiedAccessTrustProviderResponse>;
    /**
     * <p>Deletes the specified EBS volume. The volume must be in the <code>available</code> state (not attached to an instance).</p> <p>The volume can remain in the <code>deleting</code> state for several minutes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-deleting-volume.html">Delete an Amazon EBS volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDeleteVolume(req: operations.POSTDeleteVolumeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVolumeResponse>;
    /**
     * Deletes the specified VPC. You must detach or delete all gateways and resources that are associated with the VPC before you can delete it. For example, you must terminate all instances running in the VPC, delete all security groups associated with the VPC (except the default one), delete all route tables associated with the VPC (except the default one), and so on.
     */
    postDeleteVpc(req: operations.POSTDeleteVpcRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVpcResponse>;
    /**
     * Deletes the specified VPC endpoint connection notifications.
     */
    postDeleteVpcEndpointConnectionNotifications(req: operations.POSTDeleteVpcEndpointConnectionNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVpcEndpointConnectionNotificationsResponse>;
    /**
     * Deletes the specified VPC endpoint service configurations. Before you can delete an endpoint service configuration, you must reject any <code>Available</code> or <code>PendingAcceptance</code> interface endpoint connections that are attached to the service.
     */
    postDeleteVpcEndpointServiceConfigurations(req: operations.POSTDeleteVpcEndpointServiceConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVpcEndpointServiceConfigurationsResponse>;
    /**
     * <p>Deletes the specified VPC endpoints.</p> <p>When you delete a gateway endpoint, we delete the endpoint routes in the route tables for the endpoint.</p> <p>When you delete a Gateway Load Balancer endpoint, we delete its endpoint network interfaces. You can only delete Gateway Load Balancer endpoints when the routes that are associated with the endpoint are deleted.</p> <p>When you delete an interface endpoint, we delete its endpoint network interfaces.</p>
     */
    postDeleteVpcEndpoints(req: operations.POSTDeleteVpcEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVpcEndpointsResponse>;
    /**
     * Deletes a VPC peering connection. Either the owner of the requester VPC or the owner of the accepter VPC can delete the VPC peering connection if it's in the <code>active</code> state. The owner of the requester VPC can delete a VPC peering connection in the <code>pending-acceptance</code> state. You cannot delete a VPC peering connection that's in the <code>failed</code> state.
     */
    postDeleteVpcPeeringConnection(req: operations.POSTDeleteVpcPeeringConnectionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVpcPeeringConnectionResponse>;
    /**
     * <p>Deletes the specified VPN connection.</p> <p>If you're deleting the VPC and its associated components, we recommend that you detach the virtual private gateway from the VPC and delete the VPC before deleting the VPN connection. If you believe that the tunnel credentials for your VPN connection have been compromised, you can delete the VPN connection and create a new one that has new keys, without needing to delete the VPC or virtual private gateway. If you create a new VPN connection, you must reconfigure the customer gateway device using the new configuration information returned with the new VPN connection ID.</p> <p>For certificate-based authentication, delete all Certificate Manager (ACM) private certificates used for the Amazon Web Services-side tunnel endpoints for the VPN connection before deleting the VPN connection.</p>
     */
    postDeleteVpnConnection(req: operations.POSTDeleteVpnConnectionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVpnConnectionResponse>;
    /**
     * Deletes the specified static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.
     */
    postDeleteVpnConnectionRoute(req: operations.POSTDeleteVpnConnectionRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVpnConnectionRouteResponse>;
    /**
     * Deletes the specified virtual private gateway. You must first detach the virtual private gateway from the VPC. Note that you don't need to delete the virtual private gateway if you plan to delete and recreate the VPN connection between your VPC and your network.
     */
    postDeleteVpnGateway(req: operations.POSTDeleteVpnGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteVpnGatewayResponse>;
    /**
     * <p>Releases the specified address range that you provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.</p> <p>Before you can release an address range, you must stop advertising it using <a>WithdrawByoipCidr</a> and you must not have any IP addresses allocated from its address range.</p>
     */
    postDeprovisionByoipCidr(req: operations.POSTDeprovisionByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeprovisionByoipCidrResponse>;
    /**
     * Deprovision a CIDR provisioned from an IPAM pool. If you deprovision a CIDR from a pool that has a source pool, the CIDR is recycled back into the source pool. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/depro-pool-cidr-ipam.html">Deprovision pool CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.
     */
    postDeprovisionIpamPoolCidr(req: operations.POSTDeprovisionIpamPoolCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeprovisionIpamPoolCidrResponse>;
    /**
     * Deprovision a CIDR from a public IPv4 pool.
     */
    postDeprovisionPublicIpv4PoolCidr(req: operations.POSTDeprovisionPublicIpv4PoolCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeprovisionPublicIpv4PoolCidrResponse>;
    /**
     * <p>Deregisters the specified AMI. After you deregister an AMI, it can't be used to launch new instances.</p> <p>If you deregister an AMI that matches a Recycle Bin retention rule, the AMI is retained in the Recycle Bin for the specified retention period. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle Bin</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>When you deregister an AMI, it doesn't affect any instances that you've already launched from the AMI. You'll continue to incur usage costs for those instances until you terminate them.</p> <p>When you deregister an Amazon EBS-backed AMI, it doesn't affect the snapshot that was created for the root volume of the instance during the AMI creation process. When you deregister an instance store-backed AMI, it doesn't affect the files that you uploaded to Amazon S3 when you created the AMI.</p>
     */
    postDeregisterImage(req: operations.POSTDeregisterImageRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeregisterImageResponse>;
    /**
     * Deregisters tag keys to prevent tags that have the specified tag keys from being included in scheduled event notifications for resources in the Region.
     */
    postDeregisterInstanceEventNotificationAttributes(req: operations.POSTDeregisterInstanceEventNotificationAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeregisterInstanceEventNotificationAttributesResponse>;
    /**
     * Deregisters the specified members (network interfaces) from the transit gateway multicast group.
     */
    postDeregisterTransitGatewayMulticastGroupMembers(req: operations.POSTDeregisterTransitGatewayMulticastGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeregisterTransitGatewayMulticastGroupMembersResponse>;
    /**
     * Deregisters the specified sources (network interfaces) from the transit gateway multicast group.
     */
    postDeregisterTransitGatewayMulticastGroupSources(req: operations.POSTDeregisterTransitGatewayMulticastGroupSourcesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeregisterTransitGatewayMulticastGroupSourcesResponse>;
    /**
     * <p>Describes attributes of your Amazon Web Services account. The following are the supported account attributes:</p> <ul> <li> <p> <code>supported-platforms</code>: Indicates whether your account can launch instances into EC2-Classic and EC2-VPC, or only into EC2-VPC.</p> </li> <li> <p> <code>default-vpc</code>: The ID of the default VPC for your account, or <code>none</code>.</p> </li> <li> <p> <code>max-instances</code>: This attribute is no longer supported. The returned value does not reflect your actual vCPU limit for running On-Demand Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits">On-Demand Instance Limits</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </li> <li> <p> <code>vpc-max-security-groups-per-interface</code>: The maximum number of security groups that you can assign to a network interface.</p> </li> <li> <p> <code>max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can allocate for use with EC2-Classic. </p> </li> <li> <p> <code>vpc-max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can allocate for use with EC2-VPC.</p> </li> </ul> <note> <p>We are retiring EC2-Classic on August 15, 2022. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>.</p> </note>
     */
    postDescribeAccountAttributes(req: operations.POSTDescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAccountAttributesResponse>;
    /**
     * Describes an Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    postDescribeAddressTransfers(req: operations.POSTDescribeAddressTransfersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAddressTransfersResponse>;
    /**
     * <p>Describes the specified Elastic IP addresses or all of your Elastic IP addresses.</p> <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postDescribeAddresses(req: operations.POSTDescribeAddressesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAddressesResponse>;
    /**
     * Describes the attributes of the specified Elastic IP addresses. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.
     */
    postDescribeAddressesAttribute(req: operations.POSTDescribeAddressesAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAddressesAttributeResponse>;
    /**
     * <p>Describes the longer ID format settings for all resource types in a specific Region. This request is useful for performing a quick audit to determine whether a specific Region is fully opted in for longer IDs (17-character IDs).</p> <p>This request only returns information about resource types that support longer IDs.</p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
     */
    postDescribeAggregateIdFormat(req: operations.POSTDescribeAggregateIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAggregateIdFormatResponse>;
    /**
     * <p>Describes the Availability Zones, Local Zones, and Wavelength Zones that are available to you. If there is an event impacting a zone, you can use this request to view the state and any provided messages for that zone.</p> <p>For more information about Availability Zones, Local Zones, and Wavelength Zones, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html">Regions and zones</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDescribeAvailabilityZones(req: operations.POSTDescribeAvailabilityZonesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAvailabilityZonesResponse>;
    /**
     * Describes the current Infrastructure Performance metric subscriptions.
     */
    postDescribeAwsNetworkPerformanceMetricSubscriptions(req: operations.POSTDescribeAwsNetworkPerformanceMetricSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAwsNetworkPerformanceMetricSubscriptionsResponse>;
    /**
     * <p>Describes the specified bundle tasks or all of your bundle tasks.</p> <note> <p>Completed bundle tasks are listed for only a limited time. If your bundle task is no longer in the list, you can still register an AMI from it. Just use <code>RegisterImage</code> with the Amazon S3 bucket name and image manifest name you provided to the bundle task.</p> </note>
     */
    postDescribeBundleTasks(req: operations.POSTDescribeBundleTasksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeBundleTasksResponse>;
    /**
     * <p>Describes the IP address ranges that were specified in calls to <a>ProvisionByoipCidr</a>.</p> <p>To describe the address pools that were created when you provisioned the address ranges, use <a>DescribePublicIpv4Pools</a> or <a>DescribeIpv6Pools</a>.</p>
     */
    postDescribeByoipCidrs(req: operations.POSTDescribeByoipCidrsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeByoipCidrsResponse>;
    /**
     * Describes one or more Capacity Reservation Fleets.
     */
    postDescribeCapacityReservationFleets(req: operations.POSTDescribeCapacityReservationFleetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCapacityReservationFleetsResponse>;
    /**
     * Describes one or more of your Capacity Reservations. The results describe only the Capacity Reservations in the Amazon Web Services Region that you're currently using.
     */
    postDescribeCapacityReservations(req: operations.POSTDescribeCapacityReservationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCapacityReservationsResponse>;
    /**
     * Describes one or more of your carrier gateways.
     */
    postDescribeCarrierGateways(req: operations.POSTDescribeCarrierGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCarrierGatewaysResponse>;
    /**
     * <p>Describes one or more of your linked EC2-Classic instances. This request only returns information about EC2-Classic instances linked to a VPC through ClassicLink. You cannot use this request to return information about other instances.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postDescribeClassicLinkInstances(req: operations.POSTDescribeClassicLinkInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClassicLinkInstancesResponse>;
    /**
     * Describes the authorization rules for a specified Client VPN endpoint.
     */
    postDescribeClientVpnAuthorizationRules(req: operations.POSTDescribeClientVpnAuthorizationRulesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClientVpnAuthorizationRulesResponse>;
    /**
     * Describes active client connections and connections that have been terminated within the last 60 minutes for the specified Client VPN endpoint.
     */
    postDescribeClientVpnConnections(req: operations.POSTDescribeClientVpnConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClientVpnConnectionsResponse>;
    /**
     * Describes one or more Client VPN endpoints in the account.
     */
    postDescribeClientVpnEndpoints(req: operations.POSTDescribeClientVpnEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClientVpnEndpointsResponse>;
    /**
     * Describes the routes for the specified Client VPN endpoint.
     */
    postDescribeClientVpnRoutes(req: operations.POSTDescribeClientVpnRoutesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClientVpnRoutesResponse>;
    /**
     * Describes the target networks associated with the specified Client VPN endpoint.
     */
    postDescribeClientVpnTargetNetworks(req: operations.POSTDescribeClientVpnTargetNetworksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeClientVpnTargetNetworksResponse>;
    /**
     * Describes the specified customer-owned address pools or all of your customer-owned address pools.
     */
    postDescribeCoipPools(req: operations.POSTDescribeCoipPoolsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCoipPoolsResponse>;
    /**
     * <p>Describes the specified conversion tasks or all your conversion tasks. For more information, see the <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/">VM Import/Export User Guide</a>.</p> <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
     */
    postDescribeConversionTasks(req: operations.POSTDescribeConversionTasksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeConversionTasksResponse>;
    /**
     * <p>Describes one or more of your VPN customer gateways.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
     */
    postDescribeCustomerGateways(req: operations.POSTDescribeCustomerGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeCustomerGatewaysResponse>;
    /**
     * <p>Describes one or more of your DHCP options sets.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP options sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postDescribeDhcpOptions(req: operations.POSTDescribeDhcpOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeDhcpOptionsResponse>;
    /**
     * Describes one or more of your egress-only internet gateways.
     */
    postDescribeEgressOnlyInternetGateways(req: operations.POSTDescribeEgressOnlyInternetGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeEgressOnlyInternetGatewaysResponse>;
    /**
     * Describes the Elastic Graphics accelerator associated with your instances. For more information about Elastic Graphics, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/elastic-graphics.html">Amazon Elastic Graphics</a>.
     */
    postDescribeElasticGpus(req: operations.POSTDescribeElasticGpusRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeElasticGpusResponse>;
    /**
     * Describes the specified export image tasks or all of your export image tasks.
     */
    postDescribeExportImageTasks(req: operations.POSTDescribeExportImageTasksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeExportImageTasksResponse>;
    /**
     * Describes the specified export instance tasks or all of your export instance tasks.
     */
    postDescribeExportTasks(req: operations.POSTDescribeExportTasksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeExportTasksResponse>;
    /**
     * Describe details for Windows AMIs that are configured for faster launching.
     */
    postDescribeFastLaunchImages(req: operations.POSTDescribeFastLaunchImagesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeFastLaunchImagesResponse>;
    /**
     * Describes the state of fast snapshot restores for your snapshots.
     */
    postDescribeFastSnapshotRestores(req: operations.POSTDescribeFastSnapshotRestoresRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeFastSnapshotRestoresResponse>;
    /**
     * <p>Describes the events for the specified EC2 Fleet during the specified time.</p> <p>EC2 Fleet events are delayed by up to 30 seconds before they can be described. This ensures that you can query by the last evaluated time and not miss a recorded event. EC2 Fleet events are available for 48 hours.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-monitor.html">Monitor fleet events using Amazon EventBridge</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeFleetHistory(req: operations.POSTDescribeFleetHistoryRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeFleetHistoryResponse>;
    /**
     * <p>Describes the running instances for the specified EC2 Fleet.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#monitor-ec2-fleet">Monitor your EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeFleetInstances(req: operations.POSTDescribeFleetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeFleetInstancesResponse>;
    /**
     * <p>Describes the specified EC2 Fleets or all of your EC2 Fleets.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#monitor-ec2-fleet">Monitor your EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeFleets(req: operations.POSTDescribeFleetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeFleetsResponse>;
    /**
     * <p>Describes one or more flow logs.</p> <p>To view the published flow log records, you must view the log destination. For example, the CloudWatch Logs log group, the Amazon S3 bucket, or the Kinesis Data Firehose delivery stream.</p>
     */
    postDescribeFlowLogs(req: operations.POSTDescribeFlowLogsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeFlowLogsResponse>;
    /**
     * Describes the specified attribute of the specified Amazon FPGA Image (AFI).
     */
    postDescribeFpgaImageAttribute(req: operations.POSTDescribeFpgaImageAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeFpgaImageAttributeResponse>;
    /**
     * Describes the Amazon FPGA Images (AFIs) available to you. These include public AFIs, private AFIs that you own, and AFIs owned by other Amazon Web Services accounts for which you have load permissions.
     */
    postDescribeFpgaImages(req: operations.POSTDescribeFpgaImagesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeFpgaImagesResponse>;
    /**
     * <p>Describes the Dedicated Host reservations that are available to purchase.</p> <p>The results describe all of the Dedicated Host reservation offerings, including offerings that might not match the instance family and Region of your Dedicated Hosts. When purchasing an offering, ensure that the instance family and Region of the offering matches that of the Dedicated Hosts with which it is to be associated. For more information about supported instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Hosts</a> in the <i>Amazon EC2 User Guide</i>. </p>
     */
    postDescribeHostReservationOfferings(req: operations.POSTDescribeHostReservationOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeHostReservationOfferingsResponse>;
    /**
     * Describes reservations that are associated with Dedicated Hosts in your account.
     */
    postDescribeHostReservations(req: operations.POSTDescribeHostReservationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeHostReservationsResponse>;
    /**
     * <p>Describes the specified Dedicated Hosts or all your Dedicated Hosts.</p> <p>The results describe only the Dedicated Hosts in the Region you're currently using. All listed instances consume capacity on your Dedicated Host. Dedicated Hosts that have recently been released are listed with the state <code>released</code>.</p>
     */
    postDescribeHosts(req: operations.POSTDescribeHostsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeHostsResponse>;
    /**
     * Describes your IAM instance profile associations.
     */
    postDescribeIamInstanceProfileAssociations(req: operations.POSTDescribeIamInstanceProfileAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIamInstanceProfileAssociationsResponse>;
    /**
     * <p>Describes the ID format settings for your resources on a per-Region basis, for example, to view which resource types are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types.</p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p> <p>These settings apply to the IAM user who makes the request; they do not apply to the entire Amazon Web Services account. By default, an IAM user defaults to the same settings as the root user, unless they explicitly override the settings by running the <a>ModifyIdFormat</a> command. Resources created with longer IDs are visible to all IAM users, regardless of these settings and provided that they have permission to use the relevant <code>Describe</code> command for the resource type.</p>
     */
    postDescribeIdFormat(req: operations.POSTDescribeIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIdFormatResponse>;
    /**
     * <p>Describes the ID format settings for resources for the specified IAM user, IAM role, or root user. For example, you can view the resource types that are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p> <p>These settings apply to the principal specified in the request. They do not apply to the principal that makes the request.</p>
     */
    postDescribeIdentityIdFormat(req: operations.POSTDescribeIdentityIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIdentityIdFormatResponse>;
    /**
     * Describes the specified attribute of the specified AMI. You can specify only one attribute at a time.
     */
    postDescribeImageAttribute(req: operations.POSTDescribeImageAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeImageAttributeResponse>;
    /**
     * <p>Describes the specified images (AMIs, AKIs, and ARIs) available to you or all of the images available to you.</p> <p>The images available to you include public images, private images that you own, and private images owned by other Amazon Web Services accounts for which you have explicit launch permissions.</p> <p>Recently deregistered images appear in the returned results for a short interval and then return empty results. After all instances that reference a deregistered AMI are terminated, specifying the ID of the image will eventually return an error indicating that the AMI ID cannot be found.</p>
     */
    postDescribeImages(req: operations.POSTDescribeImagesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeImagesResponse>;
    /**
     * Displays details about an import virtual machine or import snapshot tasks that are already created.
     */
    postDescribeImportImageTasks(req: operations.POSTDescribeImportImageTasksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeImportImageTasksResponse>;
    /**
     * Describes your import snapshot tasks.
     */
    postDescribeImportSnapshotTasks(req: operations.POSTDescribeImportSnapshotTasksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeImportSnapshotTasksResponse>;
    /**
     * Describes the specified attribute of the specified instance. You can specify only one attribute at a time. Valid attribute values are: <code>instanceType</code> | <code>kernel</code> | <code>ramdisk</code> | <code>userData</code> | <code>disableApiTermination</code> | <code>instanceInitiatedShutdownBehavior</code> | <code>rootDeviceName</code> | <code>blockDeviceMapping</code> | <code>productCodes</code> | <code>sourceDestCheck</code> | <code>groupSet</code> | <code>ebsOptimized</code> | <code>sriovNetSupport</code>
     */
    postDescribeInstanceAttribute(req: operations.POSTDescribeInstanceAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeInstanceAttributeResponse>;
    /**
     * <p>Describes the credit option for CPU usage of the specified burstable performance instances. The credit options are <code>standard</code> and <code>unlimited</code>.</p> <p>If you do not specify an instance ID, Amazon EC2 returns burstable performance instances with the <code>unlimited</code> credit option, as well as instances that were previously configured as T2, T3, and T3a with the <code>unlimited</code> credit option. For example, if you resize a T2 instance, while it is configured as <code>unlimited</code>, to an M4 instance, Amazon EC2 returns the M4 instance.</p> <p>If you specify one or more instance IDs, Amazon EC2 returns the credit option (<code>standard</code> or <code>unlimited</code>) of those instances. If you specify an instance ID that is not valid, such as an instance that is not a burstable performance instance, an error is returned.</p> <p>Recently terminated instances might appear in the returned results. This interval is usually less than one hour.</p> <p>If an Availability Zone is experiencing a service disruption and you specify instance IDs in the affected zone, or do not specify any instance IDs at all, the call fails. If you specify only instance IDs in an unaffected zone, the call works normally.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeInstanceCreditSpecifications(req: operations.POSTDescribeInstanceCreditSpecificationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeInstanceCreditSpecificationsResponse>;
    /**
     * Describes the tag keys that are registered to appear in scheduled event notifications for resources in the current Region.
     */
    postDescribeInstanceEventNotificationAttributes(req: operations.POSTDescribeInstanceEventNotificationAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeInstanceEventNotificationAttributesResponse>;
    /**
     * <p>Describes the specified event windows or all event windows.</p> <p>If you specify event window IDs, the output includes information for only the specified event windows. If you specify filters, the output includes information for only those event windows that meet the filter criteria. If you do not specify event windows IDs or filters, the output includes information for all event windows, which can affect performance. We recommend that you use pagination to ensure that the operation returns quickly and successfully. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled events</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeInstanceEventWindows(req: operations.POSTDescribeInstanceEventWindowsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeInstanceEventWindowsResponse>;
    /**
     * <p>Describes the status of the specified instances or all of your instances. By default, only running instances are described, unless you specifically indicate to return the status of all instances.</p> <p>Instance status includes the following components:</p> <ul> <li> <p> <b>Status checks</b> - Amazon EC2 performs status checks on running EC2 instances to identify hardware and software issues. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html">Status checks for your instances</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstances.html">Troubleshoot instances with failed status checks</a> in the <i>Amazon EC2 User Guide</i>.</p> </li> <li> <p> <b>Scheduled events</b> - Amazon EC2 can schedule events (such as reboot, stop, or terminate) for your instances related to hardware issues, software updates, or system maintenance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-instances-status-check_sched.html">Scheduled events for your instances</a> in the <i>Amazon EC2 User Guide</i>.</p> </li> <li> <p> <b>Instance state</b> - You can manage your instances from the moment you launch them through their termination. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p> </li> </ul>
     */
    postDescribeInstanceStatus(req: operations.POSTDescribeInstanceStatusRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeInstanceStatusResponse>;
    /**
     * Returns a list of all instance types offered. The results can be filtered by location (Region or Availability Zone). If no location is specified, the instance types offered in the current Region are returned.
     */
    postDescribeInstanceTypeOfferings(req: operations.POSTDescribeInstanceTypeOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeInstanceTypeOfferingsResponse>;
    /**
     * Describes the details of the instance types that are offered in a location. The results can be filtered by the attributes of the instance types.
     */
    postDescribeInstanceTypes(req: operations.POSTDescribeInstanceTypesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeInstanceTypesResponse>;
    /**
     * <p>Describes the specified instances or all instances.</p> <p>If you specify instance IDs, the output includes information for only the specified instances. If you specify filters, the output includes information for only those instances that meet the filter criteria. If you do not specify instance IDs or filters, the output includes information for all instances, which can affect performance. We recommend that you use pagination to ensure that the operation returns quickly and successfully.</p> <p>If you specify an instance ID that is not valid, an error is returned. If you specify an instance that you do not own, it is not included in the output.</p> <p>Recently terminated instances might appear in the returned results. This interval is usually less than one hour.</p> <p>If you describe instances in the rare case where an Availability Zone is experiencing a service disruption and you specify instance IDs that are in the affected zone, or do not specify any instance IDs at all, the call fails. If you describe instances and specify only instance IDs that are in an unaffected zone, the call works normally.</p>
     */
    postDescribeInstances(req: operations.POSTDescribeInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeInstancesResponse>;
    /**
     * Describes one or more of your internet gateways.
     */
    postDescribeInternetGateways(req: operations.POSTDescribeInternetGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeInternetGatewaysResponse>;
    /**
     * Get information about your IPAM pools.
     */
    postDescribeIpamPools(req: operations.POSTDescribeIpamPoolsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIpamPoolsResponse>;
    /**
     * Describes IPAM resource discoveries. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
     */
    postDescribeIpamResourceDiscoveries(req: operations.POSTDescribeIpamResourceDiscoveriesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIpamResourceDiscoveriesResponse>;
    /**
     * Describes resource discovery association with an Amazon VPC IPAM. An associated resource discovery is a resource discovery that has been associated with an IPAM..
     */
    postDescribeIpamResourceDiscoveryAssociations(req: operations.POSTDescribeIpamResourceDiscoveryAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIpamResourceDiscoveryAssociationsResponse>;
    /**
     * Get information about your IPAM scopes.
     */
    postDescribeIpamScopes(req: operations.POSTDescribeIpamScopesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIpamScopesResponse>;
    /**
     * <p>Get information about your IPAM pools.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    postDescribeIpams(req: operations.POSTDescribeIpamsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIpamsResponse>;
    /**
     * Describes your IPv6 address pools.
     */
    postDescribeIpv6Pools(req: operations.POSTDescribeIpv6PoolsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeIpv6PoolsResponse>;
    /**
     * <p>Describes the specified key pairs or all of your key pairs.</p> <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDescribeKeyPairs(req: operations.POSTDescribeKeyPairsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeKeyPairsResponse>;
    /**
     * Describes one or more versions of a specified launch template. You can describe all versions, individual versions, or a range of versions. You can also describe all the latest versions or all the default versions of all the launch templates in your account.
     */
    postDescribeLaunchTemplateVersions(req: operations.POSTDescribeLaunchTemplateVersionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLaunchTemplateVersionsResponse>;
    /**
     * Describes one or more launch templates.
     */
    postDescribeLaunchTemplates(req: operations.POSTDescribeLaunchTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLaunchTemplatesResponse>;
    /**
     * Describes the associations between virtual interface groups and local gateway route tables.
     */
    postDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(req: operations.POSTDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResponse>;
    /**
     * Describes the specified associations between VPCs and local gateway route tables.
     */
    postDescribeLocalGatewayRouteTableVpcAssociations(req: operations.POSTDescribeLocalGatewayRouteTableVpcAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLocalGatewayRouteTableVpcAssociationsResponse>;
    /**
     * Describes one or more local gateway route tables. By default, all local gateway route tables are described. Alternatively, you can filter the results.
     */
    postDescribeLocalGatewayRouteTables(req: operations.POSTDescribeLocalGatewayRouteTablesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLocalGatewayRouteTablesResponse>;
    /**
     * Describes the specified local gateway virtual interface groups.
     */
    postDescribeLocalGatewayVirtualInterfaceGroups(req: operations.POSTDescribeLocalGatewayVirtualInterfaceGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLocalGatewayVirtualInterfaceGroupsResponse>;
    /**
     * Describes the specified local gateway virtual interfaces.
     */
    postDescribeLocalGatewayVirtualInterfaces(req: operations.POSTDescribeLocalGatewayVirtualInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLocalGatewayVirtualInterfacesResponse>;
    /**
     * Describes one or more local gateways. By default, all local gateways are described. Alternatively, you can filter the results.
     */
    postDescribeLocalGateways(req: operations.POSTDescribeLocalGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLocalGatewaysResponse>;
    /**
     * <p>Describes your managed prefix lists and any Amazon Web Services-managed prefix lists.</p> <p>To view the entries for your prefix list, use <a>GetManagedPrefixListEntries</a>.</p>
     */
    postDescribeManagedPrefixLists(req: operations.POSTDescribeManagedPrefixListsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeManagedPrefixListsResponse>;
    /**
     * Describes your Elastic IP addresses that are being moved to the EC2-VPC platform, or that are being restored to the EC2-Classic platform. This request does not return information about any other Elastic IP addresses in your account.
     */
    postDescribeMovingAddresses(req: operations.POSTDescribeMovingAddressesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeMovingAddressesResponse>;
    /**
     * Describes one or more of your NAT gateways.
     */
    postDescribeNatGateways(req: operations.POSTDescribeNatGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeNatGatewaysResponse>;
    /**
     * <p>Describes one or more of your network ACLs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postDescribeNetworkAcls(req: operations.POSTDescribeNetworkAclsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeNetworkAclsResponse>;
    /**
     * Describes the specified Network Access Scope analyses.
     */
    postDescribeNetworkInsightsAccessScopeAnalyses(req: operations.POSTDescribeNetworkInsightsAccessScopeAnalysesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeNetworkInsightsAccessScopeAnalysesResponse>;
    /**
     * Describes the specified Network Access Scopes.
     */
    postDescribeNetworkInsightsAccessScopes(req: operations.POSTDescribeNetworkInsightsAccessScopesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeNetworkInsightsAccessScopesResponse>;
    /**
     * Describes one or more of your network insights analyses.
     */
    postDescribeNetworkInsightsAnalyses(req: operations.POSTDescribeNetworkInsightsAnalysesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeNetworkInsightsAnalysesResponse>;
    /**
     * Describes one or more of your paths.
     */
    postDescribeNetworkInsightsPaths(req: operations.POSTDescribeNetworkInsightsPathsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeNetworkInsightsPathsResponse>;
    /**
     * Describes a network interface attribute. You can specify only one attribute at a time.
     */
    postDescribeNetworkInterfaceAttribute(req: operations.POSTDescribeNetworkInterfaceAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeNetworkInterfaceAttributeResponse>;
    /**
     * Describes the permissions for your network interfaces.
     */
    postDescribeNetworkInterfacePermissions(req: operations.POSTDescribeNetworkInterfacePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeNetworkInterfacePermissionsResponse>;
    /**
     * Describes one or more of your network interfaces.
     */
    postDescribeNetworkInterfaces(req: operations.POSTDescribeNetworkInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeNetworkInterfacesResponse>;
    /**
     * Describes the specified placement groups or all of your placement groups. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide</i>.
     */
    postDescribePlacementGroups(req: operations.POSTDescribePlacementGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribePlacementGroupsResponse>;
    /**
     * <p>Describes available Amazon Web Services services in a prefix list format, which includes the prefix list name and prefix list ID of the service and the IP address range for the service.</p> <p>We recommend that you use <a>DescribeManagedPrefixLists</a> instead.</p>
     */
    postDescribePrefixLists(req: operations.POSTDescribePrefixListsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribePrefixListsResponse>;
    /**
     * <p>Describes the ID format settings for the root user and all IAM roles and IAM users that have explicitly specified a longer ID (17-character ID) preference. </p> <p>By default, all IAM roles and IAM users default to the same ID settings as the root user, unless they explicitly override the settings. This request is useful for identifying those IAM users and IAM roles that have overridden the default ID settings.</p> <p>The following resource types support longer IDs: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>snapshot</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
     */
    postDescribePrincipalIdFormat(req: operations.POSTDescribePrincipalIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribePrincipalIdFormatResponse>;
    /**
     * Describes the specified IPv4 address pools.
     */
    postDescribePublicIpv4Pools(req: operations.POSTDescribePublicIpv4PoolsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribePublicIpv4PoolsResponse>;
    /**
     * <p>Describes the Regions that are enabled for your account, or all Regions.</p> <p>For a list of the Regions supported by Amazon EC2, see <a href="https://docs.aws.amazon.com/general/latest/gr/ec2-service.html"> Amazon Elastic Compute Cloud endpoints and quotas</a>.</p> <p>For information about enabling and disabling Regions for your account, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing Amazon Web Services Regions</a> in the <i>Amazon Web Services General Reference</i>.</p>
     */
    postDescribeRegions(req: operations.POSTDescribeRegionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeRegionsResponse>;
    /**
     * Describes a root volume replacement task. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replace-root.html">Replace a root volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
     */
    postDescribeReplaceRootVolumeTasks(req: operations.POSTDescribeReplaceRootVolumeTasksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReplaceRootVolumeTasksResponse>;
    /**
     * <p>Describes one or more of the Reserved Instances that you purchased.</p> <p>For more information about Reserved Instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeReservedInstances(req: operations.POSTDescribeReservedInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedInstancesResponse>;
    /**
     * <p>Describes your account's Reserved Instance listings in the Reserved Instance Marketplace.</p> <p>The Reserved Instance Marketplace matches sellers who want to resell Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p> <p>As a seller, you choose to list some or all of your Reserved Instances, and you specify the upfront price to receive for them. Your Reserved Instances are then listed in the Reserved Instance Marketplace and are available for purchase.</p> <p>As a buyer, you specify the configuration of the Reserved Instance to purchase, and the Marketplace matches what you're searching for with what's available. The Marketplace first sells the lowest priced Reserved Instances to you, and continues to sell available Reserved Instance listings to you until your demand is met. You are charged based on the total price of all of the listings that you purchase.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeReservedInstancesListings(req: operations.POSTDescribeReservedInstancesListingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedInstancesListingsResponse>;
    /**
     * <p>Describes the modifications made to your Reserved Instances. If no parameter is specified, information about all your Reserved Instances modification requests is returned. If a modification ID is specified, only information about the specific modification is returned.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeReservedInstancesModifications(req: operations.POSTDescribeReservedInstancesModificationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedInstancesModificationsResponse>;
    /**
     * <p>Describes Reserved Instance offerings that are available for purchase. With Reserved Instances, you purchase the right to launch instances for a period of time. During that time period, you do not receive insufficient capacity errors, and you pay a lower usage rate than the rate charged for On-Demand instances for the actual time used.</p> <p>If you have listed your own Reserved Instances for sale in the Reserved Instance Marketplace, they will be excluded from these results. This is to ensure that you do not purchase your own Reserved Instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeReservedInstancesOfferings(req: operations.POSTDescribeReservedInstancesOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeReservedInstancesOfferingsResponse>;
    /**
     * <p>Describes one or more of your route tables.</p> <p>Each subnet in your VPC must be associated with a route table. If a subnet is not explicitly associated with any route table, it is implicitly associated with the main route table. This command does not return the subnet ID for implicit associations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postDescribeRouteTables(req: operations.POSTDescribeRouteTablesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeRouteTablesResponse>;
    /**
     * <p>Finds available schedules that meet the specified criteria.</p> <p>You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p> <p>After you find a schedule that meets your needs, call <a>PurchaseScheduledInstances</a> to purchase Scheduled Instances with that schedule.</p>
     */
    postDescribeScheduledInstanceAvailability(req: operations.POSTDescribeScheduledInstanceAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeScheduledInstanceAvailabilityResponse>;
    /**
     * Describes the specified Scheduled Instances or all your Scheduled Instances.
     */
    postDescribeScheduledInstances(req: operations.POSTDescribeScheduledInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeScheduledInstancesResponse>;
    /**
     * [VPC only] Describes the VPCs on the other side of a VPC peering connection that are referencing the security groups you've specified in this request.
     */
    postDescribeSecurityGroupReferences(req: operations.POSTDescribeSecurityGroupReferencesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSecurityGroupReferencesResponse>;
    /**
     * Describes one or more of your security group rules.
     */
    postDescribeSecurityGroupRules(req: operations.POSTDescribeSecurityGroupRulesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSecurityGroupRulesResponse>;
    /**
     * <p>Describes the specified security groups or all of your security groups.</p> <p>A security group is for use with instances either in the EC2-Classic platform or in a specific VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 security groups</a> in the <i>Amazon Elastic Compute Cloud User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security groups for your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postDescribeSecurityGroups(req: operations.POSTDescribeSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSecurityGroupsResponse>;
    /**
     * <p>Describes the specified attribute of the specified snapshot. You can specify only one attribute at a time.</p> <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDescribeSnapshotAttribute(req: operations.POSTDescribeSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSnapshotAttributeResponse>;
    /**
     * Describes the storage tier status of one or more Amazon EBS snapshots.
     */
    postDescribeSnapshotTierStatus(req: operations.POSTDescribeSnapshotTierStatusRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSnapshotTierStatusResponse>;
    /**
     * <p>Describes the specified EBS snapshots available to you or all of the EBS snapshots available to you.</p> <p>The snapshots available to you include public snapshots, private snapshots that you own, and private snapshots owned by other Amazon Web Services accounts for which you have explicit create volume permissions.</p> <p>The create volume permissions fall into the following categories:</p> <ul> <li> <p> <i>public</i>: The owner of the snapshot granted create volume permissions for the snapshot to the <code>all</code> group. All Amazon Web Services accounts have create volume permissions for these snapshots.</p> </li> <li> <p> <i>explicit</i>: The owner of the snapshot granted create volume permissions to a specific Amazon Web Services account.</p> </li> <li> <p> <i>implicit</i>: An Amazon Web Services account has implicit create volume permissions for all snapshots it owns.</p> </li> </ul> <p>The list of snapshots returned can be filtered by specifying snapshot IDs, snapshot owners, or Amazon Web Services accounts with create volume permissions. If no options are specified, Amazon EC2 returns all snapshots for which you have create volume permissions.</p> <p>If you specify one or more snapshot IDs, only snapshots that have the specified IDs are returned. If you specify an invalid snapshot ID, an error is returned. If you specify a snapshot ID for which you do not have access, it is not included in the returned results.</p> <p>If you specify one or more snapshot owners using the <code>OwnerIds</code> option, only snapshots from the specified owners and for which you have access are returned. The results can include the Amazon Web Services account IDs of the specified owners, <code>amazon</code> for snapshots owned by Amazon, or <code>self</code> for snapshots that you own.</p> <p>If you specify a list of restorable users, only snapshots with create snapshot permissions for those users are returned. You can specify Amazon Web Services account IDs (if you own the snapshots), <code>self</code> for snapshots for which you own or have explicit permissions, or <code>all</code> for public snapshots.</p> <p>If you are describing a long list of snapshots, we recommend that you paginate the output to make the list more manageable. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p> <p>To get the state of fast snapshot restores for a snapshot, use <a>DescribeFastSnapshotRestores</a>.</p> <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html">Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDescribeSnapshots(req: operations.POSTDescribeSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSnapshotsResponse>;
    /**
     * Describes the data feed for Spot Instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-data-feeds.html">Spot Instance data feed</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
     */
    postDescribeSpotDatafeedSubscription(req: operations.POSTDescribeSpotDatafeedSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSpotDatafeedSubscriptionResponse>;
    /**
     * Describes the running instances for the specified Spot Fleet.
     */
    postDescribeSpotFleetInstances(req: operations.POSTDescribeSpotFleetInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSpotFleetInstancesResponse>;
    /**
     * <p>Describes the events for the specified Spot Fleet request during the specified time.</p> <p>Spot Fleet events are delayed by up to 30 seconds before they can be described. This ensures that you can query by the last evaluated time and not miss a recorded event. Spot Fleet events are available for 48 hours.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/fleet-monitor.html">Monitor fleet events using Amazon EventBridge</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeSpotFleetRequestHistory(req: operations.POSTDescribeSpotFleetRequestHistoryRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSpotFleetRequestHistoryResponse>;
    /**
     * <p>Describes your Spot Fleet requests.</p> <p>Spot Fleet requests are deleted 48 hours after they are canceled and their instances are terminated.</p>
     */
    postDescribeSpotFleetRequests(req: operations.POSTDescribeSpotFleetRequestsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSpotFleetRequestsResponse>;
    /**
     * <p>Describes the specified Spot Instance requests.</p> <p>You can use <code>DescribeSpotInstanceRequests</code> to find a running Spot Instance by examining the response. If the status of the Spot Instance is <code>fulfilled</code>, the instance ID appears in the response and contains the identifier of the instance. Alternatively, you can use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances">DescribeInstances</a> with a filter to look for instances where the instance lifecycle is <code>spot</code>.</p> <p>We recommend that you set <code>MaxResults</code> to a value between 5 and 1000 to limit the number of items returned. This paginates the output, which makes the list more manageable and returns the items faster. If the list of items exceeds your <code>MaxResults</code> value, then that number of items is returned along with a <code>NextToken</code> value that can be passed to a subsequent <code>DescribeSpotInstanceRequests</code> request to retrieve the remaining items.</p> <p>Spot Instance requests are deleted four hours after they are canceled and their instances are terminated.</p>
     */
    postDescribeSpotInstanceRequests(req: operations.POSTDescribeSpotInstanceRequestsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSpotInstanceRequestsResponse>;
    /**
     * <p>Describes the Spot price history. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances-history.html">Spot Instance pricing history</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>When you specify a start and end time, the operation returns the prices of the instance types within that time range. It also returns the last price change before the start time, which is the effective price as of the start time.</p>
     */
    postDescribeSpotPriceHistory(req: operations.POSTDescribeSpotPriceHistoryRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSpotPriceHistoryResponse>;
    /**
     * [VPC only] Describes the stale security group rules for security groups in a specified VPC. Rules are stale when they reference a deleted security group in the same VPC or in a peer VPC, or if they reference a security group in a peer VPC for which the VPC peering connection has been deleted.
     */
    postDescribeStaleSecurityGroups(req: operations.POSTDescribeStaleSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeStaleSecurityGroupsResponse>;
    /**
     * <p>Describes the progress of the AMI store tasks. You can describe the store tasks for specified AMIs. If you don't specify the AMIs, you get a paginated list of store tasks from the last 31 days.</p> <p>For each AMI task, the response indicates if the task is <code>InProgress</code>, <code>Completed</code>, or <code>Failed</code>. For tasks <code>InProgress</code>, the response shows the estimated progress as a percentage.</p> <p>Tasks are listed in reverse chronological order. Currently, only tasks from the past 31 days can be viewed.</p> <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using Amazon S3</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using Amazon S3</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDescribeStoreImageTasks(req: operations.POSTDescribeStoreImageTasksRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeStoreImageTasksResponse>;
    /**
     * <p>Describes one or more of your subnets.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postDescribeSubnets(req: operations.POSTDescribeSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSubnetsResponse>;
    /**
     * <p>Describes the specified tags for your EC2 resources.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tag your Amazon EC2 resources</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDescribeTags(req: operations.POSTDescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTagsResponse>;
    /**
     * Describes one or more Traffic Mirror filters.
     */
    postDescribeTrafficMirrorFilters(req: operations.POSTDescribeTrafficMirrorFiltersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTrafficMirrorFiltersResponse>;
    /**
     * Describes one or more Traffic Mirror sessions. By default, all Traffic Mirror sessions are described. Alternatively, you can filter the results.
     */
    postDescribeTrafficMirrorSessions(req: operations.POSTDescribeTrafficMirrorSessionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTrafficMirrorSessionsResponse>;
    /**
     * Information about one or more Traffic Mirror targets.
     */
    postDescribeTrafficMirrorTargets(req: operations.POSTDescribeTrafficMirrorTargetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTrafficMirrorTargetsResponse>;
    /**
     * Describes one or more attachments between resources and transit gateways. By default, all attachments are described. Alternatively, you can filter the results by attachment ID, attachment state, resource ID, or resource owner.
     */
    postDescribeTransitGatewayAttachments(req: operations.POSTDescribeTransitGatewayAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTransitGatewayAttachmentsResponse>;
    /**
     * Describes one or more Connect peers.
     */
    postDescribeTransitGatewayConnectPeers(req: operations.POSTDescribeTransitGatewayConnectPeersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTransitGatewayConnectPeersResponse>;
    /**
     * Describes one or more Connect attachments.
     */
    postDescribeTransitGatewayConnects(req: operations.POSTDescribeTransitGatewayConnectsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTransitGatewayConnectsResponse>;
    /**
     * Describes one or more transit gateway multicast domains.
     */
    postDescribeTransitGatewayMulticastDomains(req: operations.POSTDescribeTransitGatewayMulticastDomainsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTransitGatewayMulticastDomainsResponse>;
    /**
     * Describes your transit gateway peering attachments.
     */
    postDescribeTransitGatewayPeeringAttachments(req: operations.POSTDescribeTransitGatewayPeeringAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTransitGatewayPeeringAttachmentsResponse>;
    /**
     * Describes one or more transit gateway route policy tables.
     */
    postDescribeTransitGatewayPolicyTables(req: operations.POSTDescribeTransitGatewayPolicyTablesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTransitGatewayPolicyTablesResponse>;
    /**
     * Describes one or more transit gateway route table advertisements.
     */
    postDescribeTransitGatewayRouteTableAnnouncements(req: operations.POSTDescribeTransitGatewayRouteTableAnnouncementsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTransitGatewayRouteTableAnnouncementsResponse>;
    /**
     * Describes one or more transit gateway route tables. By default, all transit gateway route tables are described. Alternatively, you can filter the results.
     */
    postDescribeTransitGatewayRouteTables(req: operations.POSTDescribeTransitGatewayRouteTablesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTransitGatewayRouteTablesResponse>;
    /**
     * Describes one or more VPC attachments. By default, all VPC attachments are described. Alternatively, you can filter the results.
     */
    postDescribeTransitGatewayVpcAttachments(req: operations.POSTDescribeTransitGatewayVpcAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTransitGatewayVpcAttachmentsResponse>;
    /**
     * Describes one or more transit gateways. By default, all transit gateways are described. Alternatively, you can filter the results.
     */
    postDescribeTransitGateways(req: operations.POSTDescribeTransitGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTransitGatewaysResponse>;
    /**
     * <note> <p>This API action is currently in <b>limited preview only</b>. If you are interested in using this feature, contact your account manager.</p> </note> <p>Describes one or more network interface trunk associations.</p>
     */
    postDescribeTrunkInterfaceAssociations(req: operations.POSTDescribeTrunkInterfaceAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTrunkInterfaceAssociationsResponse>;
    /**
     * Describe Amazon Web Services Verified Access endpoints.
     */
    postDescribeVerifiedAccessEndpoints(req: operations.POSTDescribeVerifiedAccessEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVerifiedAccessEndpointsResponse>;
    /**
     * Describe details of existing Verified Access groups.
     */
    postDescribeVerifiedAccessGroups(req: operations.POSTDescribeVerifiedAccessGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVerifiedAccessGroupsResponse>;
    /**
     * Describes the current logging configuration for the Amazon Web Services Verified Access instances.
     */
    postDescribeVerifiedAccessInstanceLoggingConfigurations(req: operations.POSTDescribeVerifiedAccessInstanceLoggingConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVerifiedAccessInstanceLoggingConfigurationsResponse>;
    /**
     * Describe Verified Access instances.
     */
    postDescribeVerifiedAccessInstances(req: operations.POSTDescribeVerifiedAccessInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVerifiedAccessInstancesResponse>;
    /**
     * Describe details of existing Verified Access trust providers.
     */
    postDescribeVerifiedAccessTrustProviders(req: operations.POSTDescribeVerifiedAccessTrustProvidersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVerifiedAccessTrustProvidersResponse>;
    /**
     * <p>Describes the specified attribute of the specified volume. You can specify only one attribute at a time.</p> <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDescribeVolumeAttribute(req: operations.POSTDescribeVolumeAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVolumeAttributeResponse>;
    /**
     * <p>Describes the status of the specified volumes. Volume status provides the result of the checks performed on your volumes to determine events that can impair the performance of your volumes. The performance of a volume can be affected if an issue occurs on the volume's underlying host. If the volume's underlying host experiences a power outage or system issue, after the system is restored, there could be data inconsistencies on the volume. Volume events notify you if this occurs. Volume actions notify you if any action needs to be taken in response to the event.</p> <p>The <code>DescribeVolumeStatus</code> operation provides the following information about the specified volumes:</p> <p> <i>Status</i>: Reflects the current status of the volume. The possible values are <code>ok</code>, <code>impaired</code> , <code>warning</code>, or <code>insufficient-data</code>. If all checks pass, the overall status of the volume is <code>ok</code>. If the check fails, the overall status is <code>impaired</code>. If the status is <code>insufficient-data</code>, then the checks might still be taking place on your volume at the time. We recommend that you retry the request. For more information about volume status, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-status.html">Monitor the status of your volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p> <i>Events</i>: Reflect the cause of a volume status and might require you to take action. For example, if your volume returns an <code>impaired</code> status, then the volume event might be <code>potential-data-inconsistency</code>. This means that your volume has been affected by an issue with the underlying host, has all I/O operations disabled, and might have inconsistent data.</p> <p> <i>Actions</i>: Reflect the actions you might have to take in response to an event. For example, if the status of the volume is <code>impaired</code> and the volume event shows <code>potential-data-inconsistency</code>, then the action shows <code>enable-volume-io</code>. This means that you may want to enable the I/O operations for the volume by calling the <a>EnableVolumeIO</a> action and then check the volume for data consistency.</p> <p>Volume status is based on the volume status checks, and does not reflect the volume state. Therefore, volume status does not indicate volumes in the <code>error</code> state (for example, when a volume is incapable of accepting I/O.)</p>
     */
    postDescribeVolumeStatus(req: operations.POSTDescribeVolumeStatusRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVolumeStatusResponse>;
    /**
     * <p>Describes the specified EBS volumes or all of your EBS volumes.</p> <p>If you are describing a long list of volumes, we recommend that you paginate the output to make the list more manageable. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html#api-pagination">Pagination</a>.</p> <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDescribeVolumes(req: operations.POSTDescribeVolumesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVolumesResponse>;
    /**
     * <p>Describes the most recent volume modification request for the specified EBS volumes.</p> <p>If a volume has never been modified, some information in the output will be null. If a volume has been modified more than once, the output includes only the most recent modification request.</p> <p>You can also use CloudWatch Events to check the status of a modification to an EBS volume. For information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-modifications.html">Monitor the progress of volume modifications</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDescribeVolumesModifications(req: operations.POSTDescribeVolumesModificationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVolumesModificationsResponse>;
    /**
     * Describes the specified attribute of the specified VPC. You can specify only one attribute at a time.
     */
    postDescribeVpcAttribute(req: operations.POSTDescribeVpcAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcAttributeResponse>;
    /**
     * <p>Describes the ClassicLink status of one or more VPCs.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postDescribeVpcClassicLink(req: operations.POSTDescribeVpcClassicLinkRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcClassicLinkResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Describes the ClassicLink DNS support status of one or more VPCs. If enabled, the DNS hostname of a linked EC2-Classic instance resolves to its private IP address when addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname of an instance in a VPC resolves to its private IP address when addressed from a linked EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDescribeVpcClassicLinkDnsSupport(req: operations.POSTDescribeVpcClassicLinkDnsSupportRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcClassicLinkDnsSupportResponse>;
    /**
     * Describes the connection notifications for VPC endpoints and VPC endpoint services.
     */
    postDescribeVpcEndpointConnectionNotifications(req: operations.POSTDescribeVpcEndpointConnectionNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcEndpointConnectionNotificationsResponse>;
    /**
     * Describes the VPC endpoint connections to your VPC endpoint services, including any endpoints that are pending your acceptance.
     */
    postDescribeVpcEndpointConnections(req: operations.POSTDescribeVpcEndpointConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcEndpointConnectionsResponse>;
    /**
     * Describes the VPC endpoint service configurations in your account (your services).
     */
    postDescribeVpcEndpointServiceConfigurations(req: operations.POSTDescribeVpcEndpointServiceConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcEndpointServiceConfigurationsResponse>;
    /**
     * Describes the principals (service consumers) that are permitted to discover your VPC endpoint service.
     */
    postDescribeVpcEndpointServicePermissions(req: operations.POSTDescribeVpcEndpointServicePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcEndpointServicePermissionsResponse>;
    /**
     * <p>Describes available services to which you can create a VPC endpoint.</p> <p>When the service provider and the consumer have different accounts in multiple Availability Zones, and the consumer views the VPC endpoint service information, the response only includes the common Availability Zones. For example, when the service provider account uses <code>us-east-1a</code> and <code>us-east-1c</code> and the consumer uses <code>us-east-1a</code> and <code>us-east-1b</code>, the response includes the VPC endpoint services in the common Availability Zone, <code>us-east-1a</code>.</p>
     */
    postDescribeVpcEndpointServices(req: operations.POSTDescribeVpcEndpointServicesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcEndpointServicesResponse>;
    /**
     * Describes your VPC endpoints.
     */
    postDescribeVpcEndpoints(req: operations.POSTDescribeVpcEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcEndpointsResponse>;
    /**
     * Describes one or more of your VPC peering connections.
     */
    postDescribeVpcPeeringConnections(req: operations.POSTDescribeVpcPeeringConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcPeeringConnectionsResponse>;
    /**
     * Describes one or more of your VPCs.
     */
    postDescribeVpcs(req: operations.POSTDescribeVpcsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpcsResponse>;
    /**
     * <p>Describes one or more of your VPN connections.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
     */
    postDescribeVpnConnections(req: operations.POSTDescribeVpnConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpnConnectionsResponse>;
    /**
     * <p>Describes one or more of your virtual private gateways.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
     */
    postDescribeVpnGateways(req: operations.POSTDescribeVpnGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeVpnGatewaysResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked, the VPC security groups are no longer associated with it. An instance is automatically unlinked from a VPC when it's stopped.</p>
     */
    postDetachClassicLinkVpc(req: operations.POSTDetachClassicLinkVpcRequest, config?: AxiosRequestConfig): Promise<operations.POSTDetachClassicLinkVpcResponse>;
    /**
     * Detaches an internet gateway from a VPC, disabling connectivity between the internet and the VPC. The VPC must not contain any running instances with Elastic IP addresses or public IPv4 addresses.
     */
    postDetachInternetGateway(req: operations.POSTDetachInternetGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTDetachInternetGatewayResponse>;
    /**
     * Detaches a network interface from an instance.
     */
    postDetachNetworkInterface(req: operations.POSTDetachNetworkInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.POSTDetachNetworkInterfaceResponse>;
    /**
     * Detach a trust provider from an Amazon Web Services Verified Access instance.
     */
    postDetachVerifiedAccessTrustProvider(req: operations.POSTDetachVerifiedAccessTrustProviderRequest, config?: AxiosRequestConfig): Promise<operations.POSTDetachVerifiedAccessTrustProviderResponse>;
    /**
     * <p>Detaches an EBS volume from an instance. Make sure to unmount any file systems on the device within your operating system before detaching the volume. Failure to do so can result in the volume becoming stuck in the <code>busy</code> state while detaching. If this happens, detachment can be delayed indefinitely until you unmount the volume, force detachment, reboot the instance, or all three. If an EBS volume is the root device of an instance, it can't be detached while the instance is running. To detach the root volume, stop the instance first.</p> <p>When a volume with an Amazon Web Services Marketplace product code is detached from an instance, the product code is no longer associated with the instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-detaching-volume.html">Detach an Amazon EBS volume</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDetachVolume(req: operations.POSTDetachVolumeRequest, config?: AxiosRequestConfig): Promise<operations.POSTDetachVolumeResponse>;
    /**
     * <p>Detaches a virtual private gateway from a VPC. You do this if you're planning to turn off the VPC and not use it anymore. You can confirm a virtual private gateway has been completely detached from a VPC by describing the virtual private gateway (any attachments to the virtual private gateway are also described).</p> <p>You must wait for the attachment's state to switch to <code>detached</code> before you can delete the VPC or attach a different VPC to the virtual private gateway.</p>
     */
    postDetachVpnGateway(req: operations.POSTDetachVpnGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTDetachVpnGatewayResponse>;
    /**
     * Disables Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    postDisableAddressTransfer(req: operations.POSTDisableAddressTransferRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableAddressTransferResponse>;
    /**
     * Disables Infrastructure Performance metric subscriptions.
     */
    postDisableAwsNetworkPerformanceMetricSubscription(req: operations.POSTDisableAwsNetworkPerformanceMetricSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableAwsNetworkPerformanceMetricSubscriptionResponse>;
    /**
     * <p>Disables EBS encryption by default for your account in the current Region.</p> <p>After you disable encryption by default, you can still create encrypted volumes by enabling encryption when you create each volume.</p> <p>Disabling encryption by default does not change the encryption status of your existing volumes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postDisableEbsEncryptionByDefault(req: operations.POSTDisableEbsEncryptionByDefaultRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableEbsEncryptionByDefaultResponse>;
    /**
     * <p>Discontinue faster launching for a Windows AMI, and clean up existing pre-provisioned snapshots. When you disable faster launching, the AMI uses the standard launch process for each instance. All pre-provisioned snapshots must be removed before you can enable faster launching again.</p> <note> <p>To change these settings, you must own the AMI.</p> </note>
     */
    postDisableFastLaunch(req: operations.POSTDisableFastLaunchRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableFastLaunchResponse>;
    /**
     * Disables fast snapshot restores for the specified snapshots in the specified Availability Zones.
     */
    postDisableFastSnapshotRestores(req: operations.POSTDisableFastSnapshotRestoresRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableFastSnapshotRestoresResponse>;
    /**
     * <p>Cancels the deprecation of the specified AMI.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deprecate.html">Deprecate an AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDisableImageDeprecation(req: operations.POSTDisableImageDeprecationRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableImageDeprecationResponse>;
    /**
     * Disable the IPAM account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/enable-integ-ipam.html">Enable integration with Organizations</a> in the <i>Amazon VPC IPAM User Guide</i>.
     */
    postDisableIpamOrganizationAdminAccount(req: operations.POSTDisableIpamOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableIpamOrganizationAdminAccountResponse>;
    /**
     * Disables access to the EC2 serial console of all instances for your account. By default, access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2 User Guide</i>.
     */
    postDisableSerialConsoleAccess(req: operations.POSTDisableSerialConsoleAccessRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableSerialConsoleAccessResponse>;
    /**
     * Disables the specified resource attachment from propagating routes to the specified propagation route table.
     */
    postDisableTransitGatewayRouteTablePropagation(req: operations.POSTDisableTransitGatewayRouteTablePropagationRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableTransitGatewayRouteTablePropagationResponse>;
    /**
     * Disables a virtual private gateway (VGW) from propagating routes to a specified route table of a VPC.
     */
    postDisableVgwRoutePropagation(req: operations.POSTDisableVgwRoutePropagationRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableVgwRoutePropagationResponse>;
    /**
     * <p>Disables ClassicLink for a VPC. You cannot disable ClassicLink for a VPC that has EC2-Classic instances linked to it.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postDisableVpcClassicLink(req: operations.POSTDisableVpcClassicLinkRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableVpcClassicLinkResponse>;
    /**
     * <p>Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to public IP addresses when addressed between a linked EC2-Classic instance and instances in the VPC to which it's linked. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You must specify a VPC ID in the request.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postDisableVpcClassicLinkDnsSupport(req: operations.POSTDisableVpcClassicLinkDnsSupportRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisableVpcClassicLinkDnsSupportResponse>;
    /**
     * <p>Disassociates an Elastic IP address from the instance or network interface it's associated with.</p> <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>This is an idempotent operation. If you perform the operation more than once, Amazon EC2 doesn't return an error.</p>
     */
    postDisassociateAddress(req: operations.POSTDisassociateAddressRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateAddressResponse>;
    /**
     * <p>Disassociates a target network from the specified Client VPN endpoint. When you disassociate the last target network from a Client VPN, the following happens:</p> <ul> <li> <p>The route that was automatically added for the VPC is deleted</p> </li> <li> <p>All active client connections are terminated</p> </li> <li> <p>New client connections are disallowed</p> </li> <li> <p>The Client VPN endpoint's status changes to <code>pending-associate</code> </p> </li> </ul>
     */
    postDisassociateClientVpnTargetNetwork(req: operations.POSTDisassociateClientVpnTargetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateClientVpnTargetNetworkResponse>;
    /**
     * Disassociates an IAM role from an Certificate Manager (ACM) certificate. Disassociating an IAM role from an ACM certificate removes the Amazon S3 object that contains the certificate, certificate chain, and encrypted private key from the Amazon S3 bucket. It also revokes the IAM role's permission to use the KMS key used to encrypt the private key. This effectively revokes the role's permission to use the certificate.
     */
    postDisassociateEnclaveCertificateIamRole(req: operations.POSTDisassociateEnclaveCertificateIamRoleRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateEnclaveCertificateIamRoleResponse>;
    /**
     * <p>Disassociates an IAM instance profile from a running or stopped instance.</p> <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association ID.</p>
     */
    postDisassociateIamInstanceProfile(req: operations.POSTDisassociateIamInstanceProfileRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateIamInstanceProfileResponse>;
    /**
     * <p>Disassociates one or more targets from an event window.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled events</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postDisassociateInstanceEventWindow(req: operations.POSTDisassociateInstanceEventWindowRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateInstanceEventWindowResponse>;
    /**
     * Disassociates a resource discovery from an Amazon VPC IPAM. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
     */
    postDisassociateIpamResourceDiscovery(req: operations.POSTDisassociateIpamResourceDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateIpamResourceDiscoveryResponse>;
    /**
     * <p>Disassociates secondary Elastic IP addresses (EIPs) from a public NAT gateway. You cannot disassociate your primary EIP. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-edit-secondary">Edit secondary IP address associations</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>While disassociating is in progress, you cannot associate/disassociate additional EIPs while the connections are being drained. You are, however, allowed to delete the NAT gateway.</p> <p>An EIP will only be released at the end of MaxDrainDurationSeconds. The EIPs stay associated and support the existing connections but do not support any new connections (new connections are distributed across the remaining associated EIPs). As the existing connections drain out, the EIPs (and the corresponding private IPs mapped to them) get released.</p>
     */
    postDisassociateNatGatewayAddress(req: operations.POSTDisassociateNatGatewayAddressRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateNatGatewayAddressResponse>;
    /**
     * <p>Disassociates a subnet or gateway from a route table.</p> <p>After you perform this action, the subnet no longer uses the routes in the route table. Instead, it uses the routes in the VPC's main route table. For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postDisassociateRouteTable(req: operations.POSTDisassociateRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateRouteTableResponse>;
    /**
     * Disassociates a CIDR block from a subnet. Currently, you can disassociate an IPv6 CIDR block only. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it.
     */
    postDisassociateSubnetCidrBlock(req: operations.POSTDisassociateSubnetCidrBlockRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateSubnetCidrBlockResponse>;
    /**
     * Disassociates the specified subnets from the transit gateway multicast domain.
     */
    postDisassociateTransitGatewayMulticastDomain(req: operations.POSTDisassociateTransitGatewayMulticastDomainRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateTransitGatewayMulticastDomainResponse>;
    /**
     * Removes the association between an an attachment and a policy table.
     */
    postDisassociateTransitGatewayPolicyTable(req: operations.POSTDisassociateTransitGatewayPolicyTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateTransitGatewayPolicyTableResponse>;
    /**
     * Disassociates a resource attachment from a transit gateway route table.
     */
    postDisassociateTransitGatewayRouteTable(req: operations.POSTDisassociateTransitGatewayRouteTableRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateTransitGatewayRouteTableResponse>;
    /**
     * <note> <p>This API action is currently in <b>limited preview only</b>. If you are interested in using this feature, contact your account manager.</p> </note> <p>Removes an association between a branch network interface with a trunk network interface.</p>
     */
    postDisassociateTrunkInterface(req: operations.POSTDisassociateTrunkInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateTrunkInterfaceResponse>;
    /**
     * <p>Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must specify its association ID. You can get the association ID by using <a>DescribeVpcs</a>. You must detach or delete all gateways and resources that are associated with the CIDR block before you can disassociate it. </p> <p>You cannot disassociate the CIDR block with which you originally created the VPC (the primary CIDR block).</p>
     */
    postDisassociateVpcCidrBlock(req: operations.POSTDisassociateVpcCidrBlockRequest, config?: AxiosRequestConfig): Promise<operations.POSTDisassociateVpcCidrBlockResponse>;
    /**
     * Enables Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    postEnableAddressTransfer(req: operations.POSTEnableAddressTransferRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableAddressTransferResponse>;
    /**
     * Enables Infrastructure Performance subscriptions.
     */
    postEnableAwsNetworkPerformanceMetricSubscription(req: operations.POSTEnableAwsNetworkPerformanceMetricSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableAwsNetworkPerformanceMetricSubscriptionResponse>;
    /**
     * <p>Enables EBS encryption by default for your account in the current Region.</p> <p>After you enable encryption by default, the EBS volumes that you create are always encrypted, either using the default KMS key or the KMS key that you specified when you created each volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You can specify the default KMS key for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or <a>ResetEbsDefaultKmsKeyId</a>.</p> <p>Enabling encryption by default has no effect on the encryption status of your existing volumes.</p> <p>After you enable encryption by default, you can no longer launch instances using instance types that do not support encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported instance types</a>.</p>
     */
    postEnableEbsEncryptionByDefault(req: operations.POSTEnableEbsEncryptionByDefaultRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableEbsEncryptionByDefaultResponse>;
    /**
     * <p>When you enable faster launching for a Windows AMI, images are pre-provisioned, using snapshots to launch instances up to 65% faster. To create the optimized Windows image, Amazon EC2 launches an instance and runs through Sysprep steps, rebooting as required. Then it creates a set of reserved snapshots that are used for subsequent launches. The reserved snapshots are automatically replenished as they are used, depending on your settings for launch frequency.</p> <note> <p>To change these settings, you must own the AMI.</p> </note>
     */
    postEnableFastLaunch(req: operations.POSTEnableFastLaunchRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableFastLaunchResponse>;
    /**
     * <p>Enables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p> <p>You get the full benefit of fast snapshot restores after they enter the <code>enabled</code> state. To get the current state of fast snapshot restores, use <a>DescribeFastSnapshotRestores</a>. To disable fast snapshot restores, use <a>DisableFastSnapshotRestores</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html">Amazon EBS fast snapshot restore</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postEnableFastSnapshotRestores(req: operations.POSTEnableFastSnapshotRestoresRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableFastSnapshotRestoresResponse>;
    /**
     * <p>Enables deprecation of the specified AMI at the specified date and time.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deprecate.html">Deprecate an AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postEnableImageDeprecation(req: operations.POSTEnableImageDeprecationRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableImageDeprecationResponse>;
    /**
     * Enable an Organizations member account as the IPAM admin account. You cannot select the Organizations management account as the IPAM admin account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/enable-integ-ipam.html">Enable integration with Organizations</a> in the <i>Amazon VPC IPAM User Guide</i>.
     */
    postEnableIpamOrganizationAdminAccount(req: operations.POSTEnableIpamOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableIpamOrganizationAdminAccountResponse>;
    /**
     * <p>Establishes a trust relationship between Reachability Analyzer and Organizations. This operation must be performed by the management account for the organization.</p> <p>After you establish a trust relationship, a user in the management account or a delegated administrator account can run a cross-account analysis using resources from the member accounts.</p>
     */
    postEnableReachabilityAnalyzerOrganizationSharing(req: operations.POSTEnableReachabilityAnalyzerOrganizationSharingRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableReachabilityAnalyzerOrganizationSharingResponse>;
    /**
     * Enables access to the EC2 serial console of all instances for your account. By default, access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2 User Guide</i>.
     */
    postEnableSerialConsoleAccess(req: operations.POSTEnableSerialConsoleAccessRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableSerialConsoleAccessResponse>;
    /**
     * Enables the specified attachment to propagate routes to the specified propagation route table.
     */
    postEnableTransitGatewayRouteTablePropagation(req: operations.POSTEnableTransitGatewayRouteTablePropagationRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableTransitGatewayRouteTablePropagationResponse>;
    /**
     * Enables a virtual private gateway (VGW) to propagate routes to the specified route table of a VPC.
     */
    postEnableVgwRoutePropagation(req: operations.POSTEnableVgwRoutePropagationRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableVgwRoutePropagationResponse>;
    /**
     * Enables I/O operations for a volume that had I/O operations disabled because the data on the volume was potentially inconsistent.
     */
    postEnableVolumeIO(req: operations.POSTEnableVolumeIORequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableVolumeIOResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Enables a VPC for ClassicLink. You can then link EC2-Classic instances to your ClassicLink-enabled VPC to allow communication over private IP addresses. You cannot enable your VPC for ClassicLink if any of your VPC route tables have existing routes for address ranges within the <code>10.0.0.0/8</code> IP address range, excluding local routes for VPCs in the <code>10.0.0.0/16</code> and <code>10.1.0.0/16</code> IP address ranges. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postEnableVpcClassicLink(req: operations.POSTEnableVpcClassicLinkRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableVpcClassicLinkResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Enables a VPC to support DNS hostname resolution for ClassicLink. If enabled, the DNS hostname of a linked EC2-Classic instance resolves to its private IP address when addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname of an instance in a VPC resolves to its private IP address when addressed from a linked EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>You must specify a VPC ID in the request.</p>
     */
    postEnableVpcClassicLinkDnsSupport(req: operations.POSTEnableVpcClassicLinkDnsSupportRequest, config?: AxiosRequestConfig): Promise<operations.POSTEnableVpcClassicLinkDnsSupportResponse>;
    /**
     * Downloads the client certificate revocation list for the specified Client VPN endpoint.
     */
    postExportClientVpnClientCertificateRevocationList(req: operations.POSTExportClientVpnClientCertificateRevocationListRequest, config?: AxiosRequestConfig): Promise<operations.POSTExportClientVpnClientCertificateRevocationListResponse>;
    /**
     * Downloads the contents of the Client VPN endpoint configuration file for the specified Client VPN endpoint. The Client VPN endpoint configuration file includes the Client VPN endpoint and certificate information clients need to establish a connection with the Client VPN endpoint.
     */
    postExportClientVpnClientConfiguration(req: operations.POSTExportClientVpnClientConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.POSTExportClientVpnClientConfigurationResponse>;
    /**
     * Exports an Amazon Machine Image (AMI) to a VM file. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html">Exporting a VM directly from an Amazon Machine Image (AMI)</a> in the <i>VM Import/Export User Guide</i>.
     */
    postExportImage(req: operations.POSTExportImageRequest, config?: AxiosRequestConfig): Promise<operations.POSTExportImageResponse>;
    /**
     * <p>Exports routes from the specified transit gateway route table to the specified S3 bucket. By default, all routes are exported. Alternatively, you can filter by CIDR range.</p> <p>The routes are saved to the specified bucket in a JSON file. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-route-tables.html#tgw-export-route-tables">Export Route Tables to Amazon S3</a> in <i>Transit Gateways</i>.</p>
     */
    postExportTransitGatewayRoutes(req: operations.POSTExportTransitGatewayRoutesRequest, config?: AxiosRequestConfig): Promise<operations.POSTExportTransitGatewayRoutesResponse>;
    /**
     * Returns the IAM roles that are associated with the specified ACM (ACM) certificate. It also returns the name of the Amazon S3 bucket and the Amazon S3 object key where the certificate, certificate chain, and encrypted private key bundle are stored, and the ARN of the KMS key that's used to encrypt the private key.
     */
    postGetAssociatedEnclaveCertificateIamRoles(req: operations.POSTGetAssociatedEnclaveCertificateIamRolesRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetAssociatedEnclaveCertificateIamRolesResponse>;
    /**
     * Gets information about the IPv6 CIDR block associations for a specified IPv6 address pool.
     */
    postGetAssociatedIpv6PoolCidrs(req: operations.POSTGetAssociatedIpv6PoolCidrsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetAssociatedIpv6PoolCidrsResponse>;
    /**
     * Gets network performance data.
     */
    postGetAwsNetworkPerformanceData(req: operations.POSTGetAwsNetworkPerformanceDataRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetAwsNetworkPerformanceDataResponse>;
    /**
     * Gets usage information about a Capacity Reservation. If the Capacity Reservation is shared, it shows usage information for the Capacity Reservation owner and each Amazon Web Services account that is currently using the shared capacity. If the Capacity Reservation is not shared, it shows only the Capacity Reservation owner's usage.
     */
    postGetCapacityReservationUsage(req: operations.POSTGetCapacityReservationUsageRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetCapacityReservationUsageResponse>;
    /**
     * Describes the allocations from the specified customer-owned address pool.
     */
    postGetCoipPoolUsage(req: operations.POSTGetCoipPoolUsageRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetCoipPoolUsageResponse>;
    /**
     * <p>Gets the console output for the specified instance. For Linux instances, the instance console output displays the exact console output that would normally be displayed on a physical monitor attached to a computer. For Windows instances, the instance console output includes the last three system event log errors.</p> <p>By default, the console output returns buffered information that was posted shortly after an instance transition state (start, stop, reboot, or terminate). This information is available for at least one hour after the most recent post. Only the most recent 64 KB of console output is available.</p> <p>You can optionally retrieve the latest serial console output at any time during the instance lifecycle. This option is supported on instance types that use the Nitro hypervisor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html#instance-console-console-output">Instance console output</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postGetConsoleOutput(req: operations.POSTGetConsoleOutputRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetConsoleOutputResponse>;
    /**
     * <p>Retrieve a JPG-format screenshot of a running instance to help with troubleshooting.</p> <p>The returned content is Base64-encoded.</p>
     */
    postGetConsoleScreenshot(req: operations.POSTGetConsoleScreenshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetConsoleScreenshotResponse>;
    /**
     * <p>Describes the default credit option for CPU usage of a burstable performance instance family.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postGetDefaultCreditSpecification(req: operations.POSTGetDefaultCreditSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetDefaultCreditSpecificationResponse>;
    /**
     * <p>Describes the default KMS key for EBS encryption by default for your account in this Region. You can change the default KMS key for encryption by default using <a>ModifyEbsDefaultKmsKeyId</a> or <a>ResetEbsDefaultKmsKeyId</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postGetEbsDefaultKmsKeyId(req: operations.POSTGetEbsDefaultKmsKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetEbsDefaultKmsKeyIdResponse>;
    /**
     * <p>Describes whether EBS encryption by default is enabled for your account in the current Region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postGetEbsEncryptionByDefault(req: operations.POSTGetEbsEncryptionByDefaultRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetEbsEncryptionByDefaultResponse>;
    /**
     * <p>Generates a CloudFormation template that streamlines and automates the integration of VPC flow logs with Amazon Athena. This make it easier for you to query and gain insights from VPC flow logs data. Based on the information that you provide, we configure resources in the template to do the following:</p> <ul> <li> <p>Create a table in Athena that maps fields to a custom log format</p> </li> <li> <p>Create a Lambda function that updates the table with new partitions on a daily, weekly, or monthly basis</p> </li> <li> <p>Create a table partitioned between two timestamps in the past</p> </li> <li> <p>Create a set of named queries in Athena that you can use to get started quickly</p> </li> </ul>
     */
    postGetFlowLogsIntegrationTemplate(req: operations.POSTGetFlowLogsIntegrationTemplateRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetFlowLogsIntegrationTemplateResponse>;
    /**
     * Lists the resource groups to which a Capacity Reservation has been added.
     */
    postGetGroupsForCapacityReservation(req: operations.POSTGetGroupsForCapacityReservationRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetGroupsForCapacityReservationResponse>;
    /**
     * <p>Preview a reservation purchase with configurations that match those of your Dedicated Host. You must have active Dedicated Hosts in your account before you purchase a reservation.</p> <p>This is a preview of the <a>PurchaseHostReservation</a> action and does not result in the offering being purchased.</p>
     */
    postGetHostReservationPurchasePreview(req: operations.POSTGetHostReservationPurchasePreviewRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetHostReservationPurchasePreviewResponse>;
    /**
     * <p>Returns a list of instance types with the specified instance attributes. You can use the response to preview the instance types without launching instances. Note that the response does not consider capacity.</p> <p>When you specify multiple parameters, you get instance types that satisfy all of the specified parameters. If you specify multiple values for a parameter, you get instance types that satisfy any of the specified values.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html#spotfleet-get-instance-types-from-instance-requirements">Preview instance types with specified attributes</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for EC2 Fleet</a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html">Attribute-based instance type selection for Spot Fleet</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot placement score</a> in the <i>Amazon EC2 User Guide</i>, and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating an Auto Scaling group using attribute-based instance type selection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
     */
    postGetInstanceTypesFromInstanceRequirements(req: operations.POSTGetInstanceTypesFromInstanceRequirementsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetInstanceTypesFromInstanceRequirementsResponse>;
    /**
     * <p>A binary representation of the UEFI variable store. Only non-volatile variables are stored. This is a base64 encoded and zlib compressed binary value that must be properly encoded.</p> <p>When you use <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/register-image.html">register-image</a> to create an AMI, you can create an exact copy of your variable store by passing the UEFI data in the <code>UefiData</code> parameter. You can modify the UEFI data by using the <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on GitHub. You can use the tool to convert the UEFI data into a human-readable format (JSON), which you can inspect and modify, and then convert back into the binary format to use with register-image.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postGetInstanceUefiData(req: operations.POSTGetInstanceUefiDataRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetInstanceUefiDataResponse>;
    /**
     * Retrieve historical information about a CIDR within an IPAM scope. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/view-history-cidr-ipam.html">View the history of IP addresses</a> in the <i>Amazon VPC IPAM User Guide</i>.
     */
    postGetIpamAddressHistory(req: operations.POSTGetIpamAddressHistoryRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetIpamAddressHistoryResponse>;
    /**
     * Gets IPAM discovered accounts. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts. Only the IPAM account can get all discovered accounts in the organization.
     */
    postGetIpamDiscoveredAccounts(req: operations.POSTGetIpamDiscoveredAccountsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetIpamDiscoveredAccountsResponse>;
    /**
     * Returns the resource CIDRs that are monitored as part of a resource discovery. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses.
     */
    postGetIpamDiscoveredResourceCidrs(req: operations.POSTGetIpamDiscoveredResourceCidrsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetIpamDiscoveredResourceCidrsResponse>;
    /**
     * <p>Get a list of all the CIDR allocations in an IPAM pool.</p> <note> <p>If you use this action after <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AllocateIpamPoolCidr.html">AllocateIpamPoolCidr</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ReleaseIpamPoolAllocation.html">ReleaseIpamPoolAllocation</a>, note that all EC2 API actions follow an <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/query-api-troubleshooting.html#eventual-consistency">eventual consistency</a> model.</p> </note>
     */
    postGetIpamPoolAllocations(req: operations.POSTGetIpamPoolAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetIpamPoolAllocationsResponse>;
    /**
     * Get the CIDRs provisioned to an IPAM pool.
     */
    postGetIpamPoolCidrs(req: operations.POSTGetIpamPoolCidrsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetIpamPoolCidrsResponse>;
    /**
     * Returns resource CIDRs managed by IPAM in a given scope. If an IPAM is associated with more than one resource discovery, the resource CIDRs across all of the resource discoveries is returned. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
     */
    postGetIpamResourceCidrs(req: operations.POSTGetIpamResourceCidrsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetIpamResourceCidrsResponse>;
    /**
     * <p>Retrieves the configuration data of the specified instance. You can use this data to create a launch template. </p> <p>This action calls on other describe actions to get instance information. Depending on your instance configuration, you may need to allow the following actions in your IAM policy: <code>DescribeSpotInstanceRequests</code>, <code>DescribeInstanceCreditSpecifications</code>, <code>DescribeVolumes</code>, <code>DescribeInstanceAttribute</code>, and <code>DescribeElasticGpus</code>. Or, you can allow <code>describe*</code> depending on your instance requirements.</p>
     */
    postGetLaunchTemplateData(req: operations.POSTGetLaunchTemplateDataRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetLaunchTemplateDataResponse>;
    /**
     * Gets information about the resources that are associated with the specified managed prefix list.
     */
    postGetManagedPrefixListAssociations(req: operations.POSTGetManagedPrefixListAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetManagedPrefixListAssociationsResponse>;
    /**
     * Gets information about the entries for a specified managed prefix list.
     */
    postGetManagedPrefixListEntries(req: operations.POSTGetManagedPrefixListEntriesRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetManagedPrefixListEntriesResponse>;
    /**
     * Gets the findings for the specified Network Access Scope analysis.
     */
    postGetNetworkInsightsAccessScopeAnalysisFindings(req: operations.POSTGetNetworkInsightsAccessScopeAnalysisFindingsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetNetworkInsightsAccessScopeAnalysisFindingsResponse>;
    /**
     * Gets the content for the specified Network Access Scope.
     */
    postGetNetworkInsightsAccessScopeContent(req: operations.POSTGetNetworkInsightsAccessScopeContentRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetNetworkInsightsAccessScopeContentResponse>;
    /**
     * <p>Retrieves the encrypted administrator password for a running Windows instance.</p> <p>The Windows password is generated at boot by the <code>EC2Config</code> service or <code>EC2Launch</code> scripts (Windows Server 2016 and later). This usually only happens the first time an instance is launched. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/UsingConfig_WinAMI.html">EC2Config</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2launch.html">EC2Launch</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>For the <code>EC2Config</code> service, the password is not generated for rebundled AMIs unless <code>Ec2SetPassword</code> is enabled before bundling.</p> <p>The password is encrypted using the key pair that you specified when you launched the instance. You must provide the corresponding key pair file.</p> <p>When you launch an instance, password generation and encryption may take a few minutes. If you try to retrieve the password before it's available, the output returns an empty string. We recommend that you wait up to 15 minutes after launching an instance before trying to retrieve the generated password.</p>
     */
    postGetPasswordData(req: operations.POSTGetPasswordDataRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetPasswordDataResponse>;
    /**
     * Returns a quote and exchange information for exchanging one or more specified Convertible Reserved Instances for a new Convertible Reserved Instance. If the exchange cannot be performed, the reason is returned in the response. Use <a>AcceptReservedInstancesExchangeQuote</a> to perform the exchange.
     */
    postGetReservedInstancesExchangeQuote(req: operations.POSTGetReservedInstancesExchangeQuoteRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetReservedInstancesExchangeQuoteResponse>;
    /**
     * Retrieves the access status of your account to the EC2 serial console of all instances. By default, access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2 User Guide</i>.
     */
    postGetSerialConsoleAccessStatus(req: operations.POSTGetSerialConsoleAccessStatusRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetSerialConsoleAccessStatusResponse>;
    /**
     * <p>Calculates the Spot placement score for a Region or Availability Zone based on the specified target capacity and compute requirements.</p> <p>You can specify your compute requirements either by using <code>InstanceRequirementsWithMetadata</code> and letting Amazon EC2 choose the optimal instance types to fulfill your Spot request, or you can specify the instance types by using <code>InstanceTypes</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html">Spot placement score</a> in the Amazon EC2 User Guide.</p>
     */
    postGetSpotPlacementScores(req: operations.POSTGetSpotPlacementScoresRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetSpotPlacementScoresResponse>;
    /**
     * Gets information about the subnet CIDR reservations.
     */
    postGetSubnetCidrReservations(req: operations.POSTGetSubnetCidrReservationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetSubnetCidrReservationsResponse>;
    /**
     * Lists the route tables to which the specified resource attachment propagates routes.
     */
    postGetTransitGatewayAttachmentPropagations(req: operations.POSTGetTransitGatewayAttachmentPropagationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetTransitGatewayAttachmentPropagationsResponse>;
    /**
     * Gets information about the associations for the transit gateway multicast domain.
     */
    postGetTransitGatewayMulticastDomainAssociations(req: operations.POSTGetTransitGatewayMulticastDomainAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetTransitGatewayMulticastDomainAssociationsResponse>;
    /**
     * Gets a list of the transit gateway policy table associations.
     */
    postGetTransitGatewayPolicyTableAssociations(req: operations.POSTGetTransitGatewayPolicyTableAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetTransitGatewayPolicyTableAssociationsResponse>;
    /**
     * Returns a list of transit gateway policy table entries.
     */
    postGetTransitGatewayPolicyTableEntries(req: operations.POSTGetTransitGatewayPolicyTableEntriesRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetTransitGatewayPolicyTableEntriesResponse>;
    /**
     * Gets information about the prefix list references in a specified transit gateway route table.
     */
    postGetTransitGatewayPrefixListReferences(req: operations.POSTGetTransitGatewayPrefixListReferencesRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetTransitGatewayPrefixListReferencesResponse>;
    /**
     * Gets information about the associations for the specified transit gateway route table.
     */
    postGetTransitGatewayRouteTableAssociations(req: operations.POSTGetTransitGatewayRouteTableAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetTransitGatewayRouteTableAssociationsResponse>;
    /**
     * Gets information about the route table propagations for the specified transit gateway route table.
     */
    postGetTransitGatewayRouteTablePropagations(req: operations.POSTGetTransitGatewayRouteTablePropagationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetTransitGatewayRouteTablePropagationsResponse>;
    /**
     * Get the Verified Access policy associated with the endpoint.
     */
    postGetVerifiedAccessEndpointPolicy(req: operations.POSTGetVerifiedAccessEndpointPolicyRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetVerifiedAccessEndpointPolicyResponse>;
    /**
     * Shows the contents of the Verified Access policy associated with the group.
     */
    postGetVerifiedAccessGroupPolicy(req: operations.POSTGetVerifiedAccessGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetVerifiedAccessGroupPolicyResponse>;
    /**
     * Download an Amazon Web Services-provided sample configuration file to be used with the customer gateway device specified for your Site-to-Site VPN connection.
     */
    postGetVpnConnectionDeviceSampleConfiguration(req: operations.POSTGetVpnConnectionDeviceSampleConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetVpnConnectionDeviceSampleConfigurationResponse>;
    /**
     * Obtain a list of customer gateway devices for which sample configuration files can be provided. The request has no additional parameters. You can also see the list of device types with sample configuration files available under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer gateway device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.
     */
    postGetVpnConnectionDeviceTypes(req: operations.POSTGetVpnConnectionDeviceTypesRequest, config?: AxiosRequestConfig): Promise<operations.POSTGetVpnConnectionDeviceTypesResponse>;
    /**
     * <p>Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list.</p> <p>Uploading a client certificate revocation list resets existing client connections.</p>
     */
    postImportClientVpnClientCertificateRevocationList(req: operations.POSTImportClientVpnClientCertificateRevocationListRequest, config?: AxiosRequestConfig): Promise<operations.POSTImportClientVpnClientCertificateRevocationListResponse>;
    /**
     * <note> <p>To import your virtual machines (VMs) with a console-based experience, you can use the <i>Import virtual machine images to Amazon Web Services</i> template in the <a href="https://console.aws.amazon.com/migrationhub/orchestrator">Migration Hub Orchestrator console</a>. For more information, see the <a href="https://docs.aws.amazon.com/migrationhub-orchestrator/latest/userguide/import-vm-images.html"> <i>Migration Hub Orchestrator User Guide</i> </a>.</p> </note> <p>Import single or multi-volume disk images or EBS snapshots into an Amazon Machine Image (AMI).</p> <important> <p>Amazon Web Services VM Import/Export strongly recommends specifying a value for either the <code>--license-type</code> or <code>--usage-operation</code> parameter when you create a new VM Import task. This ensures your operating system is licensed appropriately and your billing is optimized.</p> </important> <p>For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html">Importing a VM as an image using VM Import/Export</a> in the <i>VM Import/Export User Guide</i>.</p>
     */
    postImportImage(req: operations.POSTImportImageRequest, config?: AxiosRequestConfig): Promise<operations.POSTImportImageResponse>;
    /**
     * <p>Creates an import instance task using metadata from the specified disk image.</p> <p>This API action supports only single-volume VMs. To import multi-volume VMs, use <a>ImportImage</a> instead.</p> <p>This API action is not supported by the Command Line Interface (CLI). For information about using the Amazon EC2 CLI, which is deprecated, see <a href="https://awsdocs.s3.amazonaws.com/EC2/ec2-clt.pdf#UsingVirtualMachinesinAmazonEC2">Importing a VM to Amazon EC2</a> in the <i>Amazon EC2 CLI Reference</i> PDF file.</p> <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
     */
    postImportInstance(req: operations.POSTImportInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTImportInstanceResponse>;
    /**
     * <p>Imports the public key from an RSA or ED25519 key pair that you created with a third-party tool. Compare this with <a>CreateKeyPair</a>, in which Amazon Web Services creates the key pair and gives the keys to you (Amazon Web Services keeps a copy of the public key). With ImportKeyPair, you create the key pair and give Amazon Web Services just the public key. The private key is never transferred between you and Amazon Web Services.</p> <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postImportKeyPair(req: operations.POSTImportKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.POSTImportKeyPairResponse>;
    /**
     * <p>Imports a disk into an EBS snapshot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-import-snapshot.html">Importing a disk as a snapshot using VM Import/Export</a> in the <i>VM Import/Export User Guide</i>.</p>
     */
    postImportSnapshot(req: operations.POSTImportSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.POSTImportSnapshotResponse>;
    /**
     * <p>Creates an import volume task using metadata from the specified disk image.</p> <p>This API action supports only single-volume VMs. To import multi-volume VMs, use <a>ImportImage</a> instead. To import a disk to a snapshot, use <a>ImportSnapshot</a> instead.</p> <p>This API action is not supported by the Command Line Interface (CLI). For information about using the Amazon EC2 CLI, which is deprecated, see <a href="https://awsdocs.s3.amazonaws.com/EC2/ec2-clt.pdf#importing-your-volumes-into-amazon-ebs">Importing Disks to Amazon EBS</a> in the <i>Amazon EC2 CLI Reference</i> PDF file.</p> <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
     */
    postImportVolume(req: operations.POSTImportVolumeRequest, config?: AxiosRequestConfig): Promise<operations.POSTImportVolumeResponse>;
    /**
     * Lists one or more AMIs that are currently in the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle Bin</a> in the <i>Amazon EC2 User Guide</i>.
     */
    postListImagesInRecycleBin(req: operations.POSTListImagesInRecycleBinRequest, config?: AxiosRequestConfig): Promise<operations.POSTListImagesInRecycleBinResponse>;
    /**
     * Lists one or more snapshots that are currently in the Recycle Bin.
     */
    postListSnapshotsInRecycleBin(req: operations.POSTListSnapshotsInRecycleBinRequest, config?: AxiosRequestConfig): Promise<operations.POSTListSnapshotsInRecycleBinResponse>;
    /**
     * Modifies an attribute of the specified Elastic IP address. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.
     */
    postModifyAddressAttribute(req: operations.POSTModifyAddressAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyAddressAttributeResponse>;
    /**
     * <p>Changes the opt-in status of the Local Zone and Wavelength Zone group for your account.</p> <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html"> DescribeAvailabilityZones</a> to view the value for <code>GroupName</code>.</p>
     */
    postModifyAvailabilityZoneGroup(req: operations.POSTModifyAvailabilityZoneGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyAvailabilityZoneGroupResponse>;
    /**
     * Modifies a Capacity Reservation's capacity and the conditions under which it is to be released. You cannot change a Capacity Reservation's instance type, EBS optimization, instance store settings, platform, Availability Zone, or instance eligibility. If you need to modify any of these attributes, we recommend that you cancel the Capacity Reservation, and then create a new one with the required attributes.
     */
    postModifyCapacityReservation(req: operations.POSTModifyCapacityReservationRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyCapacityReservationResponse>;
    /**
     * <p>Modifies a Capacity Reservation Fleet.</p> <p>When you modify the total target capacity of a Capacity Reservation Fleet, the Fleet automatically creates new Capacity Reservations, or modifies or cancels existing Capacity Reservations in the Fleet to meet the new total target capacity. When you modify the end date for the Fleet, the end dates for all of the individual Capacity Reservations in the Fleet are updated accordingly.</p>
     */
    postModifyCapacityReservationFleet(req: operations.POSTModifyCapacityReservationFleetRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyCapacityReservationFleetResponse>;
    /**
     * Modifies the specified Client VPN endpoint. Modifying the DNS server resets existing client connections.
     */
    postModifyClientVpnEndpoint(req: operations.POSTModifyClientVpnEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyClientVpnEndpointResponse>;
    /**
     * <p>Modifies the default credit option for CPU usage of burstable performance instances. The default credit option is set at the account level per Amazon Web Services Region, and is specified per instance family. All new burstable performance instances in the account launch using the default credit option.</p> <p> <code>ModifyDefaultCreditSpecification</code> is an asynchronous operation, which works at an Amazon Web Services Region level and modifies the credit option for each Availability Zone. All zones in a Region are updated within five minutes. But if instances are launched during this operation, they might not get the new credit option until the zone is updated. To verify whether the update has occurred, you can call <code>GetDefaultCreditSpecification</code> and check <code>DefaultCreditSpecification</code> for updates.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postModifyDefaultCreditSpecification(req: operations.POSTModifyDefaultCreditSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyDefaultCreditSpecificationResponse>;
    /**
     * <p>Changes the default KMS key for EBS encryption by default for your account in this Region.</p> <p>Amazon Web Services creates a unique Amazon Web Services managed KMS key in each Region for use with encryption by default. If you change the default KMS key to a symmetric customer managed KMS key, it is used instead of the Amazon Web Services managed KMS key. To reset the default KMS key to the Amazon Web Services managed KMS key for EBS, use <a>ResetEbsDefaultKmsKeyId</a>. Amazon EBS does not support asymmetric KMS keys.</p> <p>If you delete or disable the customer managed KMS key that you specified for use with encryption by default, your instances will fail to launch.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postModifyEbsDefaultKmsKeyId(req: operations.POSTModifyEbsDefaultKmsKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyEbsDefaultKmsKeyIdResponse>;
    /**
     * <p>Modifies the specified EC2 Fleet.</p> <p>You can only modify an EC2 Fleet request of type <code>maintain</code>.</p> <p>While the EC2 Fleet is being modified, it is in the <code>modifying</code> state.</p> <p>To scale up your EC2 Fleet, increase its target capacity. The EC2 Fleet launches the additional Spot Instances according to the allocation strategy for the EC2 Fleet request. If the allocation strategy is <code>lowest-price</code>, the EC2 Fleet launches instances using the Spot Instance pool with the lowest price. If the allocation strategy is <code>diversified</code>, the EC2 Fleet distributes the instances across the Spot Instance pools. If the allocation strategy is <code>capacity-optimized</code>, EC2 Fleet launches instances from Spot Instance pools with optimal capacity for the number of instances that are launching.</p> <p>To scale down your EC2 Fleet, decrease its target capacity. First, the EC2 Fleet cancels any open requests that exceed the new target capacity. You can request that the EC2 Fleet terminate Spot Instances until the size of the fleet no longer exceeds the new target capacity. If the allocation strategy is <code>lowest-price</code>, the EC2 Fleet terminates the instances with the highest price per unit. If the allocation strategy is <code>capacity-optimized</code>, the EC2 Fleet terminates the instances in the Spot Instance pools that have the least available Spot Instance capacity. If the allocation strategy is <code>diversified</code>, the EC2 Fleet terminates instances across the Spot Instance pools. Alternatively, you can request that the EC2 Fleet keep the fleet at its current size, but not replace any Spot Instances that are interrupted or that you terminate manually.</p> <p>If you are finished with your EC2 Fleet for now, but will use it again later, you can set the target capacity to 0.</p>
     */
    postModifyFleet(req: operations.POSTModifyFleetRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyFleetResponse>;
    /**
     * Modifies the specified attribute of the specified Amazon FPGA Image (AFI).
     */
    postModifyFpgaImageAttribute(req: operations.POSTModifyFpgaImageAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyFpgaImageAttributeResponse>;
    /**
     * <p>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled, any instances that you launch with a tenancy of <code>host</code> but without a specific host ID are placed onto any available Dedicated Host in your account that has auto-placement enabled. When auto-placement is disabled, you need to provide a host ID to have the instance launch onto a specific host. If no host ID is provided, the instance is launched onto a suitable host with auto-placement enabled.</p> <p>You can also use this API action to modify a Dedicated Host to support either multiple instance types in an instance family, or to support a specific instance type only.</p>
     */
    postModifyHosts(req: operations.POSTModifyHostsRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyHostsResponse>;
    /**
     * <p>Modifies the ID format for the specified resource on a per-Region basis. You can specify that resources should receive longer IDs (17-character IDs) when they are created.</p> <p>This request can only be used to modify longer ID settings for resource types that are within the opt-in period. Resources currently in their opt-in period include: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p> <p>This setting applies to the IAM user who makes the request; it does not apply to the entire Amazon Web Services account. By default, an IAM user defaults to the same settings as the root user. If you're using this action as the root user, then these settings apply to the entire account, unless an IAM user explicitly overrides these settings for themselves. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Resources created with longer IDs are visible to all IAM roles and users, regardless of these settings and provided that they have permission to use the relevant <code>Describe</code> command for the resource type.</p>
     */
    postModifyIdFormat(req: operations.POSTModifyIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyIdFormatResponse>;
    /**
     * <p>Modifies the ID format of a resource for a specified IAM user, IAM role, or the root user for an account; or all IAM users, IAM roles, and the root user for an account. You can specify that resources should receive longer IDs (17-character IDs) when they are created. </p> <p>This request can only be used to modify longer ID settings for resource types that are within the opt-in period. Resources currently in their opt-in period include: <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> | <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> | <code>export-task</code> | <code>flow-log</code> | <code>image</code> | <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code> | <code>network-acl-association</code> | <code>network-interface</code> | <code>network-interface-attachment</code> | <code>prefix-list</code> | <code>route-table</code> | <code>route-table-association</code> | <code>security-group</code> | <code>subnet</code> | <code>subnet-cidr-block-association</code> | <code>vpc</code> | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p> <p>This setting applies to the principal specified in the request; it does not apply to the principal that makes the request. </p> <p>Resources created with longer IDs are visible to all IAM roles and users, regardless of these settings and provided that they have permission to use the relevant <code>Describe</code> command for the resource type.</p>
     */
    postModifyIdentityIdFormat(req: operations.POSTModifyIdentityIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyIdentityIdFormatResponse>;
    /**
     * <p>Modifies the specified attribute of the specified AMI. You can specify only one attribute at a time.</p> <p>To specify the attribute, you can use the <code>Attribute</code> parameter, or one of the following parameters: <code>Description</code>, <code>ImdsSupport</code>, or <code>LaunchPermission</code>.</p> <p>Images with an Amazon Web Services Marketplace product code cannot be made public.</p> <p>To enable the SriovNetSupport enhanced networking attribute of an image, enable SriovNetSupport on an instance and create an AMI from the instance.</p>
     */
    postModifyImageAttribute(req: operations.POSTModifyImageAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyImageAttributeResponse>;
    /**
     * <p>Modifies the specified attribute of the specified instance. You can specify only one attribute at a time.</p> <p> <b>Note: </b>Using this action to change the security groups associated with an elastic network interface (ENI) attached to an instance in a VPC can result in an error if the instance has more than one ENI. To change the security groups associated with an ENI attached to an instance that has multiple ENIs, we recommend that you use the <a>ModifyNetworkInterfaceAttribute</a> action.</p> <p>To modify some attributes, the instance must be stopped. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingAttributesWhileInstanceStopped.html">Modify a stopped instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postModifyInstanceAttribute(req: operations.POSTModifyInstanceAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyInstanceAttributeResponse>;
    /**
     * Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an instance to target a specific Capacity Reservation, run in any <code>open</code> Capacity Reservation with matching attributes, or run On-Demand Instance capacity.
     */
    postModifyInstanceCapacityReservationAttributes(req: operations.POSTModifyInstanceCapacityReservationAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyInstanceCapacityReservationAttributesResponse>;
    /**
     * <p>Modifies the credit option for CPU usage on a running or stopped burstable performance instance. The credit options are <code>standard</code> and <code>unlimited</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postModifyInstanceCreditSpecification(req: operations.POSTModifyInstanceCreditSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyInstanceCreditSpecificationResponse>;
    /**
     * Modifies the start time for a scheduled Amazon EC2 instance event.
     */
    postModifyInstanceEventStartTime(req: operations.POSTModifyInstanceEventStartTimeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyInstanceEventStartTimeResponse>;
    /**
     * <p>Modifies the specified event window.</p> <p>You can define either a set of time ranges or a cron expression when modifying the event window, but not both.</p> <p>To modify the targets associated with the event window, use the <a>AssociateInstanceEventWindow</a> and <a>DisassociateInstanceEventWindow</a> API.</p> <p>If Amazon Web Services has already scheduled an event, modifying an event window won't change the time of the scheduled event.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/event-windows.html">Define event windows for scheduled events</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postModifyInstanceEventWindow(req: operations.POSTModifyInstanceEventWindowRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyInstanceEventWindowResponse>;
    /**
     * Modifies the recovery behavior of your instance to disable simplified automatic recovery or set the recovery behavior to default. The default configuration will not enable simplified automatic recovery for an unsupported instance type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.
     */
    postModifyInstanceMaintenanceOptions(req: operations.POSTModifyInstanceMaintenanceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyInstanceMaintenanceOptionsResponse>;
    /**
     * Modify the instance metadata parameters on a running or stopped instance. When you modify the parameters on a stopped instance, they are applied when the instance is started. When you modify the parameters on a running instance, the API responds with a state of “pending”. After the parameter modifications are successfully applied to the instance, the state of the modifications changes from “pending” to “applied” in subsequent describe-instances API calls. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the <i>Amazon EC2 User Guide</i>.
     */
    postModifyInstanceMetadataOptions(req: operations.POSTModifyInstanceMetadataOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyInstanceMetadataOptionsResponse>;
    /**
     * <p>Modifies the placement attributes for a specified instance. You can do the following:</p> <ul> <li> <p>Modify the affinity between an instance and a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated Host</a>. When affinity is set to <code>host</code> and the instance is not associated with a specific Dedicated Host, the next time the instance is launched, it is automatically associated with the host on which it lands. If the instance is restarted or rebooted, this relationship persists.</p> </li> <li> <p>Change the Dedicated Host with which an instance is associated.</p> </li> <li> <p>Change the instance tenancy of an instance.</p> </li> <li> <p>Move an instance to or from a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">placement group</a>.</p> </li> </ul> <p>At least one attribute for affinity, host ID, tenancy, or placement group name must be specified in the request. Affinity and tenancy can be modified in the same request.</p> <p>To modify the host ID, tenancy, placement group, or partition for an instance, the instance must be in the <code>stopped</code> state.</p>
     */
    postModifyInstancePlacement(req: operations.POSTModifyInstancePlacementRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyInstancePlacementResponse>;
    /**
     * Modify the configurations of an IPAM.
     */
    postModifyIpam(req: operations.POSTModifyIpamRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyIpamResponse>;
    /**
     * <p>Modify the configurations of an IPAM pool.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/mod-pool-ipam.html">Modify a pool</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    postModifyIpamPool(req: operations.POSTModifyIpamPoolRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyIpamPoolResponse>;
    /**
     * <p>Modify a resource CIDR. You can use this action to transfer resource CIDRs between scopes and ignore resource CIDRs that you do not want to manage. If set to false, the resource will not be tracked for overlap, it cannot be auto-imported into a pool, and it will be removed from any pool it has an allocation in.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/move-resource-ipam.html">Move resource CIDRs between scopes</a> and <a href="https://docs.aws.amazon.com/vpc/latest/ipam/change-monitoring-state-ipam.html">Change the monitoring state of resource CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
     */
    postModifyIpamResourceCidr(req: operations.POSTModifyIpamResourceCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyIpamResourceCidrResponse>;
    /**
     * Modifies a resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
     */
    postModifyIpamResourceDiscovery(req: operations.POSTModifyIpamResourceDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyIpamResourceDiscoveryResponse>;
    /**
     * Modify an IPAM scope.
     */
    postModifyIpamScope(req: operations.POSTModifyIpamScopeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyIpamScopeResponse>;
    /**
     * Modifies a launch template. You can specify which version of the launch template to set as the default version. When launching an instance, the default version applies when a launch template version is not specified.
     */
    postModifyLaunchTemplate(req: operations.POSTModifyLaunchTemplateRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyLaunchTemplateResponse>;
    /**
     * Modifies the specified local gateway route.
     */
    postModifyLocalGatewayRoute(req: operations.POSTModifyLocalGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyLocalGatewayRouteResponse>;
    /**
     * <p>Modifies the specified managed prefix list.</p> <p>Adding or removing entries in a prefix list creates a new version of the prefix list. Changing the name of the prefix list does not affect the version.</p> <p>If you specify a current version number that does not match the true current version number, the request fails.</p>
     */
    postModifyManagedPrefixList(req: operations.POSTModifyManagedPrefixListRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyManagedPrefixListResponse>;
    /**
     * Modifies the specified network interface attribute. You can specify only one attribute at a time. You can use this action to attach and detach security groups from an existing EC2 instance.
     */
    postModifyNetworkInterfaceAttribute(req: operations.POSTModifyNetworkInterfaceAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyNetworkInterfaceAttributeResponse>;
    /**
     * Modifies the options for instance hostnames for the specified instance.
     */
    postModifyPrivateDnsNameOptions(req: operations.POSTModifyPrivateDnsNameOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyPrivateDnsNameOptionsResponse>;
    /**
     * <p>Modifies the configuration of your Reserved Instances, such as the Availability Zone, instance count, or instance type. The Reserved Instances to be modified must be identical, except for Availability Zone, network platform, and instance type.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon EC2 User Guide</i>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postModifyReservedInstances(req: operations.POSTModifyReservedInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyReservedInstancesResponse>;
    /**
     * Modifies the rules of a security group.
     */
    postModifySecurityGroupRules(req: operations.POSTModifySecurityGroupRulesRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifySecurityGroupRulesResponse>;
    /**
     * <p>Adds or removes permission settings for the specified snapshot. You may add or remove specified Amazon Web Services account IDs from a snapshot's list of create volume permissions, but you cannot do both in a single operation. If you need to both add and remove account IDs for a snapshot, you must use multiple operations. You can make up to 500 modifications to a snapshot in a single operation.</p> <p>Encrypted snapshots and snapshots with Amazon Web Services Marketplace product codes cannot be made public. Snapshots encrypted with your default KMS key cannot be shared with other accounts.</p> <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Share a snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postModifySnapshotAttribute(req: operations.POSTModifySnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifySnapshotAttributeResponse>;
    /**
     * Archives an Amazon EBS snapshot. When you archive a snapshot, it is converted to a full snapshot that includes all of the blocks of data that were written to the volume at the time the snapshot was created, and moved from the standard tier to the archive tier. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-archive.html">Archive Amazon EBS snapshots</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
     */
    postModifySnapshotTier(req: operations.POSTModifySnapshotTierRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifySnapshotTierResponse>;
    /**
     * <p>Modifies the specified Spot Fleet request.</p> <p>You can only modify a Spot Fleet request of type <code>maintain</code>.</p> <p>While the Spot Fleet request is being modified, it is in the <code>modifying</code> state.</p> <p>To scale up your Spot Fleet, increase its target capacity. The Spot Fleet launches the additional Spot Instances according to the allocation strategy for the Spot Fleet request. If the allocation strategy is <code>lowestPrice</code>, the Spot Fleet launches instances using the Spot Instance pool with the lowest price. If the allocation strategy is <code>diversified</code>, the Spot Fleet distributes the instances across the Spot Instance pools. If the allocation strategy is <code>capacityOptimized</code>, Spot Fleet launches instances from Spot Instance pools with optimal capacity for the number of instances that are launching.</p> <p>To scale down your Spot Fleet, decrease its target capacity. First, the Spot Fleet cancels any open requests that exceed the new target capacity. You can request that the Spot Fleet terminate Spot Instances until the size of the fleet no longer exceeds the new target capacity. If the allocation strategy is <code>lowestPrice</code>, the Spot Fleet terminates the instances with the highest price per unit. If the allocation strategy is <code>capacityOptimized</code>, the Spot Fleet terminates the instances in the Spot Instance pools that have the least available Spot Instance capacity. If the allocation strategy is <code>diversified</code>, the Spot Fleet terminates instances across the Spot Instance pools. Alternatively, you can request that the Spot Fleet keep the fleet at its current size, but not replace any Spot Instances that are interrupted or that you terminate manually.</p> <p>If you are finished with your Spot Fleet for now, but will use it again later, you can set the target capacity to 0.</p>
     */
    postModifySpotFleetRequest(req: operations.POSTModifySpotFleetRequestRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifySpotFleetRequestResponse>;
    /**
     * <p>Modifies a subnet attribute. You can only modify one attribute at a time.</p> <p>Use this action to modify subnets on Amazon Web Services Outposts.</p> <ul> <li> <p>To modify a subnet on an Outpost rack, set both <code>MapCustomerOwnedIpOnLaunch</code> and <code>CustomerOwnedIpv4Pool</code>. These two parameters act as a single attribute.</p> </li> <li> <p>To modify a subnet on an Outpost server, set either <code>EnableLniAtDeviceIndex</code> or <code>DisableLniAtDeviceIndex</code>.</p> </li> </ul> <p>For more information about Amazon Web Services Outposts, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/outposts/latest/userguide/how-servers-work.html">Outpost servers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/outposts/latest/userguide/how-racks-work.html">Outpost racks</a> </p> </li> </ul>
     */
    postModifySubnetAttribute(req: operations.POSTModifySubnetAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifySubnetAttributeResponse>;
    /**
     * <p>Allows or restricts mirroring network services.</p> <p> By default, Amazon DNS network services are not eligible for Traffic Mirror. Use <code>AddNetworkServices</code> to add network services to a Traffic Mirror filter. When a network service is added to the Traffic Mirror filter, all traffic related to that network service will be mirrored. When you no longer want to mirror network services, use <code>RemoveNetworkServices</code> to remove the network services from the Traffic Mirror filter. </p>
     */
    postModifyTrafficMirrorFilterNetworkServices(req: operations.POSTModifyTrafficMirrorFilterNetworkServicesRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyTrafficMirrorFilterNetworkServicesResponse>;
    /**
     * <p>Modifies the specified Traffic Mirror rule.</p> <p> <code>DestinationCidrBlock</code> and <code>SourceCidrBlock</code> must both be an IPv4 range or an IPv6 range.</p>
     */
    postModifyTrafficMirrorFilterRule(req: operations.POSTModifyTrafficMirrorFilterRuleRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyTrafficMirrorFilterRuleResponse>;
    /**
     * Modifies a Traffic Mirror session.
     */
    postModifyTrafficMirrorSession(req: operations.POSTModifyTrafficMirrorSessionRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyTrafficMirrorSessionResponse>;
    /**
     * Modifies the specified transit gateway. When you modify a transit gateway, the modified options are applied to new transit gateway attachments only. Your existing transit gateway attachments are not modified.
     */
    postModifyTransitGateway(req: operations.POSTModifyTransitGatewayRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyTransitGatewayResponse>;
    /**
     * Modifies a reference (route) to a prefix list in a specified transit gateway route table.
     */
    postModifyTransitGatewayPrefixListReference(req: operations.POSTModifyTransitGatewayPrefixListReferenceRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyTransitGatewayPrefixListReferenceResponse>;
    /**
     * Modifies the specified VPC attachment.
     */
    postModifyTransitGatewayVpcAttachment(req: operations.POSTModifyTransitGatewayVpcAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyTransitGatewayVpcAttachmentResponse>;
    /**
     * Modifies the configuration of an Amazon Web Services Verified Access endpoint.
     */
    postModifyVerifiedAccessEndpoint(req: operations.POSTModifyVerifiedAccessEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVerifiedAccessEndpointResponse>;
    /**
     * Modifies the specified Verified Access endpoint policy.
     */
    postModifyVerifiedAccessEndpointPolicy(req: operations.POSTModifyVerifiedAccessEndpointPolicyRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVerifiedAccessEndpointPolicyResponse>;
    /**
     * Modifies the specified Verified Access group configuration.
     */
    postModifyVerifiedAccessGroup(req: operations.POSTModifyVerifiedAccessGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVerifiedAccessGroupResponse>;
    /**
     * Modifies the specified Verified Access group policy.
     */
    postModifyVerifiedAccessGroupPolicy(req: operations.POSTModifyVerifiedAccessGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVerifiedAccessGroupPolicyResponse>;
    /**
     * Modifies the configuration of the specified Verified Access instance.
     */
    postModifyVerifiedAccessInstance(req: operations.POSTModifyVerifiedAccessInstanceRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVerifiedAccessInstanceResponse>;
    /**
     * Modifies the logging configuration for the specified Amazon Web Services Verified Access instance.
     */
    postModifyVerifiedAccessInstanceLoggingConfiguration(req: operations.POSTModifyVerifiedAccessInstanceLoggingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVerifiedAccessInstanceLoggingConfigurationResponse>;
    /**
     * Modifies the configuration of the specified Amazon Web Services Verified Access trust provider.
     */
    postModifyVerifiedAccessTrustProvider(req: operations.POSTModifyVerifiedAccessTrustProviderRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVerifiedAccessTrustProviderResponse>;
    /**
     * <p>You can modify several parameters of an existing EBS volume, including volume size, volume type, and IOPS capacity. If your EBS volume is attached to a current-generation EC2 instance type, you might be able to apply these changes without stopping the instance or detaching the volume from it. For more information about modifying EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modify-volume.html">Amazon EBS Elastic Volumes</a> (Linux instances) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-modify-volume.html">Amazon EBS Elastic Volumes</a> (Windows instances).</p> <p>When you complete a resize operation on your volume, you need to extend the volume's file-system size to take advantage of the new storage capacity. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-expand-volume.html#recognize-expanded-volume-linux">Extend a Linux file system</a> or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ebs-expand-volume.html#recognize-expanded-volume-windows">Extend a Windows file system</a>.</p> <p> You can use CloudWatch Events to check the status of a modification to an EBS volume. For information about CloudWatch Events, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/">Amazon CloudWatch Events User Guide</a>. You can also track the status of a modification using <a>DescribeVolumesModifications</a>. For information about tracking status changes using either method, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-modifications.html">Monitor the progress of volume modifications</a>.</p> <p>With previous-generation instance types, resizing an EBS volume might require detaching and reattaching the volume or stopping and restarting the instance.</p> <p>After modifying a volume, you must wait at least six hours and ensure that the volume is in the <code>in-use</code> or <code>available</code> state before you can modify the same volume. This is sometimes referred to as a cooldown period.</p>
     */
    postModifyVolume(req: operations.POSTModifyVolumeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVolumeResponse>;
    /**
     * <p>Modifies a volume attribute.</p> <p>By default, all I/O operations for the volume are suspended when the data on the volume is determined to be potentially inconsistent, to prevent undetectable, latent data corruption. The I/O access to the volume can be resumed by first enabling I/O access and then checking the data consistency on your volume.</p> <p>You can change the default behavior to resume I/O operations. We recommend that you change this only for boot volumes or for volumes that are stateless or disposable.</p>
     */
    postModifyVolumeAttribute(req: operations.POSTModifyVolumeAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVolumeAttributeResponse>;
    /**
     * Modifies the specified attribute of the specified VPC.
     */
    postModifyVpcAttribute(req: operations.POSTModifyVpcAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpcAttributeResponse>;
    /**
     * Modifies attributes of a specified VPC endpoint. The attributes that you can modify depend on the type of VPC endpoint (interface, gateway, or Gateway Load Balancer). For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/">Amazon Web Services PrivateLink Guide</a>.
     */
    postModifyVpcEndpoint(req: operations.POSTModifyVpcEndpointRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpcEndpointResponse>;
    /**
     * Modifies a connection notification for VPC endpoint or VPC endpoint service. You can change the SNS topic for the notification, or the events for which to be notified.
     */
    postModifyVpcEndpointConnectionNotification(req: operations.POSTModifyVpcEndpointConnectionNotificationRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpcEndpointConnectionNotificationResponse>;
    /**
     * <p>Modifies the attributes of your VPC endpoint service configuration. You can change the Network Load Balancers or Gateway Load Balancers for your service, and you can specify whether acceptance is required for requests to connect to your endpoint service through an interface VPC endpoint.</p> <p>If you set or modify the private DNS name, you must prove that you own the private DNS domain name.</p>
     */
    postModifyVpcEndpointServiceConfiguration(req: operations.POSTModifyVpcEndpointServiceConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpcEndpointServiceConfigurationResponse>;
    /**
     * Modifies the payer responsibility for your VPC endpoint service.
     */
    postModifyVpcEndpointServicePayerResponsibility(req: operations.POSTModifyVpcEndpointServicePayerResponsibilityRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpcEndpointServicePayerResponsibilityResponse>;
    /**
     * <p>Modifies the permissions for your VPC endpoint service. You can add or remove permissions for service consumers (Amazon Web Services accounts, users, and IAM roles) to connect to your endpoint service.</p> <p>If you grant permissions to all principals, the service is public. Any users who know the name of a public service can send a request to attach an endpoint. If the service does not require manual approval, attachments are automatically approved.</p>
     */
    postModifyVpcEndpointServicePermissions(req: operations.POSTModifyVpcEndpointServicePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpcEndpointServicePermissionsResponse>;
    /**
     * <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>Modifies the VPC peering connection options on one side of a VPC peering connection. You can do the following:</p> <ul> <li> <p>Enable/disable communication over the peering connection between an EC2-Classic instance that's linked to your VPC (using ClassicLink) and instances in the peer VPC.</p> </li> <li> <p>Enable/disable communication over the peering connection between instances in your VPC and an EC2-Classic instance that's linked to the peer VPC.</p> </li> <li> <p>Enable/disable the ability to resolve public DNS hostnames to private IP addresses when queried from instances in the peer VPC.</p> </li> </ul> <p>If the peered VPCs are in the same Amazon Web Services account, you can enable DNS resolution for queries from the local VPC. This ensures that queries from the local VPC resolve to private IP addresses in the peer VPC. This option is not available if the peered VPCs are in different Amazon Web Services accounts or different Regions. For peered VPCs in different Amazon Web Services accounts, each Amazon Web Services account owner must initiate a separate request to modify the peering connection options. For inter-region peering connections, you must use the Region for the requester VPC to modify the requester VPC peering options and the Region for the accepter VPC to modify the accepter VPC peering options. To verify which VPCs are the accepter and the requester for a VPC peering connection, use the <a>DescribeVpcPeeringConnections</a> command.</p>
     */
    postModifyVpcPeeringConnectionOptions(req: operations.POSTModifyVpcPeeringConnectionOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpcPeeringConnectionOptionsResponse>;
    /**
     * <p>Modifies the instance tenancy attribute of the specified VPC. You can change the instance tenancy attribute of a VPC to <code>default</code> only. You cannot change the instance tenancy attribute to <code>dedicated</code>.</p> <p>After you modify the tenancy of the VPC, any new instances that you launch into the VPC have a tenancy of <code>default</code>, unless you specify otherwise during launch. The tenancy of any existing instances in the VPC is not affected.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postModifyVpcTenancy(req: operations.POSTModifyVpcTenancyRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpcTenancyResponse>;
    /**
     * <p>Modifies the customer gateway or the target gateway of an Amazon Web Services Site-to-Site VPN connection. To modify the target gateway, the following migration options are available:</p> <ul> <li> <p>An existing virtual private gateway to a new virtual private gateway</p> </li> <li> <p>An existing virtual private gateway to a transit gateway</p> </li> <li> <p>An existing transit gateway to a new transit gateway</p> </li> <li> <p>An existing transit gateway to a virtual private gateway</p> </li> </ul> <p>Before you perform the migration to the new gateway, you must configure the new gateway. Use <a>CreateVpnGateway</a> to create a virtual private gateway, or <a>CreateTransitGateway</a> to create a transit gateway.</p> <p>This step is required when you migrate from a virtual private gateway with static routes to a transit gateway. </p> <p>You must delete the static routes before you migrate to the new gateway.</p> <p>Keep a copy of the static route before you delete it. You will need to add back these routes to the transit gateway after the VPN connection migration is complete.</p> <p>After you migrate to the new gateway, you might need to modify your VPC route table. Use <a>CreateRoute</a> and <a>DeleteRoute</a> to make the changes described in <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/modify-vpn-target.html#step-update-routing">Update VPC route tables</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p> <p>When the new gateway is a transit gateway, modify the transit gateway route table to allow traffic between the VPC and the Amazon Web Services Site-to-Site VPN connection. Use <a>CreateTransitGatewayRoute</a> to add the routes.</p> <p> If you deleted VPN static routes, you must add the static routes to the transit gateway route table.</p> <p>After you perform this operation, the VPN endpoint's IP addresses on the Amazon Web Services side and the tunnel options remain intact. Your Amazon Web Services Site-to-Site VPN connection will be temporarily unavailable for a brief period while we provision the new endpoints.</p>
     */
    postModifyVpnConnection(req: operations.POSTModifyVpnConnectionRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpnConnectionResponse>;
    /**
     * <p>Modifies the connection options for your Site-to-Site VPN connection.</p> <p>When you modify the VPN connection options, the VPN endpoint IP addresses on the Amazon Web Services side do not change, and the tunnel options do not change. Your VPN connection will be temporarily unavailable for a brief period while the VPN connection is updated.</p>
     */
    postModifyVpnConnectionOptions(req: operations.POSTModifyVpnConnectionOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpnConnectionOptionsResponse>;
    /**
     * Modifies the VPN tunnel endpoint certificate.
     */
    postModifyVpnTunnelCertificate(req: operations.POSTModifyVpnTunnelCertificateRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpnTunnelCertificateResponse>;
    /**
     * Modifies the options for a VPN tunnel in an Amazon Web Services Site-to-Site VPN connection. You can modify multiple options for a tunnel in a single request, but you can only modify one tunnel at a time. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html">Site-to-Site VPN tunnel options for your Site-to-Site VPN connection</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.
     */
    postModifyVpnTunnelOptions(req: operations.POSTModifyVpnTunnelOptionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyVpnTunnelOptionsResponse>;
    /**
     * <p>Enables detailed monitoring for a running instance. Otherwise, basic monitoring is enabled. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitor your instances using CloudWatch</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>To disable detailed monitoring, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_UnmonitorInstances.html">UnmonitorInstances</a>.</p>
     */
    postMonitorInstances(req: operations.POSTMonitorInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTMonitorInstancesResponse>;
    /**
     * <p>Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The Elastic IP address must be allocated to your account for more than 24 hours, and it must not be associated with an instance. After the Elastic IP address is moved, it is no longer available for use in the EC2-Classic platform, unless you move it back using the <a>RestoreAddressToClassic</a> request. You cannot move an Elastic IP address that was originally allocated for use in the EC2-VPC platform to the EC2-Classic platform.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postMoveAddressToVpc(req: operations.POSTMoveAddressToVpcRequest, config?: AxiosRequestConfig): Promise<operations.POSTMoveAddressToVpcResponse>;
    /**
     * <p>Move a BYOIPv4 CIDR to IPAM from a public IPv4 pool.</p> <p>If you already have a BYOIPv4 CIDR with Amazon Web Services, you can move the CIDR to IPAM from a public IPv4 pool. You cannot move an IPv6 CIDR to IPAM. If you are bringing a new IP address to Amazon Web Services for the first time, complete the steps in <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoip-ipam.html">Tutorial: BYOIP address CIDRs to IPAM</a>.</p>
     */
    postMoveByoipCidrToIpam(req: operations.POSTMoveByoipCidrToIpamRequest, config?: AxiosRequestConfig): Promise<operations.POSTMoveByoipCidrToIpamResponse>;
    /**
     * <p>Provisions an IPv4 or IPv6 address range for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a>AdvertiseByoipCidr</a>.</p> <p>Amazon Web Services verifies that you own the address range and are authorized to advertise it. You must ensure that the address range is registered to you and that you created an RPKI ROA to authorize Amazon ASNs 16509 and 14618 to advertise the address range. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Provisioning an address range is an asynchronous operation, so the call returns immediately, but the address range is not ready to use until its status changes from <code>pending-provision</code> to <code>provisioned</code>. To monitor the status of an address range, use <a>DescribeByoipCidrs</a>. To allocate an Elastic IP address from your IPv4 address pool, use <a>AllocateAddress</a> with either the specific address from the address pool or the ID of the address pool.</p>
     */
    postProvisionByoipCidr(req: operations.POSTProvisionByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTProvisionByoipCidrResponse>;
    /**
     * <p>Provision a CIDR to an IPAM pool. You can use this action to provision new CIDRs to a top-level pool or to transfer a CIDR from a top-level pool to a pool within it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/prov-cidr-ipam.html">Provision CIDRs to pools</a> in the <i>Amazon VPC IPAM User Guide</i>. </p>
     */
    postProvisionIpamPoolCidr(req: operations.POSTProvisionIpamPoolCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTProvisionIpamPoolCidrResponse>;
    /**
     * <p>Provision a CIDR to a public IPv4 pool.</p> <p>For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
     */
    postProvisionPublicIpv4PoolCidr(req: operations.POSTProvisionPublicIpv4PoolCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTProvisionPublicIpv4PoolCidrResponse>;
    /**
     * Purchase a reservation with configurations that match those of your Dedicated Host. You must have active Dedicated Hosts in your account before you purchase a reservation. This action results in the specified reservation being purchased and charged to your account.
     */
    postPurchaseHostReservation(req: operations.POSTPurchaseHostReservationRequest, config?: AxiosRequestConfig): Promise<operations.POSTPurchaseHostReservationResponse>;
    /**
     * <p>Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay a lower hourly rate compared to On-Demand instance pricing.</p> <p>Use <a>DescribeReservedInstancesOfferings</a> to get a list of Reserved Instance offerings that match your specifications. After you've purchased a Reserved Instance, you can check for your new Reserved Instance with <a>DescribeReservedInstances</a>.</p> <p>To queue a purchase for a future date and time, specify a purchase time. If you do not specify a purchase time, the default is the current time.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved Instances</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the <i>Amazon EC2 User Guide</i>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postPurchaseReservedInstancesOffering(req: operations.POSTPurchaseReservedInstancesOfferingRequest, config?: AxiosRequestConfig): Promise<operations.POSTPurchaseReservedInstancesOfferingResponse>;
    /**
     * <note> <p>You can no longer purchase Scheduled Instances.</p> </note> <p>Purchases the Scheduled Instances with the specified schedule.</p> <p>Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term. Before you can purchase a Scheduled Instance, you must call <a>DescribeScheduledInstanceAvailability</a> to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance, you must call <a>RunScheduledInstances</a> during each scheduled time period.</p> <p>After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.</p>
     */
    postPurchaseScheduledInstances(req: operations.POSTPurchaseScheduledInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTPurchaseScheduledInstancesResponse>;
    /**
     * <p>Requests a reboot of the specified instances. This operation is asynchronous; it only queues a request to reboot the specified instances. The operation succeeds if the instances are valid and belong to you. Requests to reboot terminated instances are ignored.</p> <p>If an instance does not cleanly shut down within a few minutes, Amazon EC2 performs a hard reboot.</p> <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html">Troubleshoot an unreachable instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postRebootInstances(req: operations.POSTRebootInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTRebootInstancesResponse>;
    /**
     * <p>Registers an AMI. When you're creating an AMI, this is the final step you must complete before you can launch an instance from the AMI. For more information about creating AMIs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami.html">Create your own AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <note> <p>For Amazon EBS-backed instances, <a>CreateImage</a> creates and registers the AMI in a single request, so you don't have to register the AMI yourself. We recommend that you always use <a>CreateImage</a> unless you have a specific reason to use RegisterImage.</p> </note> <p>If needed, you can deregister an AMI at any time. Any modifications you make to an AMI backed by an instance store volume invalidates its registration. If you make changes to an image, deregister the previous image and register the new image.</p> <p> <b>Register a snapshot of a root device volume</b> </p> <p>You can use <code>RegisterImage</code> to create an Amazon EBS-backed Linux AMI from a snapshot of a root device volume. You specify the snapshot using a block device mapping. You can't set the encryption state of the volume using the block device mapping. If the snapshot is encrypted, or encryption by default is enabled, the root volume of an instance launched from the AMI is encrypted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html#creating-launching-ami-from-snapshot">Create a Linux AMI from a snapshot</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html">Use encryption with Amazon EBS-backed AMIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p> <b>Amazon Web Services Marketplace product codes</b> </p> <p>If any snapshots have Amazon Web Services Marketplace product codes, they are copied to the new AMI.</p> <p>Windows and some Linux distributions, such as Red Hat Enterprise Linux (RHEL) and SUSE Linux Enterprise Server (SLES), use the Amazon EC2 billing product code associated with an AMI to verify the subscription status for package updates. To create a new AMI for operating systems that require a billing product code, instead of registering the AMI, do the following to preserve the billing product code association:</p> <ol> <li> <p>Launch an instance from an existing AMI with that billing product code.</p> </li> <li> <p>Customize the instance.</p> </li> <li> <p>Create an AMI from the instance using <a>CreateImage</a>.</p> </li> </ol> <p>If you purchase a Reserved Instance to apply to an On-Demand Instance that was launched from an AMI with a billing product code, make sure that the Reserved Instance has the matching billing product code. If you purchase a Reserved Instance without the matching billing product code, the Reserved Instance will not be applied to the On-Demand Instance. For information about how to obtain the platform details and billing information of an AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-billing-info.html">Understand AMI billing information</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postRegisterImage(req: operations.POSTRegisterImageRequest, config?: AxiosRequestConfig): Promise<operations.POSTRegisterImageResponse>;
    /**
     * <p>Registers a set of tag keys to include in scheduled event notifications for your resources. </p> <p>To remove tags, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeregisterInstanceEventNotificationAttributes.html">DeregisterInstanceEventNotificationAttributes</a>.</p>
     */
    postRegisterInstanceEventNotificationAttributes(req: operations.POSTRegisterInstanceEventNotificationAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTRegisterInstanceEventNotificationAttributesResponse>;
    /**
     * <p>Registers members (network interfaces) with the transit gateway multicast group. A member is a network interface associated with a supported EC2 instance that receives multicast traffic. For information about supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast Consideration</a> in <i>Amazon VPC Transit Gateways</i>.</p> <p>After you add the members, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the members were added to the transit gateway multicast group.</p>
     */
    postRegisterTransitGatewayMulticastGroupMembers(req: operations.POSTRegisterTransitGatewayMulticastGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.POSTRegisterTransitGatewayMulticastGroupMembersResponse>;
    /**
     * <p>Registers sources (network interfaces) with the specified transit gateway multicast group.</p> <p>A multicast source is a network interface attached to a supported instance that sends multicast traffic. For information about supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast Considerations</a> in <i>Amazon VPC Transit Gateways</i>.</p> <p>After you add the source, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the source was added to the multicast group.</p>
     */
    postRegisterTransitGatewayMulticastGroupSources(req: operations.POSTRegisterTransitGatewayMulticastGroupSourcesRequest, config?: AxiosRequestConfig): Promise<operations.POSTRegisterTransitGatewayMulticastGroupSourcesResponse>;
    /**
     * Rejects a request to associate cross-account subnets with a transit gateway multicast domain.
     */
    postRejectTransitGatewayMulticastDomainAssociations(req: operations.POSTRejectTransitGatewayMulticastDomainAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.POSTRejectTransitGatewayMulticastDomainAssociationsResponse>;
    /**
     * Rejects a transit gateway peering attachment request.
     */
    postRejectTransitGatewayPeeringAttachment(req: operations.POSTRejectTransitGatewayPeeringAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTRejectTransitGatewayPeeringAttachmentResponse>;
    /**
     * <p>Rejects a request to attach a VPC to a transit gateway.</p> <p>The VPC attachment must be in the <code>pendingAcceptance</code> state. Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests. Use <a>AcceptTransitGatewayVpcAttachment</a> to accept a VPC attachment request.</p>
     */
    postRejectTransitGatewayVpcAttachment(req: operations.POSTRejectTransitGatewayVpcAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.POSTRejectTransitGatewayVpcAttachmentResponse>;
    /**
     * Rejects VPC endpoint connection requests to your VPC endpoint service.
     */
    postRejectVpcEndpointConnections(req: operations.POSTRejectVpcEndpointConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTRejectVpcEndpointConnectionsResponse>;
    /**
     * Rejects a VPC peering connection request. The VPC peering connection must be in the <code>pending-acceptance</code> state. Use the <a>DescribeVpcPeeringConnections</a> request to view your outstanding VPC peering connection requests. To delete an active VPC peering connection, or to delete a VPC peering connection request that you initiated, use <a>DeleteVpcPeeringConnection</a>.
     */
    postRejectVpcPeeringConnection(req: operations.POSTRejectVpcPeeringConnectionRequest, config?: AxiosRequestConfig): Promise<operations.POSTRejectVpcPeeringConnectionResponse>;
    /**
     * <p>Releases the specified Elastic IP address.</p> <p>[EC2-Classic, default VPC] Releasing an Elastic IP address automatically disassociates it from any instance that it's associated with. To disassociate an Elastic IP address without releasing it, use <a>DisassociateAddress</a>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note> <p>[Nondefault VPC] You must use <a>DisassociateAddress</a> to disassociate the Elastic IP address before you can release it. Otherwise, Amazon EC2 returns an error (<code>InvalidIPAddress.InUse</code>).</p> <p>After releasing an Elastic IP address, it is released to the IP address pool. Be sure to update your DNS records and any servers or devices that communicate with the address. If you attempt to release an Elastic IP address that you already released, you'll get an <code>AuthFailure</code> error if the address is already allocated to another Amazon Web Services account.</p> <p>[EC2-VPC] After you release an Elastic IP address for use in a VPC, you might be able to recover it. For more information, see <a>AllocateAddress</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postReleaseAddress(req: operations.POSTReleaseAddressRequest, config?: AxiosRequestConfig): Promise<operations.POSTReleaseAddressResponse>;
    /**
     * <p>When you no longer want to use an On-Demand Dedicated Host it can be released. On-Demand billing is stopped and the host goes into <code>released</code> state. The host ID of Dedicated Hosts that have been released can no longer be specified in another request, for example, to modify the host. You must stop or terminate all instances on a host before it can be released.</p> <p>When Dedicated Hosts are released, it may take some time for them to stop counting toward your limit and you may receive capacity errors when trying to allocate new Dedicated Hosts. Wait a few minutes and then try again.</p> <p>Released hosts still appear in a <a>DescribeHosts</a> response.</p>
     */
    postReleaseHosts(req: operations.POSTReleaseHostsRequest, config?: AxiosRequestConfig): Promise<operations.POSTReleaseHostsResponse>;
    /**
     * <p>Release an allocation within an IPAM pool. You can only use this action to release manual allocations. To remove an allocation for a resource without deleting the resource, set its monitored state to false using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyIpamResourceCidr.html">ModifyIpamResourceCidr</a>. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/release-pool-alloc-ipam.html">Release an allocation</a> in the <i>Amazon VPC IPAM User Guide</i>. </p> <note> <p>All EC2 API actions follow an <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/query-api-troubleshooting.html#eventual-consistency">eventual consistency</a> model.</p> </note>
     */
    postReleaseIpamPoolAllocation(req: operations.POSTReleaseIpamPoolAllocationRequest, config?: AxiosRequestConfig): Promise<operations.POSTReleaseIpamPoolAllocationResponse>;
    /**
     * <p>Replaces an IAM instance profile for the specified running instance. You can use this action to change the IAM instance profile that's associated with an instance without having to disassociate the existing IAM instance profile first.</p> <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association ID.</p>
     */
    postReplaceIamInstanceProfileAssociation(req: operations.POSTReplaceIamInstanceProfileAssociationRequest, config?: AxiosRequestConfig): Promise<operations.POSTReplaceIamInstanceProfileAssociationResponse>;
    /**
     * <p>Changes which network ACL a subnet is associated with. By default when you create a subnet, it's automatically associated with the default network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>This is an idempotent operation.</p>
     */
    postReplaceNetworkAclAssociation(req: operations.POSTReplaceNetworkAclAssociationRequest, config?: AxiosRequestConfig): Promise<operations.POSTReplaceNetworkAclAssociationResponse>;
    /**
     * Replaces an entry (rule) in a network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.
     */
    postReplaceNetworkAclEntry(req: operations.POSTReplaceNetworkAclEntryRequest, config?: AxiosRequestConfig): Promise<operations.POSTReplaceNetworkAclEntryResponse>;
    /**
     * <p>Replaces an existing route within a route table in a VPC.</p> <p>You must specify either a destination CIDR block or a prefix list ID. You must also specify exactly one of the resources from the parameter list, or reset the local route to its default target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
     */
    postReplaceRoute(req: operations.POSTReplaceRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTReplaceRouteResponse>;
    /**
     * <p>Changes the route table associated with a given subnet, internet gateway, or virtual private gateway in a VPC. After the operation completes, the subnet or gateway uses the routes in the new route table. For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route tables</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>You can also use this operation to change which table is the main route table in the VPC. Specify the main route table's association ID and the route table ID of the new main route table.</p>
     */
    postReplaceRouteTableAssociation(req: operations.POSTReplaceRouteTableAssociationRequest, config?: AxiosRequestConfig): Promise<operations.POSTReplaceRouteTableAssociationResponse>;
    /**
     * Replaces the specified route in the specified transit gateway route table.
     */
    postReplaceTransitGatewayRoute(req: operations.POSTReplaceTransitGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.POSTReplaceTransitGatewayRouteResponse>;
    /**
     * <p>Submits feedback about the status of an instance. The instance must be in the <code>running</code> state. If your experience with the instance differs from the instance status returned by <a>DescribeInstanceStatus</a>, use <a>ReportInstanceStatus</a> to report your experience with the instance. Amazon EC2 collects this information to improve the accuracy of status checks.</p> <p>Use of this action does not change the value returned by <a>DescribeInstanceStatus</a>.</p>
     */
    postReportInstanceStatus(req: operations.POSTReportInstanceStatusRequest, config?: AxiosRequestConfig): Promise<operations.POSTReportInstanceStatusResponse>;
    /**
     * <p>Creates a Spot Fleet request.</p> <p>The Spot Fleet request specifies the total target capacity and the On-Demand target capacity. Amazon EC2 calculates the difference between the total capacity and On-Demand capacity, and launches the difference as Spot capacity.</p> <p>You can submit a single request that includes multiple launch specifications that vary by instance type, AMI, Availability Zone, or subnet.</p> <p>By default, the Spot Fleet requests Spot Instances in the Spot Instance pool where the price per unit is the lowest. Each launch specification can include its own instance weighting that reflects the value of the instance type to your application workload.</p> <p>Alternatively, you can specify that the Spot Fleet distribute the target capacity across the Spot pools included in its launch specifications. By ensuring that the Spot Instances in your Spot Fleet are in different Spot pools, you can improve the availability of your fleet.</p> <p>You can specify tags for the Spot Fleet request and instances launched by the fleet. You cannot tag other resource types in a Spot Fleet request because only the <code>spot-fleet-request</code> and <code>instance</code> resource types are supported.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html">Spot Fleet requests</a> in the <i>Amazon EC2 User Guide</i>.</p> <important> <p>We strongly discourage using the RequestSpotFleet API because it is a legacy API with no planned investment. For options for requesting Spot Instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html#which-spot-request-method-to-use">Which is the best Spot request method to use?</a> in the <i>Amazon EC2 User Guide</i>.</p> </important>
     */
    postRequestSpotFleet(req: operations.POSTRequestSpotFleetRequest, config?: AxiosRequestConfig): Promise<operations.POSTRequestSpotFleetResponse>;
    /**
     * <p>Creates a Spot Instance request.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html">Spot Instance requests</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <important> <p>We strongly discourage using the RequestSpotInstances API because it is a legacy API with no planned investment. For options for requesting Spot Instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html#which-spot-request-method-to-use">Which is the best Spot request method to use?</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </important> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> </note>
     */
    postRequestSpotInstances(req: operations.POSTRequestSpotInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTRequestSpotInstancesResponse>;
    /**
     * Resets the attribute of the specified IP address. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.
     */
    postResetAddressAttribute(req: operations.POSTResetAddressAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetAddressAttributeResponse>;
    /**
     * <p>Resets the default KMS key for EBS encryption for your account in this Region to the Amazon Web Services managed KMS key for EBS.</p> <p>After resetting the default KMS key to the Amazon Web Services managed KMS key, you can continue to encrypt by a customer managed KMS key by specifying it when you create the volume. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postResetEbsDefaultKmsKeyId(req: operations.POSTResetEbsDefaultKmsKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetEbsDefaultKmsKeyIdResponse>;
    /**
     * Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value. You can only reset the load permission attribute.
     */
    postResetFpgaImageAttribute(req: operations.POSTResetFpgaImageAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetFpgaImageAttributeResponse>;
    /**
     * Resets an attribute of an AMI to its default value.
     */
    postResetImageAttribute(req: operations.POSTResetImageAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetImageAttributeResponse>;
    /**
     * <p>Resets an attribute of an instance to its default value. To reset the <code>kernel</code> or <code>ramdisk</code>, the instance must be in a stopped state. To reset the <code>sourceDestCheck</code>, the instance can be either running or stopped.</p> <p>The <code>sourceDestCheck</code> attribute controls whether source/destination checking is enabled. The default value is <code>true</code>, which means checking is enabled. This value must be <code>false</code> for a NAT instance to perform NAT. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT Instances</a> in the <i>Amazon VPC User Guide</i>.</p>
     */
    postResetInstanceAttribute(req: operations.POSTResetInstanceAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetInstanceAttributeResponse>;
    /**
     * Resets a network interface attribute. You can specify only one attribute at a time.
     */
    postResetNetworkInterfaceAttribute(req: operations.POSTResetNetworkInterfaceAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetNetworkInterfaceAttributeResponse>;
    /**
     * <p>Resets permission settings for the specified snapshot.</p> <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Share a snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postResetSnapshotAttribute(req: operations.POSTResetSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.POSTResetSnapshotAttributeResponse>;
    /**
     * <p>Restores an Elastic IP address that was previously moved to the EC2-VPC platform back to the EC2-Classic platform. You cannot move an Elastic IP address that was originally allocated for use in EC2-VPC. The Elastic IP address must not be associated with an instance or network interface.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postRestoreAddressToClassic(req: operations.POSTRestoreAddressToClassicRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreAddressToClassicResponse>;
    /**
     * Restores an AMI from the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle Bin</a> in the <i>Amazon EC2 User Guide</i>.
     */
    postRestoreImageFromRecycleBin(req: operations.POSTRestoreImageFromRecycleBinRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreImageFromRecycleBinResponse>;
    /**
     * Restores the entries from a previous version of a managed prefix list to a new version of the prefix list.
     */
    postRestoreManagedPrefixListVersion(req: operations.POSTRestoreManagedPrefixListVersionRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreManagedPrefixListVersionResponse>;
    /**
     * Restores a snapshot from the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-snaps.html#recycle-bin-restore-snaps">Restore snapshots from the Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
     */
    postRestoreSnapshotFromRecycleBin(req: operations.POSTRestoreSnapshotFromRecycleBinRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreSnapshotFromRecycleBinResponse>;
    /**
     * <p>Restores an archived Amazon EBS snapshot for use temporarily or permanently, or modifies the restore period or restore type for a snapshot that was previously temporarily restored.</p> <p>For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-snapshot-archiving.html#restore-archived-snapshot"> Restore an archived snapshot</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/working-with-snapshot-archiving.html#modify-temp-restore-period"> modify the restore period or restore type for a temporarily restored snapshot</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
     */
    postRestoreSnapshotTier(req: operations.POSTRestoreSnapshotTierRequest, config?: AxiosRequestConfig): Promise<operations.POSTRestoreSnapshotTierResponse>;
    /**
     * Removes an ingress authorization rule from a Client VPN endpoint.
     */
    postRevokeClientVpnIngress(req: operations.POSTRevokeClientVpnIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTRevokeClientVpnIngressResponse>;
    /**
     * <p>[VPC only] Removes the specified outbound (egress) rules from a security group for EC2-VPC. This action does not apply to security groups for use in EC2-Classic.</p> <p>You can specify rules using either rule IDs or security group rule properties. If you use rule properties, the values that you specify (for example, ports) must match the existing rule's values exactly. Each rule has a protocol, from and to ports, and destination (CIDR range, security group, or prefix list). For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not need to specify the description to revoke the rule.</p> <p>[Default VPC] If the values you specify do not match the existing rule's values, no error is returned, and the output describes the security group rules that were not revoked.</p> <p>Amazon Web Services recommends that you describe the security group to verify that the rules were removed.</p> <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p>
     */
    postRevokeSecurityGroupEgress(req: operations.POSTRevokeSecurityGroupEgressRequest, config?: AxiosRequestConfig): Promise<operations.POSTRevokeSecurityGroupEgressResponse>;
    /**
     * <p>Removes the specified inbound (ingress) rules from a security group.</p> <p>You can specify rules using either rule IDs or security group rule properties. If you use rule properties, the values that you specify (for example, ports) must match the existing rule's values exactly. Each rule has a protocol, from and to ports, and source (CIDR range, security group, or prefix list). For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not need to specify the description to revoke the rule.</p> <p>[EC2-Classic, default VPC] If the values you specify do not match the existing rule's values, no error is returned, and the output describes the security group rules that were not revoked.</p> <p>Amazon Web Services recommends that you describe the security group to verify that the rules were removed.</p> <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
     */
    postRevokeSecurityGroupIngress(req: operations.POSTRevokeSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTRevokeSecurityGroupIngressResponse>;
    /**
     * <p>Launches the specified number of instances using an AMI for which you have permissions.</p> <p>You can specify a number of options, or leave the default options. The following rules apply:</p> <ul> <li> <p>[EC2-VPC] If you don't specify a subnet ID, we choose a default subnet from your default VPC for you. If you don't have a default VPC, you must specify a subnet ID in the request.</p> </li> <li> <p>[EC2-Classic] If don't specify an Availability Zone, we choose one for you.</p> </li> <li> <p>Some instance types must be launched into a VPC. If you do not have a default VPC, or if you do not specify a subnet ID, the request fails. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html#vpc-only-instance-types">Instance types available only in a VPC</a>.</p> </li> <li> <p>[EC2-VPC] All instances have a network interface with a primary private IPv4 address. If you don't specify this address, we choose one from the IPv4 range of your subnet.</p> </li> <li> <p>Not all instance types support IPv6 addresses. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a>.</p> </li> <li> <p>If you don't specify a security group ID, we use the default security group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Security groups</a>.</p> </li> <li> <p>If any of the AMIs have a product code attached for which the user has not subscribed, the request fails.</p> </li> </ul> <p>You can create a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html">launch template</a>, which is a resource that contains the parameters to launch an instance. When you launch an instance using <a>RunInstances</a>, you can specify the launch template instead of specifying the launch parameters.</p> <p>To ensure faster instance launches, break up large requests into smaller batches. For example, create five separate launch requests for 100 instances each instead of one launch request for 500 instances.</p> <p>An instance is ready for you to use when it's in the <code>running</code> state. You can check the state of your instance using <a>DescribeInstances</a>. You can tag instances and EBS volumes during launch, after launch, or both. For more information, see <a>CreateTags</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2 resources</a>.</p> <p>Linux instances have access to the public key of the key pair at boot. You can use this key to provide secure access to the instance. Amazon EC2 public images use this feature to provide secure access without passwords. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key pairs</a>.</p> <p>For troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_InstanceStraightToTerminated.html">What to do if an instance immediately terminates</a>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html">Troubleshooting connecting to your instance</a>.</p> <note> <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>.</p> </note>
     */
    postRunInstances(req: operations.POSTRunInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTRunInstancesResponse>;
    /**
     * <p>Launches the specified Scheduled Instances.</p> <p>Before you can launch a Scheduled Instance, you must purchase it and obtain an identifier using <a>PurchaseScheduledInstances</a>.</p> <p>You must launch a Scheduled Instance during its scheduled time period. You can't stop or reboot a Scheduled Instance, but you can terminate it as needed. If you terminate a Scheduled Instance before the current scheduled time period ends, you can launch it again after a few minutes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-scheduled-instances.html">Scheduled Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postRunScheduledInstances(req: operations.POSTRunScheduledInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTRunScheduledInstancesResponse>;
    /**
     * Searches for routes in the specified local gateway route table.
     */
    postSearchLocalGatewayRoutes(req: operations.POSTSearchLocalGatewayRoutesRequest, config?: AxiosRequestConfig): Promise<operations.POSTSearchLocalGatewayRoutesResponse>;
    /**
     * Searches one or more transit gateway multicast groups and returns the group membership information.
     */
    postSearchTransitGatewayMulticastGroups(req: operations.POSTSearchTransitGatewayMulticastGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTSearchTransitGatewayMulticastGroupsResponse>;
    /**
     * Searches for routes in the specified transit gateway route table.
     */
    postSearchTransitGatewayRoutes(req: operations.POSTSearchTransitGatewayRoutesRequest, config?: AxiosRequestConfig): Promise<operations.POSTSearchTransitGatewayRoutesResponse>;
    /**
     * <p>Sends a diagnostic interrupt to the specified Amazon EC2 instance to trigger a <i>kernel panic</i> (on Linux instances), or a <i>blue screen</i>/<i>stop error</i> (on Windows instances). For instances based on Intel and AMD processors, the interrupt is received as a <i>non-maskable interrupt</i> (NMI).</p> <p>In general, the operating system crashes and reboots when a kernel panic or stop error is triggered. The operating system can also be configured to perform diagnostic tasks, such as generating a memory dump file, loading a secondary kernel, or obtaining a call trace.</p> <p>Before sending a diagnostic interrupt to your instance, ensure that its operating system is configured to perform the required diagnostic tasks.</p> <p>For more information about configuring your operating system to generate a crash dump when a kernel panic or stop error occurs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/diagnostic-interrupt.html">Send a diagnostic interrupt (for advanced users)</a> (Linux instances) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/diagnostic-interrupt.html">Send a diagnostic interrupt (for advanced users)</a> (Windows instances).</p>
     */
    postSendDiagnosticInterrupt(req: operations.POSTSendDiagnosticInterruptRequest, config?: AxiosRequestConfig): Promise<operations.POSTSendDiagnosticInterruptResponse>;
    /**
     * <p>Starts an Amazon EBS-backed instance that you've previously stopped.</p> <p>Instances that use Amazon EBS volumes as their root devices can be quickly stopped and started. When an instance is stopped, the compute resources are released and you are not billed for instance usage. However, your root partition Amazon EBS volume remains and continues to persist your data, and you are charged for Amazon EBS volume usage. You can restart your instance at any time. Every time you start your instance, Amazon EC2 charges a one-minute minimum for instance usage, and thereafter charges per second for instance usage.</p> <p>Before stopping an instance, make sure it is in a state from which it can be restarted. Stopping an instance does not preserve data stored in RAM.</p> <p>Performing this operation on an instance that uses an instance store as its root device returns an error.</p> <p>If you attempt to start a T3 instance with <code>host</code> tenancy and the <code>unlimted</code> CPU credit option, the request fails. The <code>unlimited</code> CPU credit option is not supported on Dedicated Hosts. Before you start the instance, either change its CPU credit option to <code>standard</code>, or change its tenancy to <code>default</code> or <code>dedicated</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stop and start your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postStartInstances(req: operations.POSTStartInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartInstancesResponse>;
    /**
     * Starts analyzing the specified Network Access Scope.
     */
    postStartNetworkInsightsAccessScopeAnalysis(req: operations.POSTStartNetworkInsightsAccessScopeAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartNetworkInsightsAccessScopeAnalysisResponse>;
    /**
     * Starts analyzing the specified path. If the path is reachable, the operation returns the shortest feasible path.
     */
    postStartNetworkInsightsAnalysis(req: operations.POSTStartNetworkInsightsAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartNetworkInsightsAnalysisResponse>;
    /**
     * <p>Initiates the verification process to prove that the service provider owns the private DNS name domain for the endpoint service.</p> <p>The service provider must successfully perform the verification before the consumer can use the name to access the service.</p> <p>Before the service provider runs this command, they must add a record to the DNS server.</p>
     */
    postStartVpcEndpointServicePrivateDnsVerification(req: operations.POSTStartVpcEndpointServicePrivateDnsVerificationRequest, config?: AxiosRequestConfig): Promise<operations.POSTStartVpcEndpointServicePrivateDnsVerificationResponse>;
    /**
     * <p>Stops an Amazon EBS-backed instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Stop_Start.html">Stop and start your instance</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>You can use the Stop action to hibernate an instance if the instance is <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#enabling-hibernation">enabled for hibernation</a> and it meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>We don't charge usage for a stopped instance, or data transfer fees; however, your root partition Amazon EBS volume remains and continues to persist your data, and you are charged for Amazon EBS volume usage. Every time you start your instance, Amazon EC2 charges a one-minute minimum for instance usage, and thereafter charges per second for instance usage.</p> <p>You can't stop or hibernate instance store-backed instances. You can't use the Stop action to hibernate Spot Instances, but you can specify that Amazon EC2 should hibernate Spot Instances when they are interrupted. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html#hibernate-spot-instances">Hibernating interrupted Spot Instances</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>When you stop or hibernate an instance, we shut it down. You can restart your instance at any time. Before stopping or hibernating an instance, make sure it is in a state from which it can be restarted. Stopping an instance does not preserve data stored in RAM, but hibernating an instance does preserve data stored in RAM. If an instance cannot hibernate successfully, a normal shutdown occurs.</p> <p>Stopping and hibernating an instance is different to rebooting or terminating it. For example, when you stop or hibernate an instance, the root device and any other devices attached to the instance persist. When you terminate an instance, the root device and any other devices attached during the instance launch are automatically deleted. For more information about the differences between rebooting, stopping, hibernating, and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>When you stop an instance, we attempt to shut it down forcibly after a short while. If your instance appears stuck in the stopping state after a period of time, there may be an issue with the underlying host computer. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesStopping.html">Troubleshoot stopping your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postStopInstances(req: operations.POSTStopInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTStopInstancesResponse>;
    /**
     * Terminates active Client VPN endpoint connections. This action can be used to terminate a specific client connection, or up to five connections established by a specific user.
     */
    postTerminateClientVpnConnections(req: operations.POSTTerminateClientVpnConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.POSTTerminateClientVpnConnectionsResponse>;
    /**
     * <p>Shuts down the specified instances. This operation is idempotent; if you terminate an instance more than once, each call succeeds. </p> <p>If you specify multiple instances and the request fails (for example, because of a single incorrect instance ID), none of the instances are terminated.</p> <p>If you terminate multiple instances across multiple Availability Zones, and one or more of the specified instances are enabled for termination protection, the request fails with the following results:</p> <ul> <li> <p>The specified instances that are in the same Availability Zone as the protected instance are not terminated.</p> </li> <li> <p>The specified instances that are in different Availability Zones, where no other specified instances are protected, are successfully terminated.</p> </li> </ul> <p>For example, say you have the following instances:</p> <ul> <li> <p>Instance A: <code>us-east-1a</code>; Not protected</p> </li> <li> <p>Instance B: <code>us-east-1a</code>; Not protected</p> </li> <li> <p>Instance C: <code>us-east-1b</code>; Protected</p> </li> <li> <p>Instance D: <code>us-east-1b</code>; not protected</p> </li> </ul> <p>If you attempt to terminate all of these instances in the same request, the request reports failure with the following results:</p> <ul> <li> <p>Instance A and Instance B are successfully terminated because none of the specified instances in <code>us-east-1a</code> are enabled for termination protection.</p> </li> <li> <p>Instance C and Instance D fail to terminate because at least one of the specified instances in <code>us-east-1b</code> (Instance C) is enabled for termination protection.</p> </li> </ul> <p>Terminated instances remain visible after termination (for approximately one hour).</p> <p>By default, Amazon EC2 deletes all EBS volumes that were attached when the instance launched. Volumes attached after instance launch continue running.</p> <p>You can stop, start, and terminate EBS-backed instances. You can only terminate instance store-backed instances. What happens to an instance differs if you stop it or terminate it. For example, when you stop an instance, the root device and any other devices attached to the instance persist. When you terminate an instance, any attached EBS volumes with the <code>DeleteOnTermination</code> block device mapping parameter set to <code>true</code> are automatically deleted. For more information about the differences between stopping and terminating instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-lifecycle.html">Instance lifecycle</a> in the <i>Amazon EC2 User Guide</i>.</p> <p>For more information about troubleshooting, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesShuttingDown.html">Troubleshooting terminating your instance</a> in the <i>Amazon EC2 User Guide</i>.</p>
     */
    postTerminateInstances(req: operations.POSTTerminateInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTTerminateInstancesResponse>;
    /**
     * Unassigns one or more IPv6 addresses IPv4 Prefix Delegation prefixes from a network interface.
     */
    postUnassignIpv6Addresses(req: operations.POSTUnassignIpv6AddressesRequest, config?: AxiosRequestConfig): Promise<operations.POSTUnassignIpv6AddressesResponse>;
    /**
     * Unassigns one or more secondary private IP addresses, or IPv4 Prefix Delegation prefixes from a network interface.
     */
    postUnassignPrivateIpAddresses(req: operations.POSTUnassignPrivateIpAddressesRequest, config?: AxiosRequestConfig): Promise<operations.POSTUnassignPrivateIpAddressesResponse>;
    /**
     * <p>Unassigns secondary private IPv4 addresses from a private NAT gateway. You cannot unassign your primary private IP. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-edit-secondary">Edit secondary IP address associations</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>While unassigning is in progress, you cannot assign/unassign additional IP addresses while the connections are being drained. You are, however, allowed to delete the NAT gateway.</p> <p>A private IP address will only be released at the end of MaxDrainDurationSeconds. The private IP addresses stay associated and support the existing connections but do not support any new connections (new connections are distributed across the remaining assigned private IP address). After the existing connections drain out, the private IP addresses get released. </p> <p/> <p/>
     */
    postUnassignPrivateNatGatewayAddress(req: operations.POSTUnassignPrivateNatGatewayAddressRequest, config?: AxiosRequestConfig): Promise<operations.POSTUnassignPrivateNatGatewayAddressResponse>;
    /**
     * Disables detailed monitoring for a running instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring your instances and volumes</a> in the <i>Amazon EC2 User Guide</i>.
     */
    postUnmonitorInstances(req: operations.POSTUnmonitorInstancesRequest, config?: AxiosRequestConfig): Promise<operations.POSTUnmonitorInstancesResponse>;
    /**
     * [VPC only] Updates the description of an egress (outbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously. You can remove a description for a security group rule by omitting the description parameter in the request.
     */
    postUpdateSecurityGroupRuleDescriptionsEgress(req: operations.POSTUpdateSecurityGroupRuleDescriptionsEgressRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateSecurityGroupRuleDescriptionsEgressResponse>;
    /**
     * Updates the description of an ingress (inbound) security group rule. You can replace an existing description, or add a description to a rule that did not have one previously. You can remove a description for a security group rule by omitting the description parameter in the request.
     */
    postUpdateSecurityGroupRuleDescriptionsIngress(req: operations.POSTUpdateSecurityGroupRuleDescriptionsIngressRequest, config?: AxiosRequestConfig): Promise<operations.POSTUpdateSecurityGroupRuleDescriptionsIngressResponse>;
    /**
     * <p>Stops advertising an address range that is provisioned as an address pool.</p> <p>You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of BGP propagation delays.</p>
     */
    postWithdrawByoipCidr(req: operations.POSTWithdrawByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.POSTWithdrawByoipCidrResponse>;
}
