import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRightsizingRecommendationXAmzTargetEnum {
    AWSInsightsIndexServiceGetRightsizingRecommendation = "AWSInsightsIndexService.GetRightsizingRecommendation"
}
export declare class GetRightsizingRecommendationRequest extends SpeakeasyBase {
    getRightsizingRecommendationRequest: shared.GetRightsizingRecommendationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRightsizingRecommendationXAmzTargetEnum;
}
export declare class GetRightsizingRecommendationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRightsizingRecommendationResponse?: shared.GetRightsizingRecommendationResponse;
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
}
