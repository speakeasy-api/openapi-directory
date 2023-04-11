import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeInstanceAttributeActionEnum {
    DescribeInstanceAttribute = "DescribeInstanceAttribute"
}
export declare enum POSTDescribeInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeInstanceAttributeRequest extends SpeakeasyBase {
    action: POSTDescribeInstanceAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeInstanceAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeInstanceAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
