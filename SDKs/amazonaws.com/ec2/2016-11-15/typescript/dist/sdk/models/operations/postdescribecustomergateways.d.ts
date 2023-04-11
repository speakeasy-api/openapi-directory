import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeCustomerGatewaysActionEnum {
    DescribeCustomerGateways = "DescribeCustomerGateways"
}
export declare enum POSTDescribeCustomerGatewaysVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeCustomerGatewaysRequest extends SpeakeasyBase {
    action: POSTDescribeCustomerGatewaysActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeCustomerGatewaysVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeCustomerGatewaysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
