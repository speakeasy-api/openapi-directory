import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeVpcEndpointServicesActionEnum {
    DescribeVpcEndpointServices = "DescribeVpcEndpointServices"
}
export declare enum POSTDescribeVpcEndpointServicesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeVpcEndpointServicesRequest extends SpeakeasyBase {
    action: POSTDescribeVpcEndpointServicesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeVpcEndpointServicesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeVpcEndpointServicesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
