import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSecretVersionStageXAmzTargetEnum {
    SecretsmanagerUpdateSecretVersionStage = "secretsmanager.UpdateSecretVersionStage"
}
export declare class UpdateSecretVersionStageRequest extends SpeakeasyBase {
    updateSecretVersionStageRequest: shared.UpdateSecretVersionStageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSecretVersionStageXAmzTargetEnum;
}
export declare class UpdateSecretVersionStageResponse extends SpeakeasyBase {
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
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateSecretVersionStageResponse?: shared.UpdateSecretVersionStageResponse;
}
