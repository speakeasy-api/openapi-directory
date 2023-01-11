import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The options for the transit gateway multicast domain.
**/
export declare class CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions extends SpeakeasyBase {
    autoAcceptSharedAssociations?: Record<string, any>;
    igmpv2Support?: Record<string, any>;
    staticSourcesSupport?: Record<string, any>;
}
/**
 * Information about the transit gateway multicast domain.
**/
export declare class CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    options?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions;
    ownerId?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
    transitGatewayMulticastDomainArn?: Record<string, any>;
    transitGatewayMulticastDomainId?: Record<string, any>;
}
export declare class CreateTransitGatewayMulticastDomainResult extends SpeakeasyBase {
    transitGatewayMulticastDomain?: CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain;
}
