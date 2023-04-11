import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
 */
export declare class StartAuditMitigationActionsTaskRequestBodyTarget extends SpeakeasyBase {
    auditCheckToReasonCodeFilter?: Record<string, string[]>;
    auditTaskId?: string;
    findingIds?: string[];
}
export declare class StartAuditMitigationActionsTaskRequestBody extends SpeakeasyBase {
    /**
     * For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your Amazon Web Services accounts.
     */
    auditCheckToActionsMapping: Record<string, string[]>;
    /**
     * Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.
     */
    clientRequestToken: string;
    /**
     * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
     */
    target: StartAuditMitigationActionsTaskRequestBodyTarget;
}
export declare class StartAuditMitigationActionsTaskRequest extends SpeakeasyBase {
    requestBody: StartAuditMitigationActionsTaskRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.
     */
    taskId: string;
}
export declare class StartAuditMitigationActionsTaskResponse extends SpeakeasyBase {
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
    startAuditMitigationActionsTaskResponse?: shared.StartAuditMitigationActionsTaskResponse;
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
