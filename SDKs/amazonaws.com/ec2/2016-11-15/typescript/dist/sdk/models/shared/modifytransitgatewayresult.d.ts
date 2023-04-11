import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether attachment requests are automatically accepted.
 */
export declare enum ModifyTransitGatewayResultTransitGatewayOptionsAutoAcceptSharedAttachmentsEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether resource attachments are automatically associated with the default association route table.
 */
export declare enum ModifyTransitGatewayResultTransitGatewayOptionsDefaultRouteTableAssociationEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether resource attachments automatically propagate routes to the default propagation route table.
 */
export declare enum ModifyTransitGatewayResultTransitGatewayOptionsDefaultRouteTablePropagationEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether DNS support is enabled.
 */
export declare enum ModifyTransitGatewayResultTransitGatewayOptionsDnsSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether multicast is enabled on the transit gateway
 */
export declare enum ModifyTransitGatewayResultTransitGatewayOptionsMulticastSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * Indicates whether Equal Cost Multipath Protocol support is enabled.
 */
export declare enum ModifyTransitGatewayResultTransitGatewayOptionsVpnEcmpSupportEnum {
    Enable = "enable",
    Disable = "disable"
}
/**
 * The transit gateway options.
 */
export declare class ModifyTransitGatewayResultTransitGatewayOptions extends SpeakeasyBase {
    amazonSideAsn?: number;
    associationDefaultRouteTableId?: string;
    autoAcceptSharedAttachments?: ModifyTransitGatewayResultTransitGatewayOptionsAutoAcceptSharedAttachmentsEnum;
    defaultRouteTableAssociation?: ModifyTransitGatewayResultTransitGatewayOptionsDefaultRouteTableAssociationEnum;
    defaultRouteTablePropagation?: ModifyTransitGatewayResultTransitGatewayOptionsDefaultRouteTablePropagationEnum;
    dnsSupport?: ModifyTransitGatewayResultTransitGatewayOptionsDnsSupportEnum;
    multicastSupport?: ModifyTransitGatewayResultTransitGatewayOptionsMulticastSupportEnum;
    propagationDefaultRouteTableId?: string;
    transitGatewayCidrBlocks?: string[];
    vpnEcmpSupport?: ModifyTransitGatewayResultTransitGatewayOptionsVpnEcmpSupportEnum;
}
/**
 * The state of the transit gateway.
 */
export declare enum ModifyTransitGatewayResultTransitGatewayStateEnum {
    Pending = "pending",
    Available = "available",
    Modifying = "modifying",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class ModifyTransitGatewayResultTransitGatewayTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the transit gateway.
 */
export declare class ModifyTransitGatewayResultTransitGateway extends SpeakeasyBase {
    creationTime?: Date;
    description?: string;
    options?: ModifyTransitGatewayResultTransitGatewayOptions;
    ownerId?: string;
    state?: ModifyTransitGatewayResultTransitGatewayStateEnum;
    tags?: ModifyTransitGatewayResultTransitGatewayTags[];
    transitGatewayArn?: string;
    transitGatewayId?: string;
}
/**
 * Success
 */
export declare class ModifyTransitGatewayResult extends SpeakeasyBase {
    transitGateway?: ModifyTransitGatewayResultTransitGateway;
}
