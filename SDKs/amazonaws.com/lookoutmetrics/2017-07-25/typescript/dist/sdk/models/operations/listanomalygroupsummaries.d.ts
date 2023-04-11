import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAnomalyGroupSummariesRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the anomaly detector.
     */
    anomalyDetectorArn: string;
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
     */
    nextToken?: string;
    /**
     * The minimum severity score for inclusion in the output.
     */
    sensitivityThreshold: number;
}
export declare class ListAnomalyGroupSummariesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListAnomalyGroupSummariesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAnomalyGroupSummariesResponse extends SpeakeasyBase {
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
    listAnomalyGroupSummariesResponse?: shared.ListAnomalyGroupSummariesResponse;
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
