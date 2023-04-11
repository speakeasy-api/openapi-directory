import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCustomEntityTypeXAmzTargetEnum {
    AWSGlueCreateCustomEntityType = "AWSGlue.CreateCustomEntityType"
}
export declare class CreateCustomEntityTypeRequest extends SpeakeasyBase {
    createCustomEntityTypeRequest: shared.CreateCustomEntityTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomEntityTypeXAmzTargetEnum;
}
export declare class CreateCustomEntityTypeResponse extends SpeakeasyBase {
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
     * Success
     */
    createCustomEntityTypeResponse?: shared.CreateCustomEntityTypeResponse;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
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
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
