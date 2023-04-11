import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteSSHPublicKeyActionEnum {
    DeleteSSHPublicKey = "DeleteSSHPublicKey"
}
export declare enum POSTDeleteSSHPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTDeleteSSHPublicKeyRequest extends SpeakeasyBase {
    action: POSTDeleteSSHPublicKeyActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteSSHPublicKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteSSHPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
