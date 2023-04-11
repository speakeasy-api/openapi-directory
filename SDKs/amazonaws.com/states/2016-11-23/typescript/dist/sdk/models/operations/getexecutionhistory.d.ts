import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetExecutionHistoryXAmzTargetEnum {
    AWSStepFunctionsGetExecutionHistory = "AWSStepFunctions.GetExecutionHistory"
}
export declare class GetExecutionHistoryRequest extends SpeakeasyBase {
    getExecutionHistoryInput: shared.GetExecutionHistoryInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetExecutionHistoryXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetExecutionHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExecutionDoesNotExist
     */
    executionDoesNotExist?: any;
    /**
     * Success
     */
    getExecutionHistoryOutput?: shared.GetExecutionHistoryOutput;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    /**
     * InvalidToken
     */
    invalidToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
