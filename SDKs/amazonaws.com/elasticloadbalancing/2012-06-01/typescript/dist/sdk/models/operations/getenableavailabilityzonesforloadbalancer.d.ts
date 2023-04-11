import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnableAvailabilityZonesForLoadBalancerActionEnum {
    EnableAvailabilityZonesForLoadBalancer = "EnableAvailabilityZonesForLoadBalancer"
}
export declare enum GETEnableAvailabilityZonesForLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETEnableAvailabilityZonesForLoadBalancerRequest extends SpeakeasyBase {
    action: GETEnableAvailabilityZonesForLoadBalancerActionEnum;
    /**
     * The Availability Zones. These must be in the same region as the load balancer.
     */
    availabilityZones: string[];
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    version: GETEnableAvailabilityZonesForLoadBalancerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnableAvailabilityZonesForLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
