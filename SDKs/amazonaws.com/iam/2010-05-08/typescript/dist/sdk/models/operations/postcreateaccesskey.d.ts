import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateAccessKeyActionEnum {
    CreateAccessKey = "CreateAccessKey"
}
export declare enum POSTCreateAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTCreateAccessKeyRequest extends SpeakeasyBase {
    action: POSTCreateAccessKeyActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateAccessKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateAccessKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
