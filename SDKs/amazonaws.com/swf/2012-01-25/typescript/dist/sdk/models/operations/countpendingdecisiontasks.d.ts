import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CountPendingDecisionTasksXAmzTargetEnum {
    SimpleWorkflowServiceCountPendingDecisionTasks = "SimpleWorkflowService.CountPendingDecisionTasks"
}
export declare class CountPendingDecisionTasksRequest extends SpeakeasyBase {
    countPendingDecisionTasksInput: shared.CountPendingDecisionTasksInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CountPendingDecisionTasksXAmzTargetEnum;
}
export declare class CountPendingDecisionTasksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    /**
     * Success
     */
    pendingTaskCount?: shared.PendingTaskCount;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
}
