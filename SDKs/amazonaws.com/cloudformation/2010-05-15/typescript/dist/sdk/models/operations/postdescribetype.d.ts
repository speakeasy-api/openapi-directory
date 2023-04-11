import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeTypeActionEnum {
    DescribeType = "DescribeType"
}
export declare enum POSTDescribeTypeVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribeTypeRequest extends SpeakeasyBase {
    action: POSTDescribeTypeActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeTypeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
