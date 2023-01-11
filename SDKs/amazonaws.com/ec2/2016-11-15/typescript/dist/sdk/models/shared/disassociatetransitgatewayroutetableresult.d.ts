import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the association.
**/
export declare class DisassociateTransitGatewayRouteTableResultAssociation extends SpeakeasyBase {
    resourceId?: Record<string, any>;
    resourceType?: Record<string, any>;
    state?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayRouteTableId?: Record<string, any>;
}
export declare class DisassociateTransitGatewayRouteTableResult extends SpeakeasyBase {
    association?: DisassociateTransitGatewayRouteTableResultAssociation;
}
