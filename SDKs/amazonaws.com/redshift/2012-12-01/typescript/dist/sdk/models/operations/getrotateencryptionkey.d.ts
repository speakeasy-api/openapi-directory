import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRotateEncryptionKeyActionEnum {
    RotateEncryptionKey = "RotateEncryptionKey"
}
export declare enum GETRotateEncryptionKeyVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETRotateEncryptionKeyRequest extends SpeakeasyBase {
    action: GETRotateEncryptionKeyActionEnum;
    /**
     * <p>The unique identifier of the cluster that you want to rotate the encryption keys for.</p> <p>Constraints: Must be the name of valid cluster that has encryption enabled.</p>
     */
    clusterIdentifier: string;
    version: GETRotateEncryptionKeyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRotateEncryptionKeyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
