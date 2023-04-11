import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTChangePasswordActionEnum {
    ChangePassword = "ChangePassword"
}
export declare enum POSTChangePasswordVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTChangePasswordRequest extends SpeakeasyBase {
    action: POSTChangePasswordActionEnum;
    requestBody?: Uint8Array;
    version: POSTChangePasswordVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTChangePasswordResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
