import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeSSLPoliciesActionEnum {
    DescribeSSLPolicies = "DescribeSSLPolicies"
}
export declare enum POSTDescribeSSLPoliciesVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTDescribeSSLPoliciesRequest extends SpeakeasyBase {
    action: POSTDescribeSSLPoliciesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeSSLPoliciesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeSSLPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
