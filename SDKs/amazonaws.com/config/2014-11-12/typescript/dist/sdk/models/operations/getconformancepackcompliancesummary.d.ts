import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetConformancePackComplianceSummaryXAmzTargetEnum {
    StarlingDoveServiceGetConformancePackComplianceSummary = "StarlingDoveService.GetConformancePackComplianceSummary"
}
export declare class GetConformancePackComplianceSummaryRequest extends SpeakeasyBase {
    getConformancePackComplianceSummaryRequest: shared.GetConformancePackComplianceSummaryRequest;
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
    xAmzTarget: GetConformancePackComplianceSummaryXAmzTargetEnum;
}
export declare class GetConformancePackComplianceSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getConformancePackComplianceSummaryResponse?: shared.GetConformancePackComplianceSummaryResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * NoSuchConformancePackException
     */
    noSuchConformancePackException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
