import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAnomalyGroupTimeSeriesRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the anomaly detector.
     */
    anomalyDetectorArn: string;
    /**
     * The ID of the anomaly group.
     */
    anomalyGroupId: string;
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * The name of the measure field.
     */
    metricName: string;
    /**
     * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
     */
    nextToken?: string;
}
export declare class ListAnomalyGroupTimeSeriesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListAnomalyGroupTimeSeriesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAnomalyGroupTimeSeriesResponse extends SpeakeasyBase {
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
    listAnomalyGroupTimeSeriesResponse?: shared.ListAnomalyGroupTimeSeriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
