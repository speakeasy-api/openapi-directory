import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRuleXAmzTargetEnum {
    AWSWAFRegional20161128GetRule = "AWSWAF_Regional_20161128.GetRule"
}
export declare class GetRuleRequest extends SpeakeasyBase {
    getRuleRequest: shared.GetRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRuleXAmzTargetEnum;
}
export declare class GetRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRuleResponse?: shared.GetRuleResponse;
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
