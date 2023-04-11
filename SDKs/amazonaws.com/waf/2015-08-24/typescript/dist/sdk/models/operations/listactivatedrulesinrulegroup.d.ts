import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListActivatedRulesInRuleGroupXAmzTargetEnum {
    AWSWAF20150824ListActivatedRulesInRuleGroup = "AWSWAF_20150824.ListActivatedRulesInRuleGroup"
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
