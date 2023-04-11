import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The input structure for the InputConfig in a VectorEnrichmentJob.
 */
export declare class StartVectorEnrichmentJobRequestBodyInputConfig extends SpeakeasyBase {
    dataSourceConfig?: shared.VectorEnrichmentJobDataSourceConfigInput;
    documentType?: shared.VectorEnrichmentJobDocumentTypeEnum;
}
/**
 * It contains configs such as ReverseGeocodingConfig and MapMatchingConfig.
 */
export declare class StartVectorEnrichmentJobRequestBodyJobConfig extends SpeakeasyBase {
    mapMatchingConfig?: shared.MapMatchingConfig;
    reverseGeocodingConfig?: shared.ReverseGeocodingConfig;
}
export declare class StartVectorEnrichmentJobRequestBody extends SpeakeasyBase {
    /**
     * A unique token that guarantees that the call to this API is idempotent.
     */
    clientToken?: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that you specified for the job.
     */
    executionRoleArn: string;
    /**
     * The input structure for the InputConfig in a VectorEnrichmentJob.
     */
    inputConfig: StartVectorEnrichmentJobRequestBodyInputConfig;
    /**
     * It contains configs such as ReverseGeocodingConfig and MapMatchingConfig.
     */
    jobConfig: StartVectorEnrichmentJobRequestBodyJobConfig;
    /**
     * The Amazon Key Management Service (KMS) key ID for server-side encryption.
     */
    kmsKeyId?: string;
    /**
     * The name of the Vector Enrichment job.
     */
    name: string;
    /**
     * Each tag consists of a key and a value.
     */
    tags?: Record<string, string>;
}
export declare class StartVectorEnrichmentJobRequest extends SpeakeasyBase {
    requestBody: StartVectorEnrichmentJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartVectorEnrichmentJobResponse extends SpeakeasyBase {
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
    startVectorEnrichmentJobOutput?: shared.StartVectorEnrichmentJobOutput;
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
