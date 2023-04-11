import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisableAvailabilityZonesForLoadBalancerActionEnum {
    DisableAvailabilityZonesForLoadBalancer = "DisableAvailabilityZonesForLoadBalancer"
}
export declare enum GETDisableAvailabilityZonesForLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class GETDisableAvailabilityZonesForLoadBalancerRequest extends SpeakeasyBase {
    action: GETDisableAvailabilityZonesForLoadBalancerActionEnum;
    /**
     * The Availability Zones.
     */
    availabilityZones: string[];
    /**
     * The name of the load balancer.
     */
    loadBalancerName: string;
    version: GETDisableAvailabilityZonesForLoadBalancerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisableAvailabilityZonesForLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
