import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetUserActionEnum {
    GetUser = "GetUser"
}
export declare enum POSTGetUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetUserRequest extends SpeakeasyBase {
    action: POSTGetUserActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetUserVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
