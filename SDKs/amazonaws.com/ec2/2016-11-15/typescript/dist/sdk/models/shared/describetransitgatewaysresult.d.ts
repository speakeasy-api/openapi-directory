import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether attachment requests are automatically accepted.
 */
export declare enum DescribeTransitGatewaysResultTransitGatewaysOptionsAutoAcceptSharedAttachmentsEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether resource attachments are automatically associated with the default association route table.
 */
export declare enum DescribeTransitGatewaysResultTransitGatewaysOptionsDefaultRouteTableAssociationEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether resource attachments automatically propagate routes to the default propagation route table.
 */
export declare enum DescribeTransitGatewaysResultTransitGatewaysOptionsDefaultRouteTablePropagationEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether DNS support is enabled.
 */
export declare enum DescribeTransitGatewaysResultTransitGatewaysOptionsDnsSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether multicast is enabled on the transit gateway
 */
export declare enum DescribeTransitGatewaysResultTransitGatewaysOptionsMulticastSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether Equal Cost Multipath Protocol support is enabled.
 */
export declare enum DescribeTransitGatewaysResultTransitGatewaysOptionsVpnEcmpSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The transit gateway options.
 */
export declare class DescribeTransitGatewaysResultTransitGatewaysOptions extends SpeakeasyBase {
    amazonSideAsn?: number;
    associationDefaultRouteTableId?: string;
    autoAcceptSharedAttachments?: DescribeTransitGatewaysResultTransitGatewaysOptionsAutoAcceptSharedAttachmentsEnum;
    defaultRouteTableAssociation?: DescribeTransitGatewaysResultTransitGatewaysOptionsDefaultRouteTableAssociationEnum;
    defaultRouteTablePropagation?: DescribeTransitGatewaysResultTransitGatewaysOptionsDefaultRouteTablePropagationEnum;
    dnsSupport?: DescribeTransitGatewaysResultTransitGatewaysOptionsDnsSupportEnum;
    multicastSupport?: DescribeTransitGatewaysResultTransitGatewaysOptionsMulticastSupportEnum;
    propagationDefaultRouteTableId?: string;
    transitGatewayCidrBlocks?: string[];
    vpnEcmpSupport?: DescribeTransitGatewaysResultTransitGatewaysOptionsVpnEcmpSupportEnum;
}
/**
 * The state of the transit gateway.
 */
export declare enum DescribeTransitGatewaysResultTransitGatewaysStateEnum {
    Pending = "pending",
    Available = "available",
    Modifying = "modifying",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DescribeTransitGatewaysResultTransitGatewaysTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a transit gateway.
 */
export declare class DescribeTransitGatewaysResultTransitGateways extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    options?: DescribeTransitGatewaysResultTransitGatewaysOptions;
    ownerId?: string;
    state?: DescribeTransitGatewaysResultTransitGatewaysStateEnum;
    tags?: DescribeTransitGatewaysResultTransitGatewaysTags[];
    transitGatewayArn?: string;
    transitGatewayId?: string;
}
/**
 * Success
 */
export declare class DescribeTransitGatewaysResult extends SpeakeasyBase {
    nextToken?: string;
    transitGateways?: DescribeTransitGatewaysResultTransitGateways[];
}
