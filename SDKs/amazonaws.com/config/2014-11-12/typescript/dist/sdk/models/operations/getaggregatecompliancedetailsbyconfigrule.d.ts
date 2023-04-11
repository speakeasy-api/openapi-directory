import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetAggregateComplianceDetailsByConfigRule = "StarlingDoveService.GetAggregateComplianceDetailsByConfigRule"
}
export declare class GetAggregateComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
    getAggregateComplianceDetailsByConfigRuleRequest: shared.GetAggregateComplianceDetailsByConfigRuleRequest;
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
    xAmzTarget: GetAggregateComplianceDetailsByConfigRuleXAmzTargetEnum;
}
export declare class GetAggregateComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAggregateComplianceDetailsByConfigRuleResponse?: shared.GetAggregateComplianceDetailsByConfigRuleResponse;
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
