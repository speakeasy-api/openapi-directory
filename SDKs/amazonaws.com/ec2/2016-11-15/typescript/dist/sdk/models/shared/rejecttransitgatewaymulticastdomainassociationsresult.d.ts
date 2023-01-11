import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the multicast domain associations.
**/
export declare class RejectTransitGatewayMulticastDomainAssociationsResultAssociations extends SpeakeasyBase {
    resourceId?: Record<string, any>;
    resourceOwnerId?: Record<string, any>;
    resourceType?: Record<string, any>;
    subnets?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayMulticastDomainId?: Record<string, any>;
}
export declare class RejectTransitGatewayMulticastDomainAssociationsResult extends SpeakeasyBase {
    associations?: RejectTransitGatewayMulticastDomainAssociationsResultAssociations;
}
