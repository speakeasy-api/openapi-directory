import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListInferenceRecommendationsJobStepsXAmzTargetEnum {
    SageMakerListInferenceRecommendationsJobSteps = "SageMaker.ListInferenceRecommendationsJobSteps"
}
export declare class ListInferenceRecommendationsJobStepsRequest extends SpeakeasyBase {
    listInferenceRecommendationsJobStepsRequest: shared.ListInferenceRecommendationsJobStepsRequest;
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
    xAmzTarget: ListInferenceRecommendationsJobStepsXAmzTargetEnum;
}
export declare class ListInferenceRecommendationsJobStepsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listInferenceRecommendationsJobStepsResponse?: shared.ListInferenceRecommendationsJobStepsResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
