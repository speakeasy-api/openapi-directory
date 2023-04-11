import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeregisterInstancesFromLoadBalancerActionEnum {
    DeregisterInstancesFromLoadBalancer = "DeregisterInstancesFromLoadBalancer"
}
export declare enum POSTDeregisterInstancesFromLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTDeregisterInstancesFromLoadBalancerRequest extends SpeakeasyBase {
    action: POSTDeregisterInstancesFromLoadBalancerActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeregisterInstancesFromLoadBalancerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeregisterInstancesFromLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
