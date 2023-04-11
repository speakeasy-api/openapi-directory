import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetCustomEntityTypesXAmzTargetEnum {
    AWSGlueBatchGetCustomEntityTypes = "AWSGlue.BatchGetCustomEntityTypes"
}
export declare class BatchGetCustomEntityTypesRequest extends SpeakeasyBase {
    batchGetCustomEntityTypesRequest: shared.BatchGetCustomEntityTypesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetCustomEntityTypesXAmzTargetEnum;
}
export declare class BatchGetCustomEntityTypesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetCustomEntityTypesResponse?: shared.BatchGetCustomEntityTypesResponse;
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
