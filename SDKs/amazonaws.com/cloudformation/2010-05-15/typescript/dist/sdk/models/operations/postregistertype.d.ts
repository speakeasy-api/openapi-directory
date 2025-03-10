import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRegisterTypeActionEnum {
    RegisterType = "RegisterType"
}
export declare enum POSTRegisterTypeVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTRegisterTypeRequest extends SpeakeasyBase {
    action: POSTRegisterTypeActionEnum;
    requestBody?: Uint8Array;
    version: POSTRegisterTypeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRegisterTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
