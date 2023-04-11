import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RotateSecretXAmzTargetEnum {
    SecretsmanagerRotateSecret = "secretsmanager.RotateSecret"
}
export declare class RotateSecretRequest extends SpeakeasyBase {
    rotateSecretRequest: shared.RotateSecretRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RotateSecretXAmzTargetEnum;
}
export declare class RotateSecretResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    rotateSecretResponse?: shared.RotateSecretResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
