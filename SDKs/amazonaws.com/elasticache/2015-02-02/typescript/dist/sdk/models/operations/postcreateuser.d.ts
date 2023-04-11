import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateUserActionEnum {
    CreateUser = "CreateUser"
}
export declare enum POSTCreateUserVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTCreateUserRequest extends SpeakeasyBase {
    action: POSTCreateUserActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateUserVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
