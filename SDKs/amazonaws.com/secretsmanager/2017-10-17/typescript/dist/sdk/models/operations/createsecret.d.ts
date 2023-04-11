import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSecretXAmzTargetEnum {
    SecretsmanagerCreateSecret = "secretsmanager.CreateSecret"
}
export declare class CreateSecretRequest extends SpeakeasyBase {
    createSecretRequest: shared.CreateSecretRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSecretXAmzTargetEnum;
}
export declare class CreateSecretResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSecretResponse?: shared.CreateSecretResponse;
    /**
     * DecryptionFailure
     */
    decryptionFailure?: any;
    /**
     * EncryptionFailure
     */
    encryptionFailure?: any;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * MalformedPolicyDocumentException
     */
    malformedPolicyDocumentException?: any;
    /**
     * PreconditionNotMetException
     */
    preconditionNotMetException?: any;
    /**
     * ResourceExistsException
     */
    resourceExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
