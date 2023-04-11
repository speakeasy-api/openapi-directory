import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFirewallDomainListsXAmzTargetEnum {
    Route53ResolverListFirewallDomainLists = "Route53Resolver.ListFirewallDomainLists"
}
export declare class ListFirewallDomainListsRequest extends SpeakeasyBase {
    listFirewallDomainListsRequest: shared.ListFirewallDomainListsRequest;
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
    xAmzTarget: ListFirewallDomainListsXAmzTargetEnum;
}
export declare class ListFirewallDomainListsResponse extends SpeakeasyBase {
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
    listFirewallDomainListsResponse?: shared.ListFirewallDomainListsResponse;
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
