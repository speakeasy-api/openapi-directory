import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The response structure for an OutputConfig returned by an ExportEarthObservationJob.
 */
export declare class ExportEarthObservationJobRequestBodyOutputConfig extends SpeakeasyBase {
    s3Data?: shared.ExportS3DataInput;
}
export declare class ExportEarthObservationJobRequestBody extends SpeakeasyBase {
    /**
     * The input Amazon Resource Name (ARN) of the Earth Observation job being exported.
     */
    arn: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    executionRoleArn: string;
    /**
     * The source images provided to the Earth Observation job being exported.
     */
    exportSourceImages?: boolean;
    /**
     * The response structure for an OutputConfig returned by an ExportEarthObservationJob.
     */
    outputConfig: ExportEarthObservationJobRequestBodyOutputConfig;
}
export declare class ExportEarthObservationJobRequest extends SpeakeasyBase {
    requestBody: ExportEarthObservationJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ExportEarthObservationJobResponse extends SpeakeasyBase {
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
    exportEarthObservationJobOutput?: shared.ExportEarthObservationJobOutput;
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
