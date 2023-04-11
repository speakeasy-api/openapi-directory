import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFirewallConfigsXAmzTargetEnum {
    Route53ResolverListFirewallConfigs = "Route53Resolver.ListFirewallConfigs"
}
export declare class ListFirewallConfigsRequest extends SpeakeasyBase {
    listFirewallConfigsRequest: shared.ListFirewallConfigsRequest;
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
    xAmzTarget: ListFirewallConfigsXAmzTargetEnum;
}
export declare class ListFirewallConfigsResponse extends SpeakeasyBase {
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
    listFirewallConfigsResponse?: shared.ListFirewallConfigsResponse;
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
