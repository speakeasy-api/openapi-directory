import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAnomalySubscriptionXAmzTargetEnum {
    AWSInsightsIndexServiceUpdateAnomalySubscription = "AWSInsightsIndexService.UpdateAnomalySubscription"
}
export declare class UpdateAnomalySubscriptionRequest extends SpeakeasyBase {
    updateAnomalySubscriptionRequest: shared.UpdateAnomalySubscriptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAnomalySubscriptionXAmzTargetEnum;
}
export declare class UpdateAnomalySubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownMonitorException
     */
    unknownMonitorException?: any;
    /**
     * UnknownSubscriptionException
     */
    unknownSubscriptionException?: any;
    /**
     * Success
     */
    updateAnomalySubscriptionResponse?: shared.UpdateAnomalySubscriptionResponse;
}
