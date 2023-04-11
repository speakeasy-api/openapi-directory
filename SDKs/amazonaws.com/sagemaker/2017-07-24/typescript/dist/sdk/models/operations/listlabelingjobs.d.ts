import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLabelingJobsXAmzTargetEnum {
    SageMakerListLabelingJobs = "SageMaker.ListLabelingJobs"
}
export declare class ListLabelingJobsRequest extends SpeakeasyBase {
    listLabelingJobsRequest: shared.ListLabelingJobsRequest;
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
    xAmzTarget: ListLabelingJobsXAmzTargetEnum;
}
export declare class ListLabelingJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listLabelingJobsResponse?: shared.ListLabelingJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
