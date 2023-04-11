import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAggregateConformancePackComplianceSummaryXAmzTargetEnum {
    StarlingDoveServiceGetAggregateConformancePackComplianceSummary = "StarlingDoveService.GetAggregateConformancePackComplianceSummary"
}
export declare class GetAggregateConformancePackComplianceSummaryRequest extends SpeakeasyBase {
    getAggregateConformancePackComplianceSummaryRequest: shared.GetAggregateConformancePackComplianceSummaryRequest;
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
    xAmzTarget: GetAggregateConformancePackComplianceSummaryXAmzTargetEnum;
}
export declare class GetAggregateConformancePackComplianceSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAggregateConformancePackComplianceSummaryResponse?: shared.GetAggregateConformancePackComplianceSummaryResponse;
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
