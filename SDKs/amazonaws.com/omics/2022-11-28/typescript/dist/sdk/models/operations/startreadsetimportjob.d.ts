import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartReadSetImportJobRequestBody extends SpeakeasyBase {
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
    sources: shared.StartReadSetImportJobSourceItem[];
}
export declare class StartReadSetImportJobRequest extends SpeakeasyBase {
    requestBody: StartReadSetImportJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The read set's sequence store ID.
     */
    sequenceStoreId: string;
}
export declare class StartReadSetImportJobResponse extends SpeakeasyBase {
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
    startReadSetImportJobResponse?: shared.StartReadSetImportJobResponse;
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
