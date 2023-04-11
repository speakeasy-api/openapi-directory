import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDatasetImportJobsXAmzTargetEnum {
    AmazonPersonalizeListDatasetImportJobs = "AmazonPersonalize.ListDatasetImportJobs"
}
export declare class ListDatasetImportJobsRequest extends SpeakeasyBase {
    listDatasetImportJobsRequest: shared.ListDatasetImportJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDatasetImportJobsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListDatasetImportJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listDatasetImportJobsResponse?: shared.ListDatasetImportJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
