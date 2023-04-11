import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetConformancePackComplianceDetailsXAmzTargetEnum {
    StarlingDoveServiceGetConformancePackComplianceDetails = "StarlingDoveService.GetConformancePackComplianceDetails"
}
export declare class GetConformancePackComplianceDetailsRequest extends SpeakeasyBase {
    getConformancePackComplianceDetailsRequest: shared.GetConformancePackComplianceDetailsRequest;
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
    xAmzTarget: GetConformancePackComplianceDetailsXAmzTargetEnum;
}
export declare class GetConformancePackComplianceDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getConformancePackComplianceDetailsResponse?: shared.GetConformancePackComplianceDetailsResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchConfigRuleInConformancePackException
     */
    noSuchConfigRuleInConformancePackException?: any;
    /**
     * NoSuchConformancePackException
     */
    noSuchConformancePackException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
