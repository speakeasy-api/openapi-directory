import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCustomRulePolicyXAmzTargetEnum {
    StarlingDoveServiceGetCustomRulePolicy = "StarlingDoveService.GetCustomRulePolicy"
}
export declare class GetCustomRulePolicyRequest extends SpeakeasyBase {
    getCustomRulePolicyRequest: shared.GetCustomRulePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCustomRulePolicyXAmzTargetEnum;
}
export declare class GetCustomRulePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCustomRulePolicyResponse?: shared.GetCustomRulePolicyResponse;
    /**
     * NoSuchConfigRuleException
     */
    noSuchConfigRuleException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
