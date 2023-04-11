import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreSecretXAmzTargetEnum {
    SecretsmanagerRestoreSecret = "secretsmanager.RestoreSecret"
}
export declare class RestoreSecretRequest extends SpeakeasyBase {
    restoreSecretRequest: shared.RestoreSecretRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreSecretXAmzTargetEnum;
}
export declare class RestoreSecretResponse extends SpeakeasyBase {
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
    restoreSecretResponse?: shared.RestoreSecretResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
