import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartDataQualityRuleRecommendationRunXAmzTargetEnum {
    AWSGlueStartDataQualityRuleRecommendationRun = "AWSGlue.StartDataQualityRuleRecommendationRun"
}
export declare class StartDataQualityRuleRecommendationRunRequest extends SpeakeasyBase {
    startDataQualityRuleRecommendationRunRequest: shared.StartDataQualityRuleRecommendationRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDataQualityRuleRecommendationRunXAmzTargetEnum;
}
export declare class StartDataQualityRuleRecommendationRunResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
    /**
     * Success
     */
    startDataQualityRuleRecommendationRunResponse?: shared.StartDataQualityRuleRecommendationRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
