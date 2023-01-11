import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the association.
**/
export declare class DisassociateTransitGatewayMulticastDomainResultAssociations extends SpeakeasyBase {
    resourceId?: Record<string, any>;
    resourceOwnerId?: Record<string, any>;
    resourceType?: Record<string, any>;
    subnets?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayMulticastDomainId?: Record<string, any>;
}
export declare class DisassociateTransitGatewayMulticastDomainResult extends SpeakeasyBase {
    associations?: DisassociateTransitGatewayMulticastDomainResultAssociations;
}
