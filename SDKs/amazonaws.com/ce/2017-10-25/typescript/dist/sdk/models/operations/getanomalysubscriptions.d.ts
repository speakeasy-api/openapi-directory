import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAnomalySubscriptionsXAmzTargetEnum {
    AWSInsightsIndexServiceGetAnomalySubscriptions = "AWSInsightsIndexService.GetAnomalySubscriptions"
}
export declare class GetAnomalySubscriptionsRequest extends SpeakeasyBase {
    getAnomalySubscriptionsRequest: shared.GetAnomalySubscriptionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAnomalySubscriptionsXAmzTargetEnum;
}
export declare class GetAnomalySubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAnomalySubscriptionsResponse?: shared.GetAnomalySubscriptionsResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
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
