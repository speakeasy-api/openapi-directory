import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RecordActivityTaskHeartbeatXAmzTargetEnum {
    SimpleWorkflowServiceRecordActivityTaskHeartbeat = "SimpleWorkflowService.RecordActivityTaskHeartbeat"
}
export declare class RecordActivityTaskHeartbeatRequest extends SpeakeasyBase {
    recordActivityTaskHeartbeatInput: shared.RecordActivityTaskHeartbeatInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RecordActivityTaskHeartbeatXAmzTargetEnum;
}
export declare class RecordActivityTaskHeartbeatResponse extends SpeakeasyBase {
    /**
     * Success
     */
    activityTaskStatus?: shared.ActivityTaskStatus;
    contentType: string;
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
