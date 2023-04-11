import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFirewallRuleGroupsXAmzTargetEnum {
    Route53ResolverListFirewallRuleGroups = "Route53Resolver.ListFirewallRuleGroups"
}
export declare class ListFirewallRuleGroupsRequest extends SpeakeasyBase {
    listFirewallRuleGroupsRequest: shared.ListFirewallRuleGroupsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
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
    xAmzTarget: ListFirewallRuleGroupsXAmzTargetEnum;
}
export declare class ListFirewallRuleGroupsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * Success
     */
    listFirewallRuleGroupsResponse?: shared.ListFirewallRuleGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
