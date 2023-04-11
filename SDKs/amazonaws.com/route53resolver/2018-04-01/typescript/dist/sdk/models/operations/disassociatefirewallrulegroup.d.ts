import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverDisassociateFirewallRuleGroup = "Route53Resolver.DisassociateFirewallRuleGroup"
}
export declare class DisassociateFirewallRuleGroupRequest extends SpeakeasyBase {
    disassociateFirewallRuleGroupRequest: shared.DisassociateFirewallRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateFirewallRuleGroupXAmzTargetEnum;
}
export declare class DisassociateFirewallRuleGroupResponse extends SpeakeasyBase {
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
     * Success
     */
    disassociateFirewallRuleGroupResponse?: shared.DisassociateFirewallRuleGroupResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
