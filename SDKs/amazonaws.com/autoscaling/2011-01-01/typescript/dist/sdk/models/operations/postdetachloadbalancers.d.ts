import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetachLoadBalancersActionEnum {
    DetachLoadBalancers = "DetachLoadBalancers"
}
export declare enum POSTDetachLoadBalancersVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTDetachLoadBalancersRequest extends SpeakeasyBase {
    action: POSTDetachLoadBalancersActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetachLoadBalancersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetachLoadBalancersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
