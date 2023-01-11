import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the transit gateway multicast domain associations.
**/
export declare class AssociateTransitGatewayMulticastDomainResultAssociations extends SpeakeasyBase {
    resourceId?: Record<string, any>;
    resourceOwnerId?: Record<string, any>;
    resourceType?: Record<string, any>;
    subnets?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayMulticastDomainId?: Record<string, any>;
}
export declare class AssociateTransitGatewayMulticastDomainResult extends SpeakeasyBase {
    associations?: AssociateTransitGatewayMulticastDomainResultAssociations;
}
