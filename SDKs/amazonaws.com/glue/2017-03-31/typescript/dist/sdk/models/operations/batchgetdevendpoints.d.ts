import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetDevEndpointsXAmzTargetEnum {
    AWSGlueBatchGetDevEndpoints = "AWSGlue.BatchGetDevEndpoints"
}
export declare class BatchGetDevEndpointsRequest extends SpeakeasyBase {
    batchGetDevEndpointsRequest: shared.BatchGetDevEndpointsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDevEndpointsXAmzTargetEnum;
}
export declare class BatchGetDevEndpointsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    batchGetDevEndpointsResponse?: shared.BatchGetDevEndpointsResponse;
    contentType: string;
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
