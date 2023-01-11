import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the egress-only internet gateway.
**/
export declare class CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway extends SpeakeasyBase {
    attachments?: Record<string, any>;
    egressOnlyInternetGatewayId?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class CreateEgressOnlyInternetGatewayResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    egressOnlyInternetGateway?: CreateEgressOnlyInternetGatewayResultEgressOnlyInternetGateway;
}
