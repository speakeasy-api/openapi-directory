import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDataQualityRuleRecommendationRunXAmzTargetEnum {
    AWSGlueGetDataQualityRuleRecommendationRun = "AWSGlue.GetDataQualityRuleRecommendationRun"
}
export declare class GetDataQualityRuleRecommendationRunRequest extends SpeakeasyBase {
    getDataQualityRuleRecommendationRunRequest: shared.GetDataQualityRuleRecommendationRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataQualityRuleRecommendationRunXAmzTargetEnum;
}
export declare class GetDataQualityRuleRecommendationRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getDataQualityRuleRecommendationRunResponse?: shared.GetDataQualityRuleRecommendationRunResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
