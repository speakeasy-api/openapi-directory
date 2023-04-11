import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeAnomalyDetectionExecutionsRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the anomaly detector.
     */
    anomalyDetectorArn: string;
    /**
     * The number of items to return in the response.
     */
    maxResults?: number;
    /**
     * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
     */
    nextToken?: string;
    /**
     * The timestamp of the anomaly detection job.
     */
    timestamp?: string;
}
export declare class DescribeAnomalyDetectionExecutionsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: DescribeAnomalyDetectionExecutionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAnomalyDetectionExecutionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAnomalyDetectionExecutionsResponse?: shared.DescribeAnomalyDetectionExecutionsResponse;
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
