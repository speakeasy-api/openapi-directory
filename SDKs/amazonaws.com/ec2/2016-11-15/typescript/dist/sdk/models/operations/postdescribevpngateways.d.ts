import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeVpnGatewaysActionEnum {
    DescribeVpnGateways = "DescribeVpnGateways"
}
export declare enum POSTDescribeVpnGatewaysVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeVpnGatewaysRequest extends SpeakeasyBase {
    action: POSTDescribeVpnGatewaysActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeVpnGatewaysVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeVpnGatewaysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
