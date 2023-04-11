import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListEdgePackagingJobsXAmzTargetEnum {
    SageMakerListEdgePackagingJobs = "SageMaker.ListEdgePackagingJobs"
}
export declare class ListEdgePackagingJobsRequest extends SpeakeasyBase {
    listEdgePackagingJobsRequest: shared.ListEdgePackagingJobsRequest;
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
    xAmzTarget: ListEdgePackagingJobsXAmzTargetEnum;
}
export declare class ListEdgePackagingJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listEdgePackagingJobsResponse?: shared.ListEdgePackagingJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
