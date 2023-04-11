import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetFirewallRuleGroupPolicyXAmzTargetEnum {
    Route53ResolverGetFirewallRuleGroupPolicy = "Route53Resolver.GetFirewallRuleGroupPolicy"
}
export declare class GetFirewallRuleGroupPolicyRequest extends SpeakeasyBase {
    getFirewallRuleGroupPolicyRequest: shared.GetFirewallRuleGroupPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFirewallRuleGroupPolicyXAmzTargetEnum;
}
export declare class GetFirewallRuleGroupPolicyResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getFirewallRuleGroupPolicyResponse?: shared.GetFirewallRuleGroupPolicyResponse;
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
