import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The transit gateway options.
**/
export declare class CreateTransitGatewayResultTransitGatewayOptions extends SpeakeasyBase {
    amazonSideAsn?: Record<string, any>;
    associationDefaultRouteTableId?: Record<string, any>;
    autoAcceptSharedAttachments?: Record<string, any>;
    defaultRouteTableAssociation?: Record<string, any>;
    defaultRouteTablePropagation?: Record<string, any>;
    dnsSupport?: Record<string, any>;
    multicastSupport?: Record<string, any>;
    propagationDefaultRouteTableId?: Record<string, any>;
    transitGatewayCidrBlocks?: Record<string, any>;
    vpnEcmpSupport?: Record<string, any>;
}
/**
 * Information about the transit gateway.
**/
export declare class CreateTransitGatewayResultTransitGateway extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    description?: Record<string, any>;
    options?: CreateTransitGatewayResultTransitGatewayOptions;
    ownerId?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayArn?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
}
export declare class CreateTransitGatewayResult extends SpeakeasyBase {
    transitGateway?: CreateTransitGatewayResultTransitGateway;
}
