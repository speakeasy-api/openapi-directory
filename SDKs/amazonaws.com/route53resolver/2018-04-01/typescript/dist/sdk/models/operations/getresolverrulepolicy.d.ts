import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResolverRulePolicyXAmzTargetEnum {
    Route53ResolverGetResolverRulePolicy = "Route53Resolver.GetResolverRulePolicy"
}
export declare class GetResolverRulePolicyRequest extends SpeakeasyBase {
    getResolverRulePolicyRequest: shared.GetResolverRulePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverRulePolicyXAmzTargetEnum;
}
export declare class GetResolverRulePolicyResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getResolverRulePolicyResponse?: shared.GetResolverRulePolicyResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceException
     */
    unknownResourceException?: any;
}
