import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRegisterInstancesWithLoadBalancerActionEnum {
    RegisterInstancesWithLoadBalancer = "RegisterInstancesWithLoadBalancer"
}
export declare enum POSTRegisterInstancesWithLoadBalancerVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTRegisterInstancesWithLoadBalancerRequest extends SpeakeasyBase {
    action: POSTRegisterInstancesWithLoadBalancerActionEnum;
    requestBody?: Uint8Array;
    version: POSTRegisterInstancesWithLoadBalancerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRegisterInstancesWithLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
