import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteAccessKeyActionEnum {
    DeleteAccessKey = "DeleteAccessKey"
}
export declare enum POSTDeleteAccessKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTDeleteAccessKeyRequest extends SpeakeasyBase {
    action: POSTDeleteAccessKeyActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteAccessKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteAccessKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
