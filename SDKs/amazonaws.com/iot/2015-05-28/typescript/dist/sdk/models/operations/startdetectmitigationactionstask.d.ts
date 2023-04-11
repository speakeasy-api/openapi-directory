import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The target of a mitigation action task.
 */
export declare class StartDetectMitigationActionsTaskRequestBodyTarget extends SpeakeasyBase {
    behaviorName?: string;
    securityProfileName?: string;
    violationIds?: string[];
}
/**
 *  Specifies the time period of which violation events occurred between.
 */
export declare class StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange extends SpeakeasyBase {
    endTime?: Date;
    startTime?: Date;
}
export declare class StartDetectMitigationActionsTaskRequestBody extends SpeakeasyBase {
    /**
     *  The actions to be performed when a device has unexpected behavior.
     */
    actions: string[];
    /**
     *  Each mitigation action task must have a unique client request token. If you try to create a new task with the same token as a task that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
     */
    clientRequestToken: string;
    /**
     *  Specifies to list only active violations.
     */
    includeOnlyActiveViolations?: boolean;
    /**
     *  Specifies to include suppressed alerts.
     */
    includeSuppressedAlerts?: boolean;
    /**
     *  The target of a mitigation action task.
     */
    target: StartDetectMitigationActionsTaskRequestBodyTarget;
    /**
     *  Specifies the time period of which violation events occurred between.
     */
    violationEventOccurrenceRange?: StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange;
}
export declare class StartDetectMitigationActionsTaskRequest extends SpeakeasyBase {
    requestBody: StartDetectMitigationActionsTaskRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique identifier of the task.
     */
    taskId: string;
}
export declare class StartDetectMitigationActionsTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    startDetectMitigationActionsTaskResponse?: shared.StartDetectMitigationActionsTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TaskAlreadyExistsException
     */
    taskAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
