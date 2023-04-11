import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeInstanceHealthActionEnum {
    DescribeInstanceHealth = "DescribeInstanceHealth"
}
export declare enum POSTDescribeInstanceHealthVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTDescribeInstanceHealthRequest extends SpeakeasyBase {
    action: POSTDescribeInstanceHealthActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeInstanceHealthVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeInstanceHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
