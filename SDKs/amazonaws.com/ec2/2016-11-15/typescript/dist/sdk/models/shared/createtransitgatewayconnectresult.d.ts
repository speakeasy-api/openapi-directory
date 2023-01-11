import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Connect attachment options.
**/
export declare class CreateTransitGatewayConnectResultTransitGatewayConnectOptions extends SpeakeasyBase {
    protocol?: Record<string, any>;
}
/**
 * Information about the Connect attachment.
**/
export declare class CreateTransitGatewayConnectResultTransitGatewayConnect extends SpeakeasyBase {
    creationTime?: Record<string, any>;
    options?: CreateTransitGatewayConnectResultTransitGatewayConnectOptions;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    transitGatewayAttachmentId?: Record<string, any>;
    transitGatewayId?: Record<string, any>;
    transportTransitGatewayAttachmentId?: Record<string, any>;
}
export declare class CreateTransitGatewayConnectResult extends SpeakeasyBase {
    transitGatewayConnect?: CreateTransitGatewayConnectResultTransitGatewayConnect;
}
