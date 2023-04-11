import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of the migration workflow.
 */
export declare enum ListWorkflowsStatusEnum {
    Creating = "CREATING",
    NotStarted = "NOT_STARTED",
    CreationFailed = "CREATION_FAILED",
    Starting = "STARTING",
    InProgress = "IN_PROGRESS",
    WorkflowFailed = "WORKFLOW_FAILED",
    Paused = "PAUSED",
    Pausing = "PAUSING",
    PausingFailed = "PAUSING_FAILED",
    UserAttentionRequired = "USER_ATTENTION_REQUIRED",
    Deleting = "DELETING",
    DeletionFailed = "DELETION_FAILED",
    Deleted = "DELETED",
    Completed = "COMPLETED"
}
export declare class ListWorkflowsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the application configured in Application Discovery Service.
     */
    adsApplicationConfigurationName?: string;
    /**
     * The maximum number of results that can be returned.
     */
    maxResults?: number;
    /**
     * The name of the migration workflow.
     */
    name?: string;
    /**
     * The pagination token.
     */
    nextToken?: string;
    /**
     * The status of the migration workflow.
     */
    status?: ListWorkflowsStatusEnum;
    /**
     * The ID of the template.
     */
    templateId?: string;
}
export declare class ListWorkflowsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listMigrationWorkflowsResponse?: shared.ListMigrationWorkflowsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
