import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRegisterDBProxyTargetsActionEnum {
    RegisterDBProxyTargets = "RegisterDBProxyTargets"
}
export declare enum POSTRegisterDBProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTRegisterDBProxyTargetsRequest extends SpeakeasyBase {
    action: POSTRegisterDBProxyTargetsActionEnum;
    requestBody?: Uint8Array;
    version: POSTRegisterDBProxyTargetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRegisterDBProxyTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
