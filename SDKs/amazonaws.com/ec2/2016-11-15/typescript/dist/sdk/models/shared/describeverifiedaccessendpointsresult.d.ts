import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of attachment used to provide connectivity between the Amazon Web Services Verified Access endpoint and the application.
 */
export declare enum DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsAttachmentTypeEnum {
    Vpc = "vpc"
}
/**
 * The type of Amazon Web Services Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.
 */
export declare enum DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsEndpointTypeEnum {
    LoadBalancer = "load-balancer",
    NetworkInterface = "network-interface"
}
/**
 * The IP protocol.
 */
export declare enum DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsLoadBalancerOptionsProtocolEnum {
    Http = "http",
    Https = "https"
}
/**
 * The load balancer details if creating the Amazon Web Services Verified Access endpoint as <code>load-balancer</code>type.
 */
export declare class DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsLoadBalancerOptions extends SpeakeasyBase {
    loadBalancerArn?: string;
    port?: number;
    protocol?: DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsLoadBalancerOptionsProtocolEnum;
    subnetIds?: string[];
}
/**
 * The IP protocol.
 */
export declare enum DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsNetworkInterfaceOptionsProtocolEnum {
    Http = "http",
    Https = "https"
}
/**
 * The options for network-interface type endpoint.
 */
export declare class DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsNetworkInterfaceOptions extends SpeakeasyBase {
    networkInterfaceId?: string;
    port?: number;
    protocol?: DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsNetworkInterfaceOptionsProtocolEnum;
}
/**
 * The status code of the Verified Access endpoint.
 */
export declare enum DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsStatusCodeEnum {
    Pending = "pending",
    Active = "active",
    Updating = "updating",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The endpoint status.
 */
export declare class DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsStatus extends SpeakeasyBase {
    code?: DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsStatusCodeEnum;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * An Amazon Web Services Verified Access endpoint specifies the application that Amazon Web Services Verified Access provides access to. It must be attached to an Amazon Web Services Verified Access group. An Amazon Web Services Verified Access endpoint must also have an attached access policy before you attached it to a group.
 */
export declare class DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpoints extends SpeakeasyBase {
    applicationDomain?: string;
    attachmentType?: DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsAttachmentTypeEnum;
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    deviceValidationDomain?: string;
    domainCertificateArn?: string;
    endpointDomain?: string;
    endpointType?: DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsEndpointTypeEnum;
    lastUpdatedTime?: string;
    loadBalancerOptions?: DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsLoadBalancerOptions;
    networkInterfaceOptions?: DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsNetworkInterfaceOptions;
    securityGroupIds?: string[];
    status?: DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsStatus;
    tags?: DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpointsTags[];
    verifiedAccessEndpointId?: string;
    verifiedAccessGroupId?: string;
    verifiedAccessInstanceId?: string;
}
/**
 * Success
 */
export declare class DescribeVerifiedAccessEndpointsResult extends SpeakeasyBase {
    nextToken?: string;
    verifiedAccessEndpoints?: DescribeVerifiedAccessEndpointsResultVerifiedAccessEndpoints[];
}
