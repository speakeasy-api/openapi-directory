import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Information about a public key you add to CloudFront to use with features like field-level encryption.
 */
export declare class CreatePublicKey20190326RequestBodyPublicKeyConfig extends SpeakeasyBase {
    callerReference?: string;
    comment?: string;
    encodedKey?: string;
    name?: string;
}
export declare class CreatePublicKey20190326RequestBody extends SpeakeasyBase {
    /**
     * Information about a public key you add to CloudFront to use with features like field-level encryption.
     */
    publicKeyConfig: CreatePublicKey20190326RequestBodyPublicKeyConfig;
}
export declare class CreatePublicKey20190326Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreatePublicKey20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
