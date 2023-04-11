import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSecretValueXAmzTargetEnum {
    SecretsmanagerGetSecretValue = "secretsmanager.GetSecretValue"
}
export declare class GetSecretValueRequest extends SpeakeasyBase {
    getSecretValueRequest: shared.GetSecretValueRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSecretValueXAmzTargetEnum;
}
export declare class GetSecretValueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DecryptionFailure
     */
    decryptionFailure?: any;
    /**
     * Success
     */
    getSecretValueResponse?: shared.GetSecretValueResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
