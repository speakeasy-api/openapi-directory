import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInferenceRecommendationsJobsXAmzTargetEnum {
    SageMakerListInferenceRecommendationsJobs = "SageMaker.ListInferenceRecommendationsJobs"
}
export declare class ListInferenceRecommendationsJobsRequest extends SpeakeasyBase {
    listInferenceRecommendationsJobsRequest: shared.ListInferenceRecommendationsJobsRequest;
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
    xAmzTarget: ListInferenceRecommendationsJobsXAmzTargetEnum;
}
export declare class ListInferenceRecommendationsJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listInferenceRecommendationsJobsResponse?: shared.ListInferenceRecommendationsJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
