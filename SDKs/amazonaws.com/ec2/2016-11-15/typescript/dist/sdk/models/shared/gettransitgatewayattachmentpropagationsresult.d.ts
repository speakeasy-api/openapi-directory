import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the propagation route table.
 */
export declare enum GetTransitGatewayAttachmentPropagationsResultTransitGatewayAttachmentPropagationsStateEnum {
    Enabling = "enabling",
    Enabled = "enabled",
    Disabling = "disabling",
    Disabled = "disabled"
}
/**
 * Describes a propagation route table.
 */
export declare class GetTransitGatewayAttachmentPropagationsResultTransitGatewayAttachmentPropagations extends SpeakeasyBase {
    state?: GetTransitGatewayAttachmentPropagationsResultTransitGatewayAttachmentPropagationsStateEnum;
    transitGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class GetTransitGatewayAttachmentPropagationsResult extends SpeakeasyBase {
    nextToken?: string;
    transitGatewayAttachmentPropagations?: GetTransitGatewayAttachmentPropagationsResultTransitGatewayAttachmentPropagations[];
}
