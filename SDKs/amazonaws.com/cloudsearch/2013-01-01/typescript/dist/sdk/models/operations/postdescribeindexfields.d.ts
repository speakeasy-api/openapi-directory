import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeIndexFieldsActionEnum {
    DescribeIndexFields = "DescribeIndexFields"
}
export declare enum POSTDescribeIndexFieldsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDescribeIndexFieldsRequest extends SpeakeasyBase {
    action: POSTDescribeIndexFieldsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeIndexFieldsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeIndexFieldsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
