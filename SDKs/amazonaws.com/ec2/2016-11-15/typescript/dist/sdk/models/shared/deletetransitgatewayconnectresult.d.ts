import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Connect attachment options.
**/
export declare class DeleteTransitGatewayConnectResultTransitGatewayConnectOptions extends SpeakeasyBase {
    protocol?: Record<string, any>;
}
/**
 * Information about the deleted Connect attachment.
**/
export declare class DeleteTransitGatewayConnectResultTransitGatewayConnect extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    options?: DeleteTransitGatewayConnectResultTransitGatewayConnectOptions;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
    transportTransitGatewayAttachmentId?: Record<string, any>;
}
export declare class DeleteTransitGatewayConnectResult extends SpeakeasyBase {
    transitGatewayConnect?: DeleteTransitGatewayConnectResultTransitGatewayConnect;
}
