import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetFirewallRuleGroupAssociationXAmzTargetEnum {
    Route53ResolverGetFirewallRuleGroupAssociation = "Route53Resolver.GetFirewallRuleGroupAssociation"
}
export declare class GetFirewallRuleGroupAssociationRequest extends SpeakeasyBase {
    getFirewallRuleGroupAssociationRequest: shared.GetFirewallRuleGroupAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFirewallRuleGroupAssociationXAmzTargetEnum;
}
export declare class GetFirewallRuleGroupAssociationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getFirewallRuleGroupAssociationResponse?: shared.GetFirewallRuleGroupAssociationResponse;
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
