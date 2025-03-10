import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDataSourceSyncJobsXAmzTargetEnum {
    AWSKendraFrontendServiceListDataSourceSyncJobs = "AWSKendraFrontendService.ListDataSourceSyncJobs"
}
export declare class ListDataSourceSyncJobsRequest extends SpeakeasyBase {
    listDataSourceSyncJobsRequest: shared.ListDataSourceSyncJobsRequest;
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
    xAmzTarget: ListDataSourceSyncJobsXAmzTargetEnum;
}
export declare class ListDataSourceSyncJobsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listDataSourceSyncJobsResponse?: shared.ListDataSourceSyncJobsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
