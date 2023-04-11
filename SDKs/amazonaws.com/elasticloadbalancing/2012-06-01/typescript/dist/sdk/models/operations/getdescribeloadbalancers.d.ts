import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeLoadBalancersActionEnum {
    DescribeLoadBalancers = "DescribeLoadBalancers"
}
export declare enum GETDescribeLoadBalancersVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETDescribeLoadBalancersRequest extends SpeakeasyBase {
    action: GETDescribeLoadBalancersActionEnum;
    /**
     * The names of the load balancers.
     */
    loadBalancerNames?: string[];
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    marker?: string;
    /**
     * The maximum number of results to return with this call (a number from 1 to 400). The default is 400.
     */
    pageSize?: number;
    version: GETDescribeLoadBalancersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeLoadBalancersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
