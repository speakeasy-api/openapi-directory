import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSentimentDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListSentimentDetectionJobs = "Comprehend_20171127.ListSentimentDetectionJobs"
}
export declare class ListSentimentDetectionJobsRequest extends SpeakeasyBase {
    listSentimentDetectionJobsRequest: shared.ListSentimentDetectionJobsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSentimentDetectionJobsXAmzTargetEnum;
}
export declare class ListSentimentDetectionJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidFilterException
     */
    invalidFilterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listSentimentDetectionJobsResponse?: shared.ListSentimentDetectionJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
