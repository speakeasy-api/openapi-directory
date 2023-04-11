import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelRotateSecretXAmzTargetEnum {
    SecretsmanagerCancelRotateSecret = "secretsmanager.CancelRotateSecret"
}
export declare class CancelRotateSecretRequest extends SpeakeasyBase {
    cancelRotateSecretRequest: shared.CancelRotateSecretRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelRotateSecretXAmzTargetEnum;
}
export declare class CancelRotateSecretResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelRotateSecretResponse?: shared.CancelRotateSecretResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
