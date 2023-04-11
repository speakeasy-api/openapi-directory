import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RunStatementXAmzTargetEnum {
    AWSGlueRunStatement = "AWSGlue.RunStatement"
}
export declare class RunStatementRequest extends SpeakeasyBase {
    runStatementRequest: shared.RunStatementRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RunStatementXAmzTargetEnum;
}
export declare class RunStatementResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * IllegalSessionStateException
     */
    illegalSessionStateException?: any;
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
    /**
     * Success
     */
    runStatementResponse?: shared.RunStatementResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
