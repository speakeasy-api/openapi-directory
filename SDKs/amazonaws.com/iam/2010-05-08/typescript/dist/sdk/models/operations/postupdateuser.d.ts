import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateUserActionEnum {
    UpdateUser = "UpdateUser"
}
export declare enum POSTUpdateUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUpdateUserRequest extends SpeakeasyBase {
    action: POSTUpdateUserActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateUserVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
