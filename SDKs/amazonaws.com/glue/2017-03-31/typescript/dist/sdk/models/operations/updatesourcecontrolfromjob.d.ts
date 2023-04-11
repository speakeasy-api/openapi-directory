import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSourceControlFromJobXAmzTargetEnum {
    AWSGlueUpdateSourceControlFromJob = "AWSGlue.UpdateSourceControlFromJob"
}
export declare class UpdateSourceControlFromJobRequest extends SpeakeasyBase {
    updateSourceControlFromJobRequest: shared.UpdateSourceControlFromJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSourceControlFromJobXAmzTargetEnum;
}
export declare class UpdateSourceControlFromJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSourceControlFromJobResponse?: shared.UpdateSourceControlFromJobResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
