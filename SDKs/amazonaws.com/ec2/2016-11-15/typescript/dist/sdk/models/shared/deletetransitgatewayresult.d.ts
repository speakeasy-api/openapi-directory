import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The transit gateway options.
**/
export declare class DeleteTransitGatewayResultTransitGatewayOptions extends SpeakeasyBase {
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
 * Information about the deleted transit gateway.
**/
export declare class DeleteTransitGatewayResultTransitGateway extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    description?: Record<string, any>;
    options?: DeleteTransitGatewayResultTransitGatewayOptions;
    ownerId?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayArn?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
}
export declare class DeleteTransitGatewayResult extends SpeakeasyBase {
    transitGateway?: DeleteTransitGatewayResultTransitGateway;
}
