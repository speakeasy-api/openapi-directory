import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the internet gateway.
**/
export declare class CreateInternetGatewayResultInternetGateway extends SpeakeasyBase {
    attachments?: Record<string, any>;
    internetGatewayId?: Record<string, any>;
    ownerId?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class CreateInternetGatewayResult extends SpeakeasyBase {
    internetGateway?: CreateInternetGatewayResultInternetGateway;
}
