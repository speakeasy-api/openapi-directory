import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetComplianceDetailsByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetComplianceDetailsByConfigRule = "StarlingDoveService.GetComplianceDetailsByConfigRule"
}
export declare class GetComplianceDetailsByConfigRuleRequest extends SpeakeasyBase {
    getComplianceDetailsByConfigRuleRequest: shared.GetComplianceDetailsByConfigRuleRequest;
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
    xAmzTarget: GetComplianceDetailsByConfigRuleXAmzTargetEnum;
}
export declare class GetComplianceDetailsByConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getComplianceDetailsByConfigRuleResponse?: shared.GetComplianceDetailsByConfigRuleResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchConfigRuleException
     */
    noSuchConfigRuleException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
