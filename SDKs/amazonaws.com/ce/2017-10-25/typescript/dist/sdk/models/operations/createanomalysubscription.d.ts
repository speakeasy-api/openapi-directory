import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnomalySubscriptionXAmzTargetEnum {
    AWSInsightsIndexServiceCreateAnomalySubscription = "AWSInsightsIndexService.CreateAnomalySubscription"
}
export declare class CreateAnomalySubscriptionRequest extends SpeakeasyBase {
    createAnomalySubscriptionRequest: shared.CreateAnomalySubscriptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAnomalySubscriptionXAmzTargetEnum;
}
export declare class CreateAnomalySubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAnomalySubscriptionResponse?: shared.CreateAnomalySubscriptionResponse;
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
}
