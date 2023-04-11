import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAnomalySubscriptionXAmzTargetEnum {
    AWSInsightsIndexServiceDeleteAnomalySubscription = "AWSInsightsIndexService.DeleteAnomalySubscription"
}
export declare class DeleteAnomalySubscriptionRequest extends SpeakeasyBase {
    deleteAnomalySubscriptionRequest: shared.DeleteAnomalySubscriptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAnomalySubscriptionXAmzTargetEnum;
}
export declare class DeleteAnomalySubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAnomalySubscriptionResponse?: Record<string, any>;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownSubscriptionException
     */
    unknownSubscriptionException?: any;
}
