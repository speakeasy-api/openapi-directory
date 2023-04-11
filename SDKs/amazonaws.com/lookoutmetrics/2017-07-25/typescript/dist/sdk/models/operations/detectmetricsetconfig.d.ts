import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An auto detection metric source.
 */
export declare class DetectMetricSetConfigRequestBodyAutoDetectionMetricSource extends SpeakeasyBase {
    s3SourceConfig?: shared.AutoDetectionS3SourceConfig;
}
export declare class DetectMetricSetConfigRequestBody extends SpeakeasyBase {
    /**
     * An anomaly detector ARN.
     */
    anomalyDetectorArn: string;
    /**
     * An auto detection metric source.
     */
    autoDetectionMetricSource: DetectMetricSetConfigRequestBodyAutoDetectionMetricSource;
}
export declare class DetectMetricSetConfigRequest extends SpeakeasyBase {
    requestBody: DetectMetricSetConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DetectMetricSetConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    detectMetricSetConfigResponse?: shared.DetectMetricSetConfigResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
