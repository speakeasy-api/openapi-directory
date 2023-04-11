import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateStageRequestBody extends SpeakeasyBase {
    /**
     * ARN of the stage to be updated.
     */
    arn: string;
    /**
     * Name of the stage to be updated.
     */
    name?: string;
}
export declare class UpdateStageRequest extends SpeakeasyBase {
    requestBody: UpdateStageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateStageResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * PendingVerification
     */
    pendingVerification?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    updateStageResponse?: shared.UpdateStageResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
