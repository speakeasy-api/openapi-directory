import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An anomalous metric in an anomaly group.
 */
export declare class GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback extends SpeakeasyBase {
    anomalyGroupId?: string;
    timeSeriesId?: string;
}
export declare class GetFeedbackRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the anomaly detector.
     */
    anomalyDetectorArn: string;
    /**
     * An anomalous metric in an anomaly group.
     */
    anomalyGroupTimeSeriesFeedback: GetFeedbackRequestBodyAnomalyGroupTimeSeriesFeedback;
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
     */
    nextToken?: string;
}
export declare class GetFeedbackRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetFeedbackRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFeedbackResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getFeedbackResponse?: shared.GetFeedbackResponse;
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
