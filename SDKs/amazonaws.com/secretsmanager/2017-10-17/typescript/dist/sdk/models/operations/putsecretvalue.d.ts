import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutSecretValueXAmzTargetEnum {
    SecretsmanagerPutSecretValue = "secretsmanager.PutSecretValue"
}
export declare class PutSecretValueRequest extends SpeakeasyBase {
    putSecretValueRequest: shared.PutSecretValueRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutSecretValueXAmzTargetEnum;
}
export declare class PutSecretValueResponse extends SpeakeasyBase {
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
     * Success
     */
    putSecretValueResponse?: shared.PutSecretValueResponse;
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
