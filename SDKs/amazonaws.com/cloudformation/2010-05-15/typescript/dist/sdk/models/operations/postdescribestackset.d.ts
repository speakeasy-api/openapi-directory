import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeStackSetActionEnum {
    DescribeStackSet = "DescribeStackSet"
}
export declare enum POSTDescribeStackSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribeStackSetRequest extends SpeakeasyBase {
    action: POSTDescribeStackSetActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeStackSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeStackSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
