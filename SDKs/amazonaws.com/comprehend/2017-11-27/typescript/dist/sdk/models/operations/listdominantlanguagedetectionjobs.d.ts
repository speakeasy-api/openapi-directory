import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDominantLanguageDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListDominantLanguageDetectionJobs = "Comprehend_20171127.ListDominantLanguageDetectionJobs"
}
export declare class ListDominantLanguageDetectionJobsRequest extends SpeakeasyBase {
    listDominantLanguageDetectionJobsRequest: shared.ListDominantLanguageDetectionJobsRequest;
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
    xAmzTarget: ListDominantLanguageDetectionJobsXAmzTargetEnum;
}
export declare class ListDominantLanguageDetectionJobsResponse extends SpeakeasyBase {
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
    listDominantLanguageDetectionJobsResponse?: shared.ListDominantLanguageDetectionJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
