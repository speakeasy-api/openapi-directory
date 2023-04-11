import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSecretXAmzTargetEnum {
    SecretsmanagerUpdateSecret = "secretsmanager.UpdateSecret"
}
export declare class UpdateSecretRequest extends SpeakeasyBase {
    updateSecretRequest: shared.UpdateSecretRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSecretXAmzTargetEnum;
}
export declare class UpdateSecretResponse extends SpeakeasyBase {
    contentType: string;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceExistsException
     */
    resourceExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateSecretResponse?: shared.UpdateSecretResponse;
}
