import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartVariantImportJobRequestBody extends SpeakeasyBase {
    /**
     * The destination variant store for the job.
     */
    destinationName: string;
    /**
     * Items to import.
     */
    items: shared.VariantImportItemSource[];
    /**
     * A service role for the job.
     */
    roleArn: string;
    /**
     * The job's left normalization setting.
     */
    runLeftNormalization?: boolean;
}
export declare class StartVariantImportJobRequest extends SpeakeasyBase {
    requestBody: StartVariantImportJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartVariantImportJobResponse extends SpeakeasyBase {
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
    startVariantImportResponse?: shared.StartVariantImportResponse;
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
