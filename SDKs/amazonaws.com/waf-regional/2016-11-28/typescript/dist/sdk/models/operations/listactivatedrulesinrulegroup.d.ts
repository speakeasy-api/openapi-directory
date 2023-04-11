import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListActivatedRulesInRuleGroupXAmzTargetEnum {
    AWSWAFRegional20161128ListActivatedRulesInRuleGroup = "AWSWAF_Regional_20161128.ListActivatedRulesInRuleGroup"
}
export declare class ListActivatedRulesInRuleGroupRequest extends SpeakeasyBase {
    listActivatedRulesInRuleGroupRequest: shared.ListActivatedRulesInRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActivatedRulesInRuleGroupXAmzTargetEnum;
}
export declare class ListActivatedRulesInRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listActivatedRulesInRuleGroupResponse?: shared.ListActivatedRulesInRuleGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
