import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object containing information about the output file.
 */
export declare class ExportVectorEnrichmentJobRequestBodyOutputConfig extends SpeakeasyBase {
    s3Data?: shared.VectorEnrichmentJobS3Data;
}
export declare class ExportVectorEnrichmentJobRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the Vector Enrichment job.
     */
    arn: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM rolewith permission to upload to the location in OutputConfig.
     */
    executionRoleArn: string;
    /**
     * An object containing information about the output file.
     */
    outputConfig: ExportVectorEnrichmentJobRequestBodyOutputConfig;
}
export declare class ExportVectorEnrichmentJobRequest extends SpeakeasyBase {
    requestBody: ExportVectorEnrichmentJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ExportVectorEnrichmentJobResponse extends SpeakeasyBase {
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
    exportVectorEnrichmentJobOutput?: shared.ExportVectorEnrichmentJobOutput;
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
