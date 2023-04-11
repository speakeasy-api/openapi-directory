import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverDeleteFirewallRuleGroup = "Route53Resolver.DeleteFirewallRuleGroup"
}
export declare class DeleteFirewallRuleGroupRequest extends SpeakeasyBase {
    deleteFirewallRuleGroupRequest: shared.DeleteFirewallRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFirewallRuleGroupXAmzTargetEnum;
}
export declare class DeleteFirewallRuleGroupResponse extends SpeakeasyBase {
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
    deleteFirewallRuleGroupResponse?: shared.DeleteFirewallRuleGroupResponse;
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
