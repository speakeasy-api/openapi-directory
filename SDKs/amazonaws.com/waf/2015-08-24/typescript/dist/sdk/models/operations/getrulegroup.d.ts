import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRuleGroupXAmzTargetEnum {
    AWSWAF20150824GetRuleGroup = "AWSWAF_20150824.GetRuleGroup"
}
export declare class GetRuleGroupRequest extends SpeakeasyBase {
    getRuleGroupRequest: shared.GetRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRuleGroupXAmzTargetEnum;
}
export declare class GetRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRuleGroupResponse?: shared.GetRuleGroupResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
