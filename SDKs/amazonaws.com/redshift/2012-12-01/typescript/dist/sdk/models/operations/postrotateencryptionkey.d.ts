import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRotateEncryptionKeyActionEnum {
    RotateEncryptionKey = "RotateEncryptionKey"
}
export declare enum POSTRotateEncryptionKeyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTRotateEncryptionKeyRequest extends SpeakeasyBase {
    action: POSTRotateEncryptionKeyActionEnum;
    requestBody?: Uint8Array;
    version: POSTRotateEncryptionKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRotateEncryptionKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
