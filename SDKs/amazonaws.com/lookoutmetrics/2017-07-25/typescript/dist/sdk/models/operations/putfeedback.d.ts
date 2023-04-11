import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Feedback for an anomalous metric.
 */
export declare class PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback extends SpeakeasyBase {
    anomalyGroupId?: string;
    isAnomaly?: boolean;
    timeSeriesId?: string;
}
export declare class PutFeedbackRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the anomaly detector.
     */
    anomalyDetectorArn: string;
    /**
     * Feedback for an anomalous metric.
     */
    anomalyGroupTimeSeriesFeedback: PutFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;
}
export declare class PutFeedbackRequest extends SpeakeasyBase {
    requestBody: PutFeedbackRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutFeedbackResponse extends SpeakeasyBase {
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
     * Success
     */
    putFeedbackResponse?: Record<string, any>;
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
