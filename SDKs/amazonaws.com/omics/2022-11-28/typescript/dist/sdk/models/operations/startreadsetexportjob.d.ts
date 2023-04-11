import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartReadSetExportJobRequestBody extends SpeakeasyBase {
    /**
     * To ensure that jobs don't run multiple times, specify a unique token for each job.
     */
    clientToken?: string;
    /**
     * A location for exported files in Amazon S3.
     */
    destination: string;
    /**
     * A service role for the job.
     */
    roleArn: string;
    /**
     * The job's source files.
     */
    sources: shared.ExportReadSet[];
}
export declare class StartReadSetExportJobRequest extends SpeakeasyBase {
    requestBody: StartReadSetExportJobRequestBody;
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
export declare class StartReadSetExportJobResponse extends SpeakeasyBase {
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
    startReadSetExportJobResponse?: shared.StartReadSetExportJobResponse;
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
