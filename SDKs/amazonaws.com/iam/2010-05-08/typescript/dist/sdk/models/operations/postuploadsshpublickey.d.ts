import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUploadSSHPublicKeyActionEnum {
    UploadSSHPublicKey = "UploadSSHPublicKey"
}
export declare enum POSTUploadSSHPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTUploadSSHPublicKeyRequest extends SpeakeasyBase {
    action: POSTUploadSSHPublicKeyActionEnum;
    requestBody?: Uint8Array;
    version: POSTUploadSSHPublicKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUploadSSHPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
