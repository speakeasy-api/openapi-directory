import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeStackSetOperationActionEnum {
    DescribeStackSetOperation = "DescribeStackSetOperation"
}
export declare enum POSTDescribeStackSetOperationVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribeStackSetOperationRequest extends SpeakeasyBase {
    action: POSTDescribeStackSetOperationActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeStackSetOperationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeStackSetOperationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
