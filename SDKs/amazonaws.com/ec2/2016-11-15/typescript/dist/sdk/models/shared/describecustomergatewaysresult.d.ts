import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeCustomerGatewaysResultCustomerGatewaysTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a customer gateway.
 */
export declare class DescribeCustomerGatewaysResultCustomerGateways extends SpeakeasyBase {
    bgpAsn?: string;
    certificateArn?: string;
    customerGatewayId?: string;
    deviceName?: string;
    ipAddress?: string;
    state?: string;
    tags?: DescribeCustomerGatewaysResultCustomerGatewaysTags[];
    type?: string;
}
/**
 * Contains the output of DescribeCustomerGateways.
 */
export declare class DescribeCustomerGatewaysResult extends SpeakeasyBase {
    customerGateways?: DescribeCustomerGatewaysResultCustomerGateways[];
}
