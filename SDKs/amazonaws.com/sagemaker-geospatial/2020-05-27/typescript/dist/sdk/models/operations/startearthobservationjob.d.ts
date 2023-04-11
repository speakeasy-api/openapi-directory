import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Input configuration information.
 */
export declare class StartEarthObservationJobRequestBodyInputConfig extends SpeakeasyBase {
    dataSourceConfig?: shared.EojDataSourceConfigInput;
    previousEarthObservationJobArn?: string;
    rasterDataCollectionQuery?: shared.RasterDataCollectionQueryInput;
}
/**
 * The input structure for the JobConfig in an EarthObservationJob.
 */
export declare class StartEarthObservationJobRequestBodyJobConfig extends SpeakeasyBase {
    bandMathConfig?: shared.BandMathConfigInput;
    cloudMaskingConfig?: Record<string, any>;
    cloudRemovalConfig?: shared.CloudRemovalConfigInput;
    geoMosaicConfig?: shared.GeoMosaicConfigInput;
    landCoverSegmentationConfig?: Record<string, any>;
    resamplingConfig?: shared.ResamplingConfigInput;
    stackConfig?: shared.StackConfigInput;
    temporalStatisticsConfig?: shared.TemporalStatisticsConfigInput;
    zonalStatisticsConfig?: shared.ZonalStatisticsConfigInput;
}
export declare class StartEarthObservationJobRequestBody extends SpeakeasyBase {
    /**
     * A unique token that guarantees that the call to this API is idempotent.
     */
    clientToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    executionRoleArn?: string;
    /**
     * Input configuration information.
     */
    inputConfig: StartEarthObservationJobRequestBodyInputConfig;
    /**
     * The input structure for the JobConfig in an EarthObservationJob.
     */
    jobConfig: StartEarthObservationJobRequestBodyJobConfig;
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    kmsKeyId?: string;
    /**
     * The name of the Earth Observation job.
     */
    name: string;
    /**
     * Each tag consists of a key and a value.
     */
    tags?: Record<string, string>;
}
export declare class StartEarthObservationJobRequest extends SpeakeasyBase {
    requestBody: StartEarthObservationJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartEarthObservationJobResponse extends SpeakeasyBase {
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startEarthObservationJobOutput?: shared.StartEarthObservationJobOutput;
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
