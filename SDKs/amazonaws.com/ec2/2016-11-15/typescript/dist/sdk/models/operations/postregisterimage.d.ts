import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRegisterImageActionEnum {
    RegisterImage = "RegisterImage"
}
export declare enum POSTRegisterImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRegisterImageRequest extends SpeakeasyBase {
    action: POSTRegisterImageActionEnum;
    requestBody?: Uint8Array;
    version: POSTRegisterImageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRegisterImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
