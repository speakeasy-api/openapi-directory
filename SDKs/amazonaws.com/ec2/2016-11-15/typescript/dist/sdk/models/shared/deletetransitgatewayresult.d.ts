import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether attachment requests are automatically accepted.
 */
export declare enum DeleteTransitGatewayResultTransitGatewayOptionsAutoAcceptSharedAttachmentsEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether resource attachments are automatically associated with the default association route table.
 */
export declare enum DeleteTransitGatewayResultTransitGatewayOptionsDefaultRouteTableAssociationEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether resource attachments automatically propagate routes to the default propagation route table.
 */
export declare enum DeleteTransitGatewayResultTransitGatewayOptionsDefaultRouteTablePropagationEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether DNS support is enabled.
 */
export declare enum DeleteTransitGatewayResultTransitGatewayOptionsDnsSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether multicast is enabled on the transit gateway
 */
export declare enum DeleteTransitGatewayResultTransitGatewayOptionsMulticastSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether Equal Cost Multipath Protocol support is enabled.
 */
export declare enum DeleteTransitGatewayResultTransitGatewayOptionsVpnEcmpSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The transit gateway options.
 */
export declare class DeleteTransitGatewayResultTransitGatewayOptions extends SpeakeasyBase {
    amazonSideAsn?: number;
    associationDefaultRouteTableId?: string;
    autoAcceptSharedAttachments?: DeleteTransitGatewayResultTransitGatewayOptionsAutoAcceptSharedAttachmentsEnum;
    defaultRouteTableAssociation?: DeleteTransitGatewayResultTransitGatewayOptionsDefaultRouteTableAssociationEnum;
    defaultRouteTablePropagation?: DeleteTransitGatewayResultTransitGatewayOptionsDefaultRouteTablePropagationEnum;
    dnsSupport?: DeleteTransitGatewayResultTransitGatewayOptionsDnsSupportEnum;
    multicastSupport?: DeleteTransitGatewayResultTransitGatewayOptionsMulticastSupportEnum;
    propagationDefaultRouteTableId?: string;
    transitGatewayCidrBlocks?: string[];
    vpnEcmpSupport?: DeleteTransitGatewayResultTransitGatewayOptionsVpnEcmpSupportEnum;
}
/**
 * The state of the transit gateway.
 */
export declare enum DeleteTransitGatewayResultTransitGatewayStateEnum {
    Pending = "pending",
    Available = "available",
    Modifying = "modifying",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DeleteTransitGatewayResultTransitGatewayTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the deleted transit gateway.
 */
export declare class DeleteTransitGatewayResultTransitGateway extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    options?: DeleteTransitGatewayResultTransitGatewayOptions;
    ownerId?: string;
    state?: DeleteTransitGatewayResultTransitGatewayStateEnum;
    tags?: DeleteTransitGatewayResultTransitGatewayTags[];
    transitGatewayArn?: string;
    transitGatewayId?: string;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayResult extends SpeakeasyBase {
    transitGateway?: DeleteTransitGatewayResultTransitGateway;
}
