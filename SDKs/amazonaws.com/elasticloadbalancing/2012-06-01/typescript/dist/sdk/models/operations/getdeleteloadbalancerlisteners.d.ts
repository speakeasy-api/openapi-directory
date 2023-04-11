import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteLoadBalancerListenersActionEnum {
    DeleteLoadBalancerListeners = "DeleteLoadBalancerListeners"
}
export declare enum GETDeleteLoadBalancerListenersVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETDeleteLoadBalancerListenersRequest extends SpeakeasyBase {
    action: GETDeleteLoadBalancerListenersActionEnum;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    /**
     * The client port numbers of the listeners.
     */
    loadBalancerPorts: number[];
    version: GETDeleteLoadBalancerListenersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteLoadBalancerListenersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
