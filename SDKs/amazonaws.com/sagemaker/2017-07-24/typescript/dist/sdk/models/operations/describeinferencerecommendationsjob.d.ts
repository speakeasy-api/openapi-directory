import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInferenceRecommendationsJobXAmzTargetEnum {
    SageMakerDescribeInferenceRecommendationsJob = "SageMaker.DescribeInferenceRecommendationsJob"
}
export declare class DescribeInferenceRecommendationsJobRequest extends SpeakeasyBase {
    describeInferenceRecommendationsJobRequest: shared.DescribeInferenceRecommendationsJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInferenceRecommendationsJobXAmzTargetEnum;
}
export declare class DescribeInferenceRecommendationsJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInferenceRecommendationsJobResponse?: shared.DescribeInferenceRecommendationsJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
