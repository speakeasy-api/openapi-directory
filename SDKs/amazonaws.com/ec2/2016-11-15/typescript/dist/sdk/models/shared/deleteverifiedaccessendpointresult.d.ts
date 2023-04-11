import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of attachment used to provide connectivity between the Amazon Web Services Verified Access endpoint and the application.
 */
export declare enum DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointAttachmentTypeEnum {
    Vpc = "vpc"
}
/**
 * The type of Amazon Web Services Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.
 */
export declare enum DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointEndpointTypeEnum {
    LoadBalancer = "load-balancer",
    NetworkInterface = "network-interface"
}
/**
 * The IP protocol.
 */
export declare enum DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptionsProtocolEnum {
    Http = "http",
    Https = "https"
}
/**
 * The load balancer details if creating the Amazon Web Services Verified Access endpoint as <code>load-balancer</code>type.
 */
export declare class DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptions extends SpeakeasyBase {
    loadBalancerArn?: string;
    port?: number;
    protocol?: DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptionsProtocolEnum;
    subnetIds?: string[];
}
/**
 * The IP protocol.
 */
export declare enum DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptionsProtocolEnum {
    Http = "http",
    Https = "https"
}
/**
 * The options for network-interface type endpoint.
 */
export declare class DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptions extends SpeakeasyBase {
    networkInterfaceId?: string;
    port?: number;
    protocol?: DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptionsProtocolEnum;
}
/**
 * The status code of the Verified Access endpoint.
 */
export declare enum DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointStatusCodeEnum {
    Pending = "pending",
    Active = "active",
    Updating = "updating",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The endpoint status.
 */
export declare class DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointStatus extends SpeakeasyBase {
    code?: DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointStatusCodeEnum;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The ID of the Amazon Web Services Verified Access endpoint.
 */
export declare class DeleteVerifiedAccessEndpointResultVerifiedAccessEndpoint extends SpeakeasyBase {
    applicationDomain?: string;
    attachmentType?: DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointAttachmentTypeEnum;
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    deviceValidationDomain?: string;
    domainCertificateArn?: string;
    endpointDomain?: string;
    endpointType?: DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointEndpointTypeEnum;
    lastUpdatedTime?: string;
    loadBalancerOptions?: DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptions;
    networkInterfaceOptions?: DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptions;
    securityGroupIds?: string[];
    status?: DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointStatus;
    tags?: DeleteVerifiedAccessEndpointResultVerifiedAccessEndpointTags[];
    verifiedAccessEndpointId?: string;
    verifiedAccessGroupId?: string;
    verifiedAccessInstanceId?: string;
}
/**
 * Success
 */
export declare class DeleteVerifiedAccessEndpointResult extends SpeakeasyBase {
    verifiedAccessEndpoint?: DeleteVerifiedAccessEndpointResultVerifiedAccessEndpoint;
}
