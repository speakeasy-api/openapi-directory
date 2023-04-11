import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSecretXAmzTargetEnum {
    SecretsmanagerDeleteSecret = "secretsmanager.DeleteSecret"
}
export declare class DeleteSecretRequest extends SpeakeasyBase {
    deleteSecretRequest: shared.DeleteSecretRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSecretXAmzTargetEnum;
}
export declare class DeleteSecretResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSecretResponse?: shared.DeleteSecretResponse;
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
