import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListKeyPhrasesDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListKeyPhrasesDetectionJobs = "Comprehend_20171127.ListKeyPhrasesDetectionJobs"
}
export declare class ListKeyPhrasesDetectionJobsRequest extends SpeakeasyBase {
    listKeyPhrasesDetectionJobsRequest: shared.ListKeyPhrasesDetectionJobsRequest;
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
    xAmzTarget: ListKeyPhrasesDetectionJobsXAmzTargetEnum;
}
export declare class ListKeyPhrasesDetectionJobsResponse extends SpeakeasyBase {
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
    listKeyPhrasesDetectionJobsResponse?: shared.ListKeyPhrasesDetectionJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
