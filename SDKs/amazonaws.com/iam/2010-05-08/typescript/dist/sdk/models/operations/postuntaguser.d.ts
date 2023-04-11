import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUntagUserActionEnum {
    UntagUser = "UntagUser"
}
export declare enum POSTUntagUserVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUntagUserRequest extends SpeakeasyBase {
    action: POSTUntagUserActionEnum;
    requestBody?: Uint8Array;
    version: POSTUntagUserVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUntagUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
