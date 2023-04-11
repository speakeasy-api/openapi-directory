import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEntitiesDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListEntitiesDetectionJobs = "Comprehend_20171127.ListEntitiesDetectionJobs"
}
export declare class ListEntitiesDetectionJobsRequest extends SpeakeasyBase {
    listEntitiesDetectionJobsRequest: shared.ListEntitiesDetectionJobsRequest;
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
    xAmzTarget: ListEntitiesDetectionJobsXAmzTargetEnum;
}
export declare class ListEntitiesDetectionJobsResponse extends SpeakeasyBase {
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
    listEntitiesDetectionJobsResponse?: shared.ListEntitiesDetectionJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
