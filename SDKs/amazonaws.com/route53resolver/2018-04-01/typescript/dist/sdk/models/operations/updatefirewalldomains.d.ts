import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFirewallDomainsXAmzTargetEnum {
    Route53ResolverUpdateFirewallDomains = "Route53Resolver.UpdateFirewallDomains"
}
export declare class UpdateFirewallDomainsRequest extends SpeakeasyBase {
    updateFirewallDomainsRequest: shared.UpdateFirewallDomainsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallDomainsXAmzTargetEnum;
}
export declare class UpdateFirewallDomainsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateFirewallDomainsResponse?: shared.UpdateFirewallDomainsResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
