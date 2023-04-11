import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetSSHPublicKeyActionEnum {
    GetSSHPublicKey = "GetSSHPublicKey"
}
export declare enum POSTGetSSHPublicKeyVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetSSHPublicKeyRequest extends SpeakeasyBase {
    action: POSTGetSSHPublicKeyActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetSSHPublicKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetSSHPublicKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
