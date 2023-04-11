import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverGetFirewallRuleGroup = "Route53Resolver.GetFirewallRuleGroup"
}
export declare class GetFirewallRuleGroupRequest extends SpeakeasyBase {
    getFirewallRuleGroupRequest: shared.GetFirewallRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFirewallRuleGroupXAmzTargetEnum;
}
export declare class GetFirewallRuleGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getFirewallRuleGroupResponse?: shared.GetFirewallRuleGroupResponse;
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
}
