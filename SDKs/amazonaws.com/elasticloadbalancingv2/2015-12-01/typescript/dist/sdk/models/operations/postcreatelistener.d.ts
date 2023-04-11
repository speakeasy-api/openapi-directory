import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateListenerActionEnum {
    CreateListener = "CreateListener"
}
export declare enum POSTCreateListenerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTCreateListenerRequest extends SpeakeasyBase {
    action: POSTCreateListenerActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateListenerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
