import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopInferenceRecommendationsJobXAmzTargetEnum {
    SageMakerStopInferenceRecommendationsJob = "SageMaker.StopInferenceRecommendationsJob"
}
export declare class StopInferenceRecommendationsJobRequest extends SpeakeasyBase {
    stopInferenceRecommendationsJobRequest: shared.StopInferenceRecommendationsJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopInferenceRecommendationsJobXAmzTargetEnum;
}
export declare class StopInferenceRecommendationsJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
