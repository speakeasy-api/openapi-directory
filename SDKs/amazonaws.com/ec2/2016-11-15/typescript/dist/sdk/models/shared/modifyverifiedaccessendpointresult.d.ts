import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of attachment used to provide connectivity between the Amazon Web Services Verified Access endpoint and the application.
 */
export declare enum ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointAttachmentTypeEnum {
    Vpc = "vpc"
}
/**
 * The type of Amazon Web Services Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.
 */
export declare enum ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointEndpointTypeEnum {
    LoadBalancer = "load-balancer",
    NetworkInterface = "network-interface"
}
/**
 * The IP protocol.
 */
export declare enum ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptionsProtocolEnum {
    Http = "http",
    Https = "https"
}
/**
 * The load balancer details if creating the Amazon Web Services Verified Access endpoint as <code>load-balancer</code>type.
 */
export declare class ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptions extends SpeakeasyBase {
    loadBalancerArn?: string;
    port?: number;
    protocol?: ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptionsProtocolEnum;
    subnetIds?: string[];
}
/**
 * The IP protocol.
 */
export declare enum ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptionsProtocolEnum {
    Http = "http",
    Https = "https"
}
/**
 * The options for network-interface type endpoint.
 */
export declare class ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptions extends SpeakeasyBase {
    networkInterfaceId?: string;
    port?: number;
    protocol?: ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptionsProtocolEnum;
}
/**
 * The status code of the Verified Access endpoint.
 */
export declare enum ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointStatusCodeEnum {
    Pending = "pending",
    Active = "active",
    Updating = "updating",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The endpoint status.
 */
export declare class ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointStatus extends SpeakeasyBase {
    code?: ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointStatusCodeEnum;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The Amazon Web Services Verified Access endpoint details.
 */
export declare class ModifyVerifiedAccessEndpointResultVerifiedAccessEndpoint extends SpeakeasyBase {
    applicationDomain?: string;
    attachmentType?: ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointAttachmentTypeEnum;
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    deviceValidationDomain?: string;
    domainCertificateArn?: string;
    endpointDomain?: string;
    endpointType?: ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointEndpointTypeEnum;
    lastUpdatedTime?: string;
    loadBalancerOptions?: ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointLoadBalancerOptions;
    networkInterfaceOptions?: ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointNetworkInterfaceOptions;
    securityGroupIds?: string[];
    status?: ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointStatus;
    tags?: ModifyVerifiedAccessEndpointResultVerifiedAccessEndpointTags[];
    verifiedAccessEndpointId?: string;
    verifiedAccessGroupId?: string;
    verifiedAccessInstanceId?: string;
}
/**
 * Success
 */
export declare class ModifyVerifiedAccessEndpointResult extends SpeakeasyBase {
    verifiedAccessEndpoint?: ModifyVerifiedAccessEndpointResultVerifiedAccessEndpoint;
}
