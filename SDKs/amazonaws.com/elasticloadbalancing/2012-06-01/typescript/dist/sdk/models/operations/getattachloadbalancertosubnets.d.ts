import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAttachLoadBalancerToSubnetsActionEnum {
    AttachLoadBalancerToSubnets = "AttachLoadBalancerToSubnets"
}
export declare enum GETAttachLoadBalancerToSubnetsVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETAttachLoadBalancerToSubnetsRequest extends SpeakeasyBase {
    action: GETAttachLoadBalancerToSubnetsActionEnum;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    /**
     * The IDs of the subnets to add. You can add only one subnet per Availability Zone.
     */
    subnets: string[];
    version: GETAttachLoadBalancerToSubnetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAttachLoadBalancerToSubnetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
