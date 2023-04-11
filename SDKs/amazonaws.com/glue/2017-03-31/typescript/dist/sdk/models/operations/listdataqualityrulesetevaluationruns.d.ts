import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDataQualityRulesetEvaluationRunsXAmzTargetEnum {
    AWSGlueListDataQualityRulesetEvaluationRuns = "AWSGlue.ListDataQualityRulesetEvaluationRuns"
}
export declare class ListDataQualityRulesetEvaluationRunsRequest extends SpeakeasyBase {
    listDataQualityRulesetEvaluationRunsRequest: shared.ListDataQualityRulesetEvaluationRunsRequest;
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
    xAmzTarget: ListDataQualityRulesetEvaluationRunsXAmzTargetEnum;
}
export declare class ListDataQualityRulesetEvaluationRunsResponse extends SpeakeasyBase {
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
    listDataQualityRulesetEvaluationRunsResponse?: shared.ListDataQualityRulesetEvaluationRunsResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
