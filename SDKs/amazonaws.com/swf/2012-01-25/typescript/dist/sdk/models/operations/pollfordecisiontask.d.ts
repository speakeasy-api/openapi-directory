import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PollForDecisionTaskXAmzTargetEnum {
    SimpleWorkflowServicePollForDecisionTask = "SimpleWorkflowService.PollForDecisionTask"
}
export declare class PollForDecisionTaskRequest extends SpeakeasyBase {
    pollForDecisionTaskInput: shared.PollForDecisionTaskInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PollForDecisionTaskXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maximumPageSize?: string;
    /**
     * Pagination token
     */
    nextPageToken?: string;
}
export declare class PollForDecisionTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    decisionTask?: shared.DecisionTask;
    /**
     * LimitExceededFault
     */
    limitExceededFault?: any;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
}
