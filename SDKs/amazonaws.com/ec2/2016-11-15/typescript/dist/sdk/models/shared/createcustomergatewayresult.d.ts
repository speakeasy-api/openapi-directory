import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the customer gateway.
**/
export declare class CreateCustomerGatewayResultCustomerGateway extends SpeakeasyBase {
    bgpAsn?: Record<string, any>;
    certificateArn?: Record<string, any>;
    customerGatewayId?: Record<string, any>;
    deviceName?: Record<string, any>;
    ipAddress?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    type?: Record<string, any>;
}
/**
 * Contains the output of CreateCustomerGateway.
**/
export declare class CreateCustomerGatewayResult extends SpeakeasyBase {
    customerGateway?: CreateCustomerGatewayResultCustomerGateway;
}
