import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFirewallRuleGroupXAmzTargetEnum {
    Route53ResolverCreateFirewallRuleGroup = "Route53Resolver.CreateFirewallRuleGroup"
}
export declare class CreateFirewallRuleGroupRequest extends SpeakeasyBase {
    createFirewallRuleGroupRequest: shared.CreateFirewallRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFirewallRuleGroupXAmzTargetEnum;
}
export declare class CreateFirewallRuleGroupResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createFirewallRuleGroupResponse?: shared.CreateFirewallRuleGroupResponse;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
