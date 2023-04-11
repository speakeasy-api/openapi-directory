import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSubscribedRuleGroupsXAmzTargetEnum {
    AWSWAF20150824ListSubscribedRuleGroups = "AWSWAF_20150824.ListSubscribedRuleGroups"
}
export declare class ListSubscribedRuleGroupsRequest extends SpeakeasyBase {
    listSubscribedRuleGroupsRequest: shared.ListSubscribedRuleGroupsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSubscribedRuleGroupsXAmzTargetEnum;
}
export declare class ListSubscribedRuleGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listSubscribedRuleGroupsResponse?: shared.ListSubscribedRuleGroupsResponse;
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
