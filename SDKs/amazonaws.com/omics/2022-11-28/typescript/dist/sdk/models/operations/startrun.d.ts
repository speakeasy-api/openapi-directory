import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A log level for the run.
 */
export declare enum StartRunRequestBodyLogLevelEnum {
    Off = "OFF",
    Fatal = "FATAL",
    Error = "ERROR",
    All = "ALL"
}
/**
 * The run's workflows type.
 */
export declare enum StartRunRequestBodyWorkflowTypeEnum {
    Private = "PRIVATE",
    Service = "SERVICE"
}
export declare class StartRunRequestBody extends SpeakeasyBase {
    /**
     * A log level for the run.
     */
    logLevel?: StartRunRequestBodyLogLevelEnum;
    /**
     * A name for the run.
     */
    name?: string;
    /**
     * An output URI for the run.
     */
    outputUri?: string;
    /**
     * Parameters for the run.
     */
    parameters?: Record<string, any>;
    /**
     * A priority for the run.
     */
    priority?: number;
    /**
     * To ensure that requests don't run multiple times, specify a unique ID for each request.
     */
    requestId: string;
    /**
     * A service role for the run.
     */
    roleArn: string;
    /**
     * The run's group ID.
     */
    runGroupId?: string;
    /**
     * The run's ID.
     */
    runId?: string;
    /**
     * A storage capacity for the run in gigabytes.
     */
    storageCapacity?: number;
    /**
     * Tags for the run.
     */
    tags?: Record<string, string>;
    /**
     * The run's workflow ID.
     */
    workflowId?: string;
    /**
     * The run's workflows type.
     */
    workflowType?: StartRunRequestBodyWorkflowTypeEnum;
}
export declare class StartRunRequest extends SpeakeasyBase {
    requestBody: StartRunRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartRunResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startRunResponse?: shared.StartRunResponse;
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
