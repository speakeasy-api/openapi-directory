import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDetachLoadBalancersActionEnum {
    DetachLoadBalancers = "DetachLoadBalancers"
}
export declare enum GETDetachLoadBalancersVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDetachLoadBalancersRequest extends SpeakeasyBase {
    action: GETDetachLoadBalancersActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The names of the load balancers. You can specify up to 10 load balancers.
     */
    loadBalancerNames: string[];
    version: GETDetachLoadBalancersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDetachLoadBalancersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
