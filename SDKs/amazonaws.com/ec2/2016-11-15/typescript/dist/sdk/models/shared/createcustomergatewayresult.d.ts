import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateCustomerGatewayResultCustomerGatewayTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the customer gateway.
 */
export declare class CreateCustomerGatewayResultCustomerGateway extends SpeakeasyBase {
    bgpAsn?: string;
    certificateArn?: string;
    customerGatewayId?: string;
    deviceName?: string;
    ipAddress?: string;
    state?: string;
    tags?: CreateCustomerGatewayResultCustomerGatewayTags[];
    type?: string;
}
/**
 * Contains the output of CreateCustomerGateway.
 */
export declare class CreateCustomerGatewayResult extends SpeakeasyBase {
    customerGateway?: CreateCustomerGatewayResultCustomerGateway;
}
