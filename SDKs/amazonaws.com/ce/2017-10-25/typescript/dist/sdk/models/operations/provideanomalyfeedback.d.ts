import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ProvideAnomalyFeedbackXAmzTargetEnum {
    AWSInsightsIndexServiceProvideAnomalyFeedback = "AWSInsightsIndexService.ProvideAnomalyFeedback"
}
export declare class ProvideAnomalyFeedbackRequest extends SpeakeasyBase {
    provideAnomalyFeedbackRequest: shared.ProvideAnomalyFeedbackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ProvideAnomalyFeedbackXAmzTargetEnum;
}
export declare class ProvideAnomalyFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    provideAnomalyFeedbackResponse?: shared.ProvideAnomalyFeedbackResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
