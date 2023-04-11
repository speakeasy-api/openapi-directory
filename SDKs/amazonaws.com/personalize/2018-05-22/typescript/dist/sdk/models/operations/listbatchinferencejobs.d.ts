import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBatchInferenceJobsXAmzTargetEnum {
    AmazonPersonalizeListBatchInferenceJobs = "AmazonPersonalize.ListBatchInferenceJobs"
}
export declare class ListBatchInferenceJobsRequest extends SpeakeasyBase {
    listBatchInferenceJobsRequest: shared.ListBatchInferenceJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBatchInferenceJobsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListBatchInferenceJobsResponse extends SpeakeasyBase {
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
    listBatchInferenceJobsResponse?: shared.ListBatchInferenceJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
