import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetLoadBalancerPoliciesForBackendServerActionEnum {
    SetLoadBalancerPoliciesForBackendServer = "SetLoadBalancerPoliciesForBackendServer"
}
export declare enum GETSetLoadBalancerPoliciesForBackendServerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETSetLoadBalancerPoliciesForBackendServerRequest extends SpeakeasyBase {
    action: GETSetLoadBalancerPoliciesForBackendServerActionEnum;
    /**
     * The port number associated with the EC2 instance.
     */
    instancePort: number;
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    /**
     * The names of the policies. If the list is empty, then all current polices are removed from the EC2 instance.
     */
    policyNames: string[];
    version: GETSetLoadBalancerPoliciesForBackendServerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetLoadBalancerPoliciesForBackendServerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
