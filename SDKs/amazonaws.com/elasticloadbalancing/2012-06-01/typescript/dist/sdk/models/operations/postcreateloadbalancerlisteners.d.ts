import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateLoadBalancerListenersActionEnum {
    CreateLoadBalancerListeners = "CreateLoadBalancerListeners"
}
export declare enum POSTCreateLoadBalancerListenersVersionEnum {
    TwoThousandAndTwelve0601 = "2012-06-01"
}
export declare class POSTCreateLoadBalancerListenersRequest extends SpeakeasyBase {
    action: POSTCreateLoadBalancerListenersActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateLoadBalancerListenersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateLoadBalancerListenersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
