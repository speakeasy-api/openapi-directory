import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Information about a public key you add to CloudFront to use with features like field-level encryption.
 */
export declare class CreatePublicKey20180618RequestBodyPublicKeyConfig extends SpeakeasyBase {
    callerReference?: string;
    comment?: string;
    encodedKey?: string;
    name?: string;
}
export declare class CreatePublicKey20180618RequestBody extends SpeakeasyBase {
    /**
     * Information about a public key you add to CloudFront to use with features like field-level encryption.
     */
    publicKeyConfig: CreatePublicKey20180618RequestBodyPublicKeyConfig;
}
export declare class CreatePublicKey20180618Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreatePublicKey20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
