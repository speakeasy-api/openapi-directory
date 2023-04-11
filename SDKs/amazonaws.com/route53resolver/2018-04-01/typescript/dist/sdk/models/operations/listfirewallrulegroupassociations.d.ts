import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFirewallRuleGroupAssociationsXAmzTargetEnum {
    Route53ResolverListFirewallRuleGroupAssociations = "Route53Resolver.ListFirewallRuleGroupAssociations"
}
export declare class ListFirewallRuleGroupAssociationsRequest extends SpeakeasyBase {
    listFirewallRuleGroupAssociationsRequest: shared.ListFirewallRuleGroupAssociationsRequest;
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
    xAmzTarget: ListFirewallRuleGroupAssociationsXAmzTargetEnum;
}
export declare class ListFirewallRuleGroupAssociationsResponse extends SpeakeasyBase {
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
    listFirewallRuleGroupAssociationsResponse?: shared.ListFirewallRuleGroupAssociationsResponse;
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
