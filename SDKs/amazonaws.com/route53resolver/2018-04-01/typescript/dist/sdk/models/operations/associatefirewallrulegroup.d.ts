import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverAssociateFirewallRuleGroup = "Route53Resolver.AssociateFirewallRuleGroup"
}
export declare class AssociateFirewallRuleGroupRequest extends SpeakeasyBase {
    associateFirewallRuleGroupRequest: shared.AssociateFirewallRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateFirewallRuleGroupXAmzTargetEnum;
}
export declare class AssociateFirewallRuleGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associateFirewallRuleGroupResponse?: shared.AssociateFirewallRuleGroupResponse;
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
