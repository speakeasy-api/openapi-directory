import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeTagsActionEnum {
    DescribeTags = "DescribeTags"
}
export declare enum GETDescribeTagsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETDescribeTagsRequest extends SpeakeasyBase {
    action: GETDescribeTagsActionEnum;
    /**
     * The names of the load balancers.
     */
    loadBalancerNames: string[];
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
