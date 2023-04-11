import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartReferenceImportJobRequestBody extends SpeakeasyBase {
    /**
     * To ensure that jobs don't run multiple times, specify a unique token for each job.
     */
    clientToken?: string;
    /**
     * A service role for the job.
     */
    roleArn: string;
    /**
     * The job's source files.
     */
    sources: shared.StartReferenceImportJobSourceItem[];
}
export declare class StartReferenceImportJobRequest extends SpeakeasyBase {
    requestBody: StartReferenceImportJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The job's reference store ID.
     */
    referenceStoreId: string;
}
export declare class StartReferenceImportJobResponse extends SpeakeasyBase {
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
    startReferenceImportJobResponse?: shared.StartReferenceImportJobResponse;
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
