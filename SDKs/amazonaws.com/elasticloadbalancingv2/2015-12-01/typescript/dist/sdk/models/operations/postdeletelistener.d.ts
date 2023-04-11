import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteListenerActionEnum {
    DeleteListener = "DeleteListener"
}
export declare enum POSTDeleteListenerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTDeleteListenerRequest extends SpeakeasyBase {
    action: POSTDeleteListenerActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteListenerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
