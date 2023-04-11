import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelDataQualityRuleRecommendationRunXAmzTargetEnum {
    AWSGlueCancelDataQualityRuleRecommendationRun = "AWSGlue.CancelDataQualityRuleRecommendationRun"
}
export declare class CancelDataQualityRuleRecommendationRunRequest extends SpeakeasyBase {
    cancelDataQualityRuleRecommendationRunRequest: shared.CancelDataQualityRuleRecommendationRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelDataQualityRuleRecommendationRunXAmzTargetEnum;
}
export declare class CancelDataQualityRuleRecommendationRunResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelDataQualityRuleRecommendationRunResponse?: Record<string, any>;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
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
