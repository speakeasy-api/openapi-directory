import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether attachment requests are automatically accepted.
 */
export declare enum CreateTransitGatewayResultTransitGatewayOptionsAutoAcceptSharedAttachmentsEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether resource attachments are automatically associated with the default association route table.
 */
export declare enum CreateTransitGatewayResultTransitGatewayOptionsDefaultRouteTableAssociationEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether resource attachments automatically propagate routes to the default propagation route table.
 */
export declare enum CreateTransitGatewayResultTransitGatewayOptionsDefaultRouteTablePropagationEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether DNS support is enabled.
 */
export declare enum CreateTransitGatewayResultTransitGatewayOptionsDnsSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether multicast is enabled on the transit gateway
 */
export declare enum CreateTransitGatewayResultTransitGatewayOptionsMulticastSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether Equal Cost Multipath Protocol support is enabled.
 */
export declare enum CreateTransitGatewayResultTransitGatewayOptionsVpnEcmpSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The transit gateway options.
 */
export declare class CreateTransitGatewayResultTransitGatewayOptions extends SpeakeasyBase {
    amazonSideAsn?: number;
    associationDefaultRouteTableId?: string;
    autoAcceptSharedAttachments?: CreateTransitGatewayResultTransitGatewayOptionsAutoAcceptSharedAttachmentsEnum;
    defaultRouteTableAssociation?: CreateTransitGatewayResultTransitGatewayOptionsDefaultRouteTableAssociationEnum;
    defaultRouteTablePropagation?: CreateTransitGatewayResultTransitGatewayOptionsDefaultRouteTablePropagationEnum;
    dnsSupport?: CreateTransitGatewayResultTransitGatewayOptionsDnsSupportEnum;
    multicastSupport?: CreateTransitGatewayResultTransitGatewayOptionsMulticastSupportEnum;
    propagationDefaultRouteTableId?: string;
    transitGatewayCidrBlocks?: string[];
    vpnEcmpSupport?: CreateTransitGatewayResultTransitGatewayOptionsVpnEcmpSupportEnum;
}
/**
 * The state of the transit gateway.
 */
export declare enum CreateTransitGatewayResultTransitGatewayStateEnum {
    Pending = "pending",
    Available = "available",
    Modifying = "modifying",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class CreateTransitGatewayResultTransitGatewayTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the transit gateway.
 */
export declare class CreateTransitGatewayResultTransitGateway extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    options?: CreateTransitGatewayResultTransitGatewayOptions;
    ownerId?: string;
    state?: CreateTransitGatewayResultTransitGatewayStateEnum;
    tags?: CreateTransitGatewayResultTransitGatewayTags[];
    transitGatewayArn?: string;
    transitGatewayId?: string;
}
/**
 * Success
 */
export declare class CreateTransitGatewayResult extends SpeakeasyBase {
    transitGateway?: CreateTransitGatewayResultTransitGateway;
}
