import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDetachLoadBalancerFromSubnetsActionEnum {
    DetachLoadBalancerFromSubnets = "DetachLoadBalancerFromSubnets"
}
export declare enum GETDetachLoadBalancerFromSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETDetachLoadBalancerFromSubnetsRequest extends SpeakeasyBase {
    action: GETDetachLoadBalancerFromSubnetsActionEnum;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    /**
     * The IDs of the subnets.
     */
    subnets: string[];
    version: GETDetachLoadBalancerFromSubnetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDetachLoadBalancerFromSubnetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
