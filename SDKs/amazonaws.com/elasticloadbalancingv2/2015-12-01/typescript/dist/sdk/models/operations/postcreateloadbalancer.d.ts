import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateLoadBalancerActionEnum {
    CreateLoadBalancer = "CreateLoadBalancer"
}
export declare enum POSTCreateLoadBalancerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTCreateLoadBalancerRequest extends SpeakeasyBase {
    action: POSTCreateLoadBalancerActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateLoadBalancerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateLoadBalancerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
