import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An engine for the workflow.
 */
export declare enum CreateWorkflowRequestBodyEngineEnum {
    Wdl = "WDL",
    Nextflow = "NEXTFLOW"
}
export declare class CreateWorkflowRequestBody extends SpeakeasyBase {
    /**
     * The URI of a definition for the workflow.
     */
    definitionUri?: string;
    /**
     * A ZIP archive for the workflow.
     */
    definitionZip?: string;
    /**
     * A description for the workflow.
     */
    description?: string;
    /**
     * An engine for the workflow.
     */
    engine?: CreateWorkflowRequestBodyEngineEnum;
    /**
     * The path of the main definition file for the workflow.
     */
    main?: string;
    /**
     * A name for the workflow.
     */
    name?: string;
    /**
     * A parameter template for the workflow.
     */
    parameterTemplate?: Record<string, shared.WorkflowParameter>;
    /**
     * To ensure that requests don't run multiple times, specify a unique ID for each request.
     */
    requestId: string;
    /**
     * A storage capacity for the workflow in gigabytes.
     */
    storageCapacity?: number;
    /**
     * Tags for the workflow.
     */
    tags?: Record<string, string>;
}
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    requestBody: CreateWorkflowRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorkflowResponse extends SpeakeasyBase {
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
     * Success
     */
    createWorkflowResponse?: shared.CreateWorkflowResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
