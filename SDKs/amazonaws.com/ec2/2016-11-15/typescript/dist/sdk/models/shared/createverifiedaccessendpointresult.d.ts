import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of attachment used to provide connectivity between the Amazon Web Services Verified Access endpoint and the application.
 */
export declare enum CreateVerifiedAccessEndpointResultVerifiedAccessEndpointAttachmentTypeEnum {
    Vpc = "vpc"
}
/**
 * The type of Amazon Web Services Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.
 */
export declare enum CreateVerifiedAccessEndpointResultVerifiedAccessEndpointEndpointTypeEnum {
    LoadBalancer = "load-balancer",
    NetworkInterface = "network-interface"
}
/**
 * The IP protocol.
 */
export declare enum CreateVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptionsProtocolEnum {
    Http = "http",
    Https = "https"
}
/**
 * The load balancer details if creating the Amazon Web Services Verified Access endpoint as <code>load-balancer</code>type.
 */
export declare class CreateVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptions extends SpeakeasyBase {
    loadBalancerArn?: string;
    port?: number;
    protocol?: CreateVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptionsProtocolEnum;
    subnetIds?: string[];
}
/**
 * The IP protocol.
 */
export declare enum CreateVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptionsProtocolEnum {
    Http = "http",
    Https = "https"
}
/**
 * The options for network-interface type endpoint.
 */
export declare class CreateVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptions extends SpeakeasyBase {
    networkInterfaceId?: string;
    port?: number;
    protocol?: CreateVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptionsProtocolEnum;
}
/**
 * The status code of the Verified Access endpoint.
 */
export declare enum CreateVerifiedAccessEndpointResultVerifiedAccessEndpointStatusCodeEnum {
    Pending = "pending",
    Active = "active",
    Updating = "updating",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The endpoint status.
 */
export declare class CreateVerifiedAccessEndpointResultVerifiedAccessEndpointStatus extends SpeakeasyBase {
    code?: CreateVerifiedAccessEndpointResultVerifiedAccessEndpointStatusCodeEnum;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class CreateVerifiedAccessEndpointResultVerifiedAccessEndpointTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The ID of the Amazon Web Services Verified Access endpoint.
 */
export declare class CreateVerifiedAccessEndpointResultVerifiedAccessEndpoint extends SpeakeasyBase {
    applicationDomain?: string;
    attachmentType?: CreateVerifiedAccessEndpointResultVerifiedAccessEndpointAttachmentTypeEnum;
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    deviceValidationDomain?: string;
    domainCertificateArn?: string;
    endpointDomain?: string;
    endpointType?: CreateVerifiedAccessEndpointResultVerifiedAccessEndpointEndpointTypeEnum;
    lastUpdatedTime?: string;
    loadBalancerOptions?: CreateVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptions;
    networkInterfaceOptions?: CreateVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptions;
    securityGroupIds?: string[];
    status?: CreateVerifiedAccessEndpointResultVerifiedAccessEndpointStatus;
    tags?: CreateVerifiedAccessEndpointResultVerifiedAccessEndpointTags[];
    verifiedAccessEndpointId?: string;
    verifiedAccessGroupId?: string;
    verifiedAccessInstanceId?: string;
}
/**
 * Success
 */
export declare class CreateVerifiedAccessEndpointResult extends SpeakeasyBase {
    verifiedAccessEndpoint?: CreateVerifiedAccessEndpointResultVerifiedAccessEndpoint;
}
