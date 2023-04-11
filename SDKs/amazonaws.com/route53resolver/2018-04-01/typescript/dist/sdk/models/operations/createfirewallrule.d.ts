import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFirewallRuleXAmzTargetEnum {
    Route53ResolverCreateFirewallRule = "Route53Resolver.CreateFirewallRule"
}
export declare class CreateFirewallRuleRequest extends SpeakeasyBase {
    createFirewallRuleRequest: shared.CreateFirewallRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFirewallRuleXAmzTargetEnum;
}
export declare class CreateFirewallRuleResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createFirewallRuleResponse?: shared.CreateFirewallRuleResponse;
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
