import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ID of the association.
**/
export declare class AssociateTransitGatewayRouteTableResultAssociation extends SpeakeasyBase {
    resourceId?: Record<string, any>;
    resourceType?: Record<string, any>;
    state?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayRouteTableId?: Record<string, any>;
}
export declare class AssociateTransitGatewayRouteTableResult extends SpeakeasyBase {
    association?: AssociateTransitGatewayRouteTableResultAssociation;
}
