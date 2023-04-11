import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetQueryExecutionXAmzTargetEnum {
    AmazonAthenaBatchGetQueryExecution = "AmazonAthena.BatchGetQueryExecution"
}
export declare class BatchGetQueryExecutionRequest extends SpeakeasyBase {
    batchGetQueryExecutionInput: shared.BatchGetQueryExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetQueryExecutionXAmzTargetEnum;
}
export declare class BatchGetQueryExecutionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetQueryExecutionOutput?: shared.BatchGetQueryExecutionOutput;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
