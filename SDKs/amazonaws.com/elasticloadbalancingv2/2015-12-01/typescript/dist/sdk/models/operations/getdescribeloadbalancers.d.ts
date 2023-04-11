import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeLoadBalancersActionEnum {
    DescribeLoadBalancers = "DescribeLoadBalancers"
}
export declare enum GETDescribeLoadBalancersVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDescribeLoadBalancersRequest extends SpeakeasyBase {
    action: GETDescribeLoadBalancersActionEnum;
    /**
     * The Amazon Resource Names (ARN) of the load balancers. You can specify up to 20 load balancers in a single call.
     */
    loadBalancerArns?: string[];
    /**
     * The marker for the next set of results. (You received this marker from a previous call.)
     */
    marker?: string;
    /**
     * The names of the load balancers.
     */
    names?: string[];
    /**
     * The maximum number of results to return with this call.
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
