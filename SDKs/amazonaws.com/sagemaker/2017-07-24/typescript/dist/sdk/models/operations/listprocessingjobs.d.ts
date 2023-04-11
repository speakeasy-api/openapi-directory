import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListProcessingJobsXAmzTargetEnum {
    SageMakerListProcessingJobs = "SageMaker.ListProcessingJobs"
}
export declare class ListProcessingJobsRequest extends SpeakeasyBase {
    listProcessingJobsRequest: shared.ListProcessingJobsRequest;
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
    xAmzTarget: ListProcessingJobsXAmzTargetEnum;
}
export declare class ListProcessingJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listProcessingJobsResponse?: shared.ListProcessingJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
