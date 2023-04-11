import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDataIngestionJobsXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceListDataIngestionJobs = "AWSLookoutEquipmentFrontendService.ListDataIngestionJobs"
}
export declare class ListDataIngestionJobsRequest extends SpeakeasyBase {
    listDataIngestionJobsRequest: shared.ListDataIngestionJobsRequest;
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
    xAmzTarget: ListDataIngestionJobsXAmzTargetEnum;
}
export declare class ListDataIngestionJobsResponse extends SpeakeasyBase {
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
    listDataIngestionJobsResponse?: shared.ListDataIngestionJobsResponse;
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
