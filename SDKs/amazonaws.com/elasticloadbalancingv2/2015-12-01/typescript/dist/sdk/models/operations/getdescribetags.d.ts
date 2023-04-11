import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeTagsActionEnum {
    DescribeTags = "DescribeTags"
}
export declare enum GETDescribeTagsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDescribeTagsRequest extends SpeakeasyBase {
    action: GETDescribeTagsActionEnum;
    /**
     * The Amazon Resource Names (ARN) of the resources. You can specify up to 20 resources in a single call.
     */
    resourceArns: string[];
    version: GETDescribeTagsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
