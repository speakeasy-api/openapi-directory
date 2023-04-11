import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetComplianceSummaryByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceGetComplianceSummaryByConfigRule = "StarlingDoveService.GetComplianceSummaryByConfigRule"
}
export declare class GetComplianceSummaryByConfigRuleRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceSummaryByConfigRuleXAmzTargetEnum;
}
export declare class GetComplianceSummaryByConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getComplianceSummaryByConfigRuleResponse?: shared.GetComplianceSummaryByConfigRuleResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
