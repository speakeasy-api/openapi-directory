import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFirewallRuleGroupAssociationXAmzTargetEnum {
    Route53ResolverUpdateFirewallRuleGroupAssociation = "Route53Resolver.UpdateFirewallRuleGroupAssociation"
}
export declare class UpdateFirewallRuleGroupAssociationRequest extends SpeakeasyBase {
    updateFirewallRuleGroupAssociationRequest: shared.UpdateFirewallRuleGroupAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallRuleGroupAssociationXAmzTargetEnum;
}
export declare class UpdateFirewallRuleGroupAssociationResponse extends SpeakeasyBase {
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
    updateFirewallRuleGroupAssociationResponse?: shared.UpdateFirewallRuleGroupAssociationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
