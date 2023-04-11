import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutFirewallRuleGroupPolicyXAmzTargetEnum {
    Route53ResolverPutFirewallRuleGroupPolicy = "Route53Resolver.PutFirewallRuleGroupPolicy"
}
export declare class PutFirewallRuleGroupPolicyRequest extends SpeakeasyBase {
    putFirewallRuleGroupPolicyRequest: shared.PutFirewallRuleGroupPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutFirewallRuleGroupPolicyXAmzTargetEnum;
}
export declare class PutFirewallRuleGroupPolicyResponse extends SpeakeasyBase {
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
    putFirewallRuleGroupPolicyResponse?: shared.PutFirewallRuleGroupPolicyResponse;
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
