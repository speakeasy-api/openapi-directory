import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDatasetExportJobsXAmzTargetEnum {
    AmazonPersonalizeListDatasetExportJobs = "AmazonPersonalize.ListDatasetExportJobs"
}
export declare class ListDatasetExportJobsRequest extends SpeakeasyBase {
    listDatasetExportJobsRequest: shared.ListDatasetExportJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDatasetExportJobsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListDatasetExportJobsResponse extends SpeakeasyBase {
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
    listDatasetExportJobsResponse?: shared.ListDatasetExportJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
