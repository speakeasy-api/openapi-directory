import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The options for the transit gateway multicast domain.
**/
export declare class DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions extends SpeakeasyBase {
    autoAcceptSharedAssociations?: Record<string, any>;
    igmpv2Support?: Record<string, any>;
    staticSourcesSupport?: Record<string, any>;
}
/**
 * Information about the deleted transit gateway multicast domain.
**/
export declare class DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    options?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions;
    ownerId?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
    transitGatewayMulticastDomainArn?: Record<string, any>;
    transitGatewayMulticastDomainId?: Record<string, any>;
}
export declare class DeleteTransitGatewayMulticastDomainResult extends SpeakeasyBase {
    transitGatewayMulticastDomain?: DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain;
}
