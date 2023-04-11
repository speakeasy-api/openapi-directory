import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeAccountLimitsActionEnum {
    DescribeAccountLimits = "DescribeAccountLimits"
}
export declare enum GETDescribeAccountLimitsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDescribeAccountLimitsRequest extends SpeakeasyBase {
    action: GETDescribeAccountLimitsActionEnum;
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    marker?: string;
    /**
     * The maximum number of results to return with this call.
     */
    pageSize?: number;
    version: GETDescribeAccountLimitsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeAccountLimitsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
