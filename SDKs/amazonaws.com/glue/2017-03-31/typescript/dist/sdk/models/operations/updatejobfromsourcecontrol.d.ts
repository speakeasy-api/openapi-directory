import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateJobFromSourceControlXAmzTargetEnum {
    AWSGlueUpdateJobFromSourceControl = "AWSGlue.UpdateJobFromSourceControl"
}
export declare class UpdateJobFromSourceControlRequest extends SpeakeasyBase {
    updateJobFromSourceControlRequest: shared.UpdateJobFromSourceControlRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateJobFromSourceControlXAmzTargetEnum;
}
export declare class UpdateJobFromSourceControlResponse extends SpeakeasyBase {
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
    updateJobFromSourceControlResponse?: shared.UpdateJobFromSourceControlResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
