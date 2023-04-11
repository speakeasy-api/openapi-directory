import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMapRunsXAmzTargetEnum {
    AWSStepFunctionsListMapRuns = "AWSStepFunctions.ListMapRuns"
}
export declare class ListMapRunsRequest extends SpeakeasyBase {
    listMapRunsInput: shared.ListMapRunsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMapRunsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListMapRunsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExecutionDoesNotExist
     */
    executionDoesNotExist?: any;
    /**
     * InvalidArn
     */
    invalidArn?: any;
    /**
     * InvalidToken
     */
    invalidToken?: any;
    /**
     * Success
     */
    listMapRunsOutput?: shared.ListMapRunsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
