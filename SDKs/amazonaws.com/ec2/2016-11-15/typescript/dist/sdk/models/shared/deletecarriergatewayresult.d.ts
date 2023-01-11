import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the carrier gateway.
**/
export declare class DeleteCarrierGatewayResultCarrierGateway extends SpeakeasyBase {
    carrierGatewayId?: Record<string, any>;
    ownerId?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    vpcId?: Record<string, any>;
}
export declare class DeleteCarrierGatewayResult extends SpeakeasyBase {
    carrierGateway?: DeleteCarrierGatewayResultCarrierGateway;
}
