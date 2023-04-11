import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Encryption config for Connect Instance. Note that sensitive data will always be encrypted. If disabled, service will perform encryption with its own key. If enabled, a KMS key id needs to be provided and KMS charges will apply. KMS is only type supported
 */
export declare class StartInstanceOnboardingJobRequestBodyEncryptionConfig extends SpeakeasyBase {
    /**
     * Boolean to indicate if custom encryption has been enabled.
     */
    enabled?: boolean;
    /**
     * Server-side encryption type.
     */
    encryptionType?: shared.EncryptionTypeEnum;
    /**
     * KMS key id/arn for encryption config.
     */
    keyArn?: string;
}
export declare class StartInstanceOnboardingJobRequestBody extends SpeakeasyBase {
    /**
     * Encryption config for Connect Instance. Note that sensitive data will always be encrypted. If disabled, service will perform encryption with its own key. If enabled, a KMS key id needs to be provided and KMS charges will apply. KMS is only type supported
     */
    encryptionConfig: StartInstanceOnboardingJobRequestBodyEncryptionConfig;
}
export declare class StartInstanceOnboardingJobRequest extends SpeakeasyBase {
    requestBody: StartInstanceOnboardingJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    connectInstanceId: string;
}
export declare class StartInstanceOnboardingJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startInstanceOnboardingJobResponse?: shared.StartInstanceOnboardingJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
