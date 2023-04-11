import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeregisterDBProxyTargetsActionEnum {
    DeregisterDBProxyTargets = "DeregisterDBProxyTargets"
}
export declare enum POSTDeregisterDBProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDeregisterDBProxyTargetsRequest extends SpeakeasyBase {
    action: POSTDeregisterDBProxyTargetsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeregisterDBProxyTargetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeregisterDBProxyTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
