import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Identifies a specific batch job.
 */
export declare class StartBatchJobRequestBodyBatchJobIdentifier extends SpeakeasyBase {
    fileBatchJobIdentifier?: shared.FileBatchJobIdentifier;
    scriptBatchJobIdentifier?: shared.ScriptBatchJobIdentifier;
}
export declare class StartBatchJobRequestBody extends SpeakeasyBase {
    /**
     * Identifies a specific batch job.
     */
    batchJobIdentifier: StartBatchJobRequestBodyBatchJobIdentifier;
    /**
     * Job parameters are optional. Can contain up to 500 entries.
     */
    jobParams?: Record<string, string>;
}
export declare class StartBatchJobRequest extends SpeakeasyBase {
    requestBody: StartBatchJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the application associated with this batch job.
     */
    applicationId: string;
}
export declare class StartBatchJobResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startBatchJobResponse?: shared.StartBatchJobResponse;
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
