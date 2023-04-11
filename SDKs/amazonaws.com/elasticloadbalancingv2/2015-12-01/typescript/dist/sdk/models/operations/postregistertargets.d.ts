import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRegisterTargetsActionEnum {
    RegisterTargets = "RegisterTargets"
}
export declare enum POSTRegisterTargetsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTRegisterTargetsRequest extends SpeakeasyBase {
    action: POSTRegisterTargetsActionEnum;
    requestBody?: Uint8Array;
    version: POSTRegisterTargetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRegisterTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
