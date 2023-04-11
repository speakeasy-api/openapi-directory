import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeTagsActionEnum {
    DescribeTags = "DescribeTags"
}
export declare enum POSTDescribeTagsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTDescribeTagsRequest extends SpeakeasyBase {
    action: POSTDescribeTagsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
