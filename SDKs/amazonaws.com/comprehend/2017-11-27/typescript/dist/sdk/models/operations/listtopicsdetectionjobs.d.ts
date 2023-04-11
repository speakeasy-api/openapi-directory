import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTopicsDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListTopicsDetectionJobs = "Comprehend_20171127.ListTopicsDetectionJobs"
}
export declare class ListTopicsDetectionJobsRequest extends SpeakeasyBase {
    listTopicsDetectionJobsRequest: shared.ListTopicsDetectionJobsRequest;
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
    xAmzTarget: ListTopicsDetectionJobsXAmzTargetEnum;
}
export declare class ListTopicsDetectionJobsResponse extends SpeakeasyBase {
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
    listTopicsDetectionJobsResponse?: shared.ListTopicsDetectionJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
