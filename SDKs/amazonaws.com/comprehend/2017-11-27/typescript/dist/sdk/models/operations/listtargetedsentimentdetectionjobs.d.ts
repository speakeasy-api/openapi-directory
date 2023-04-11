import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTargetedSentimentDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListTargetedSentimentDetectionJobs = "Comprehend_20171127.ListTargetedSentimentDetectionJobs"
}
export declare class ListTargetedSentimentDetectionJobsRequest extends SpeakeasyBase {
    listTargetedSentimentDetectionJobsRequest: shared.ListTargetedSentimentDetectionJobsRequest;
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
    xAmzTarget: ListTargetedSentimentDetectionJobsXAmzTargetEnum;
}
export declare class ListTargetedSentimentDetectionJobsResponse extends SpeakeasyBase {
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
    listTargetedSentimentDetectionJobsResponse?: shared.ListTargetedSentimentDetectionJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
