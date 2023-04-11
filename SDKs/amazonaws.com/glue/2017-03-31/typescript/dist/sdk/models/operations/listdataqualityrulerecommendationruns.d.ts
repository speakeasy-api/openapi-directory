import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDataQualityRuleRecommendationRunsXAmzTargetEnum {
    AWSGlueListDataQualityRuleRecommendationRuns = "AWSGlue.ListDataQualityRuleRecommendationRuns"
}
export declare class ListDataQualityRuleRecommendationRunsRequest extends SpeakeasyBase {
    listDataQualityRuleRecommendationRunsRequest: shared.ListDataQualityRuleRecommendationRunsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDataQualityRuleRecommendationRunsXAmzTargetEnum;
}
export declare class ListDataQualityRuleRecommendationRunsResponse extends SpeakeasyBase {
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
     * Success
     */
    listDataQualityRuleRecommendationRunsResponse?: shared.ListDataQualityRuleRecommendationRunsResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
