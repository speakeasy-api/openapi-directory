import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum {
    StarlingDoveServiceGetAggregateConfigRuleComplianceSummary = "StarlingDoveService.GetAggregateConfigRuleComplianceSummary"
}
export declare class GetAggregateConfigRuleComplianceSummaryRequest extends SpeakeasyBase {
    getAggregateConfigRuleComplianceSummaryRequest: shared.GetAggregateConfigRuleComplianceSummaryRequest;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: GetAggregateConfigRuleComplianceSummaryXAmzTargetEnum;
}
export declare class GetAggregateConfigRuleComplianceSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAggregateConfigRuleComplianceSummaryResponse?: shared.GetAggregateConfigRuleComplianceSummaryResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * NoSuchConfigurationAggregatorException
     */
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
