import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRuleGroupsXAmzTargetEnum {
    AWSWAFRegional20161128ListRuleGroups = "AWSWAF_Regional_20161128.ListRuleGroups"
}
export declare class ListRuleGroupsRequest extends SpeakeasyBase {
    listRuleGroupsRequest: shared.ListRuleGroupsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRuleGroupsXAmzTargetEnum;
}
export declare class ListRuleGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listRuleGroupsResponse?: shared.ListRuleGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
}
