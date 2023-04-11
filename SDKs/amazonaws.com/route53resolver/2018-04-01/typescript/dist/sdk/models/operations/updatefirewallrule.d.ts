import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFirewallRuleXAmzTargetEnum {
    Route53ResolverUpdateFirewallRule = "Route53Resolver.UpdateFirewallRule"
}
export declare class UpdateFirewallRuleRequest extends SpeakeasyBase {
    updateFirewallRuleRequest: shared.UpdateFirewallRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallRuleXAmzTargetEnum;
}
export declare class UpdateFirewallRuleResponse extends SpeakeasyBase {
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
    updateFirewallRuleResponse?: shared.UpdateFirewallRuleResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
