import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of encryption used for the encryption configuration.
 */
export declare enum PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum {
    SitewiseDefaultEncryption = "SITEWISE_DEFAULT_ENCRYPTION",
    KmsBasedEncryption = "KMS_BASED_ENCRYPTION"
}
export declare class PutDefaultEncryptionConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The type of encryption used for the encryption configuration.
     */
    encryptionType: PutDefaultEncryptionConfigurationRequestBodyEncryptionTypeEnum;
    /**
     * The Key ID of the customer managed key used for KMS encryption. This is required if you use <code>KMS_BASED_ENCRYPTION</code>.
     */
    kmsKeyId?: string;
}
export declare class PutDefaultEncryptionConfigurationRequest extends SpeakeasyBase {
    requestBody: PutDefaultEncryptionConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutDefaultEncryptionConfigurationResponse extends SpeakeasyBase {
    /**
     * ConflictingOperationException
     */
    conflictingOperationException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    putDefaultEncryptionConfigurationResponse?: shared.PutDefaultEncryptionConfigurationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
