import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPiiEntitiesDetectionJobsXAmzTargetEnum {
    Comprehend20171127ListPiiEntitiesDetectionJobs = "Comprehend_20171127.ListPiiEntitiesDetectionJobs"
}
export declare class ListPiiEntitiesDetectionJobsRequest extends SpeakeasyBase {
    listPiiEntitiesDetectionJobsRequest: shared.ListPiiEntitiesDetectionJobsRequest;
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
    xAmzTarget: ListPiiEntitiesDetectionJobsXAmzTargetEnum;
}
export declare class ListPiiEntitiesDetectionJobsResponse extends SpeakeasyBase {
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
    listPiiEntitiesDetectionJobsResponse?: shared.ListPiiEntitiesDetectionJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
