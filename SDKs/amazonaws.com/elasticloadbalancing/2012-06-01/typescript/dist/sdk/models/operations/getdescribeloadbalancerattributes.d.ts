import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeLoadBalancerAttributesActionEnum {
    DescribeLoadBalancerAttributes = "DescribeLoadBalancerAttributes"
}
export declare enum GETDescribeLoadBalancerAttributesVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETDescribeLoadBalancerAttributesRequest extends SpeakeasyBase {
    action: GETDescribeLoadBalancerAttributesActionEnum;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    version: GETDescribeLoadBalancerAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeLoadBalancerAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
