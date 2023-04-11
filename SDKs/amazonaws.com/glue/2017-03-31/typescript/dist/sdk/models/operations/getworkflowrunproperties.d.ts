import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetWorkflowRunPropertiesXAmzTargetEnum {
    AWSGlueGetWorkflowRunProperties = "AWSGlue.GetWorkflowRunProperties"
}
export declare class GetWorkflowRunPropertiesRequest extends SpeakeasyBase {
    getWorkflowRunPropertiesRequest: shared.GetWorkflowRunPropertiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWorkflowRunPropertiesXAmzTargetEnum;
}
export declare class GetWorkflowRunPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getWorkflowRunPropertiesResponse?: shared.GetWorkflowRunPropertiesResponse;
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
}
