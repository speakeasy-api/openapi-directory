import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Formatting options for a file.
 */
export declare class StartAnnotationImportJobRequestBodyFormatOptions extends SpeakeasyBase {
    tsvOptions?: shared.TsvOptions;
    vcfOptions?: shared.VcfOptions;
}
export declare class StartAnnotationImportJobRequestBody extends SpeakeasyBase {
    /**
     * A destination annotation store for the job.
     */
    destinationName: string;
    /**
     * Formatting options for a file.
     */
    formatOptions?: StartAnnotationImportJobRequestBodyFormatOptions;
    /**
     * Items to import.
     */
    items: shared.AnnotationImportItemSource[];
    /**
     * A service role for the job.
     */
    roleArn: string;
    /**
     * The job's left normalization setting.
     */
    runLeftNormalization?: boolean;
}
export declare class StartAnnotationImportJobRequest extends SpeakeasyBase {
    requestBody: StartAnnotationImportJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartAnnotationImportJobResponse extends SpeakeasyBase {
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
    startAnnotationImportResponse?: shared.StartAnnotationImportResponse;
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
