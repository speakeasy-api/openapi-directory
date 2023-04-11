import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTActivateTypeActionEnum {
    ActivateType = "ActivateType"
}
export declare enum POSTActivateTypeVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTActivateTypeRequest extends SpeakeasyBase {
    action: POSTActivateTypeActionEnum;
    requestBody?: Uint8Array;
    version: POSTActivateTypeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTActivateTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
