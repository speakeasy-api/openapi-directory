import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains information about a detector's configuration.
 */
export declare class CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig extends SpeakeasyBase {
    anomalyDetectorFrequency?: shared.FrequencyEnum;
}
export declare class CreateAnomalyDetectorRequestBody extends SpeakeasyBase {
    /**
     * Contains information about a detector's configuration.
     */
    anomalyDetectorConfig: CreateAnomalyDetectorRequestBodyAnomalyDetectorConfig;
    /**
     * A description of the detector.
     */
    anomalyDetectorDescription?: string;
    /**
     * The name of the detector.
     */
    anomalyDetectorName: string;
    /**
     * The ARN of the KMS key to use to encrypt your data.
     */
    kmsKeyArn?: string;
    /**
     * A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the anomaly detector.
     */
    tags?: Record<string, string>;
}
export declare class CreateAnomalyDetectorRequest extends SpeakeasyBase {
    requestBody: CreateAnomalyDetectorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAnomalyDetectorResponse extends SpeakeasyBase {
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
    createAnomalyDetectorResponse?: shared.CreateAnomalyDetectorResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
