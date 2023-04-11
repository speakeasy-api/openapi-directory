import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyListenerActionEnum {
    ModifyListener = "ModifyListener"
}
export declare enum POSTModifyListenerVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTModifyListenerRequest extends SpeakeasyBase {
    action: POSTModifyListenerActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyListenerVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyListenerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
