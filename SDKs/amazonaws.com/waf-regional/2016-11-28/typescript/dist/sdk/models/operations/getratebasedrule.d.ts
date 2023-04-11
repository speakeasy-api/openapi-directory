import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRateBasedRuleXAmzTargetEnum {
    AWSWAFRegional20161128GetRateBasedRule = "AWSWAF_Regional_20161128.GetRateBasedRule"
}
export declare class GetRateBasedRuleRequest extends SpeakeasyBase {
    getRateBasedRuleRequest: shared.GetRateBasedRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRateBasedRuleXAmzTargetEnum;
}
export declare class GetRateBasedRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRateBasedRuleResponse?: shared.GetRateBasedRuleResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidAccountException
     */
    wafInvalidAccountException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
