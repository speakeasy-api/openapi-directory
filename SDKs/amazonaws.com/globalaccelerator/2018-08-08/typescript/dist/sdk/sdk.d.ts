import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://globalaccelerator.{region}.amazonaws.com", "https://globalaccelerator.{region}.amazonaws.com", "http://globalaccelerator.{region}.amazonaws.com.cn", "https://globalaccelerator.{region}.amazonaws.com.cn"];
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
 * <fullname>Global Accelerator</fullname> <p>This is the <i>Global Accelerator API Reference</i>. This guide is for developers who need detailed information about Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p> <p>Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance of your applications for local and global users. Depending on the type of accelerator you choose, you can gain additional benefits. </p> <ul> <li> <p>By using a standard accelerator, you can improve availability of your internet applications that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the Amazon Web Services global network. </p> </li> <li> <p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p> </li> </ul> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important> <p>By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses are anycast from the Amazon Web Services edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack, Global Accelerator provides a total of four addresses: two static IPv4 addresses and two static IPv6 addresses. With a standard accelerator for IPv4, instead of using the addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges that you bring toGlobal Accelerator (BYOIP). </p> <p>For a standard accelerator, they distribute incoming application traffic across multiple endpoint resources in multiple Amazon Web Services Regions , which increases the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses that are located in one Amazon Web Services Region or multiple Amazon Web Services Regions. For custom routing accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that are virtual private cloud (VPC) subnets.</p> <important> <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. You can use IAM policies like tag-based permissions with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p> </important> <p>For standard accelerators, Global Accelerator uses the Amazon Web Services global network to route traffic to the optimal regional endpoint based on health, client location, and policies that you configure. The service reacts instantly to changes in health or configuration to ensure that internet traffic from clients is always directed to healthy endpoints.</p> <p>For more information about understanding and using Global Accelerator, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/globalaccelerator/} - Amazon Web Services documentation
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
     * <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>
     */
    addCustomRoutingEndpoints(req: operations.AddCustomRoutingEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.AddCustomRoutingEndpointsResponse>;
    /**
     * <p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API) or when you update an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p> <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p> <ul> <li> <p>It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding.</p> </li> <li> <p>It's more convenient, because you don't need to specify all of the current endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p> </li> </ul>
     */
    addEndpoints(req: operations.AddEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.AddEndpointsResponse>;
    /**
     * <p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
     */
    advertiseByoipCidr(req: operations.AdvertiseByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.AdvertiseByoipCidrResponse>;
    /**
     * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
     */
    allowCustomRoutingTraffic(req: operations.AllowCustomRoutingTrafficRequest, config?: AxiosRequestConfig): Promise<operations.AllowCustomRoutingTrafficResponse>;
    /**
     * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
     */
    createAccelerator(req: operations.CreateAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.CreateAcceleratorResponse>;
    /**
     * <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
     */
    createCustomRoutingAccelerator(req: operations.CreateCustomRoutingAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomRoutingAcceleratorResponse>;
    /**
     * Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region.
     */
    createCustomRoutingEndpointGroup(req: operations.CreateCustomRoutingEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomRoutingEndpointGroupResponse>;
    /**
     * Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify.
     */
    createCustomRoutingListener(req: operations.CreateCustomRoutingListenerRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomRoutingListenerResponse>;
    /**
     * Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint.
     */
    createEndpointGroup(req: operations.CreateEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateEndpointGroupResponse>;
    /**
     * Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify.
     */
    createListener(req: operations.CreateListenerRequest, config?: AxiosRequestConfig): Promise<operations.CreateListenerResponse>;
    /**
     * <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>
     */
    deleteAccelerator(req: operations.DeleteAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAcceleratorResponse>;
    /**
     * <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>
     */
    deleteCustomRoutingAccelerator(req: operations.DeleteCustomRoutingAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomRoutingAcceleratorResponse>;
    /**
     * Delete an endpoint group from a listener for a custom routing accelerator.
     */
    deleteCustomRoutingEndpointGroup(req: operations.DeleteCustomRoutingEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomRoutingEndpointGroupResponse>;
    /**
     * Delete a listener for a custom routing accelerator.
     */
    deleteCustomRoutingListener(req: operations.DeleteCustomRoutingListenerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomRoutingListenerResponse>;
    /**
     * Delete an endpoint group from a listener.
     */
    deleteEndpointGroup(req: operations.DeleteEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndpointGroupResponse>;
    /**
     * Delete a listener from an accelerator.
     */
    deleteListener(req: operations.DeleteListenerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteListenerResponse>;
    /**
     * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
     */
    denyCustomRoutingTraffic(req: operations.DenyCustomRoutingTrafficRequest, config?: AxiosRequestConfig): Promise<operations.DenyCustomRoutingTrafficResponse>;
    /**
     * <p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
     */
    deprovisionByoipCidr(req: operations.DeprovisionByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.DeprovisionByoipCidrResponse>;
    /**
     * Describe an accelerator.
     */
    describeAccelerator(req: operations.DescribeAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAcceleratorResponse>;
    /**
     * Describe the attributes of an accelerator.
     */
    describeAcceleratorAttributes(req: operations.DescribeAcceleratorAttributesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAcceleratorAttributesResponse>;
    /**
     * Describe a custom routing accelerator.
     */
    describeCustomRoutingAccelerator(req: operations.DescribeCustomRoutingAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomRoutingAcceleratorResponse>;
    /**
     * Describe the attributes of a custom routing accelerator.
     */
    describeCustomRoutingAcceleratorAttributes(req: operations.DescribeCustomRoutingAcceleratorAttributesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomRoutingAcceleratorAttributesResponse>;
    /**
     * Describe an endpoint group for a custom routing accelerator.
     */
    describeCustomRoutingEndpointGroup(req: operations.DescribeCustomRoutingEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomRoutingEndpointGroupResponse>;
    /**
     * The description of a listener for a custom routing accelerator.
     */
    describeCustomRoutingListener(req: operations.DescribeCustomRoutingListenerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomRoutingListenerResponse>;
    /**
     * Describe an endpoint group.
     */
    describeEndpointGroup(req: operations.DescribeEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEndpointGroupResponse>;
    /**
     * Describe a listener.
     */
    describeListener(req: operations.DescribeListenerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeListenerResponse>;
    /**
     * List the accelerators for an Amazon Web Services account.
     */
    listAccelerators(req: operations.ListAcceleratorsRequest, config?: AxiosRequestConfig): Promise<operations.ListAcceleratorsResponse>;
    /**
     * Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.
     */
    listByoipCidrs(req: operations.ListByoipCidrsRequest, config?: AxiosRequestConfig): Promise<operations.ListByoipCidrsResponse>;
    /**
     * List the custom routing accelerators for an Amazon Web Services account.
     */
    listCustomRoutingAccelerators(req: operations.ListCustomRoutingAcceleratorsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomRoutingAcceleratorsResponse>;
    /**
     * List the endpoint groups that are associated with a listener for a custom routing accelerator.
     */
    listCustomRoutingEndpointGroups(req: operations.ListCustomRoutingEndpointGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomRoutingEndpointGroupsResponse>;
    /**
     * List the listeners for a custom routing accelerator.
     */
    listCustomRoutingListeners(req: operations.ListCustomRoutingListenersRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomRoutingListenersResponse>;
    /**
     * <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>
     */
    listCustomRoutingPortMappings(req: operations.ListCustomRoutingPortMappingsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomRoutingPortMappingsResponse>;
    /**
     * List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.
     */
    listCustomRoutingPortMappingsByDestination(req: operations.ListCustomRoutingPortMappingsByDestinationRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomRoutingPortMappingsByDestinationResponse>;
    /**
     * List the endpoint groups that are associated with a listener.
     */
    listEndpointGroups(req: operations.ListEndpointGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListEndpointGroupsResponse>;
    /**
     * List the listeners for an accelerator.
     */
    listListeners(req: operations.ListListenersRequest, config?: AxiosRequestConfig): Promise<operations.ListListenersResponse>;
    /**
     * <p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
     */
    provisionByoipCidr(req: operations.ProvisionByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionByoipCidrResponse>;
    /**
     * Remove endpoints from a custom routing accelerator.
     */
    removeCustomRoutingEndpoints(req: operations.RemoveCustomRoutingEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveCustomRoutingEndpointsResponse>;
    /**
     * <p>Remove endpoints from an endpoint group. </p> <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p> <ul> <li> <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the <code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.</p> </li> <li> <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the <code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</p> </li> </ul>
     */
    removeEndpoints(req: operations.RemoveEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveEndpointsResponse>;
    /**
     * <p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
     */
    updateAccelerator(req: operations.UpdateAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAcceleratorResponse>;
    /**
     * Update the attributes for an accelerator.
     */
    updateAcceleratorAttributes(req: operations.UpdateAcceleratorAttributesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAcceleratorAttributesResponse>;
    /**
     * Update a custom routing accelerator.
     */
    updateCustomRoutingAccelerator(req: operations.UpdateCustomRoutingAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomRoutingAcceleratorResponse>;
    /**
     * Update the attributes for a custom routing accelerator.
     */
    updateCustomRoutingAcceleratorAttributes(req: operations.UpdateCustomRoutingAcceleratorAttributesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomRoutingAcceleratorAttributesResponse>;
    /**
     * Update a listener for a custom routing accelerator.
     */
    updateCustomRoutingListener(req: operations.UpdateCustomRoutingListenerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomRoutingListenerResponse>;
    /**
     * Update an endpoint group. A resource must be valid and active when you add it as an endpoint.
     */
    updateEndpointGroup(req: operations.UpdateEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndpointGroupResponse>;
    /**
     * Update a listener.
     */
    updateListener(req: operations.UpdateListenerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateListenerResponse>;
    /**
     * <p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
     */
    withdrawByoipCidr(req: operations.WithdrawByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.WithdrawByoipCidrResponse>;
}
