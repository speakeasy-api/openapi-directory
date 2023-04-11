import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteLoadBalancerActionEnum {
    DeleteLoadBalancer = "DeleteLoadBalancer"
}
export declare enum GETDeleteLoadBalancerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETDeleteLoadBalancerRequest extends SpeakeasyBase {
    action: GETDeleteLoadBalancerActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    loadBalancerArn: string;
    version: GETDeleteLoadBalancerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
