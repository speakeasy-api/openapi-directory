import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CountPendingActivityTasksXAmzTargetEnum {
    SimpleWorkflowServiceCountPendingActivityTasks = "SimpleWorkflowService.CountPendingActivityTasks"
}
export declare class CountPendingActivityTasksRequest extends SpeakeasyBase {
    countPendingActivityTasksInput: shared.CountPendingActivityTasksInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CountPendingActivityTasksXAmzTargetEnum;
}
export declare class CountPendingActivityTasksResponse extends SpeakeasyBase {
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
