import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateInferenceRecommendationsJobXAmzTargetEnum {
    SageMakerCreateInferenceRecommendationsJob = "SageMaker.CreateInferenceRecommendationsJob"
}
export declare class CreateInferenceRecommendationsJobRequest extends SpeakeasyBase {
    createInferenceRecommendationsJobRequest: shared.CreateInferenceRecommendationsJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInferenceRecommendationsJobXAmzTargetEnum;
}
export declare class CreateInferenceRecommendationsJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createInferenceRecommendationsJobResponse?: shared.CreateInferenceRecommendationsJobResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
