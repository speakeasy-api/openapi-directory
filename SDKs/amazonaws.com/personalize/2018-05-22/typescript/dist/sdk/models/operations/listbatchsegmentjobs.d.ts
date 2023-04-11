import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBatchSegmentJobsXAmzTargetEnum {
    AmazonPersonalizeListBatchSegmentJobs = "AmazonPersonalize.ListBatchSegmentJobs"
}
export declare class ListBatchSegmentJobsRequest extends SpeakeasyBase {
    listBatchSegmentJobsRequest: shared.ListBatchSegmentJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBatchSegmentJobsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListBatchSegmentJobsResponse extends SpeakeasyBase {
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
    listBatchSegmentJobsResponse?: shared.ListBatchSegmentJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
