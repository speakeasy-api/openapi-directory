import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutWorkflowRunPropertiesXAmzTargetEnum {
    AWSGluePutWorkflowRunProperties = "AWSGlue.PutWorkflowRunProperties"
}
export declare class PutWorkflowRunPropertiesRequest extends SpeakeasyBase {
    putWorkflowRunPropertiesRequest: shared.PutWorkflowRunPropertiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutWorkflowRunPropertiesXAmzTargetEnum;
}
export declare class PutWorkflowRunPropertiesResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
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
    /**
     * Success
     */
    putWorkflowRunPropertiesResponse?: Record<string, any>;
    /**
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
