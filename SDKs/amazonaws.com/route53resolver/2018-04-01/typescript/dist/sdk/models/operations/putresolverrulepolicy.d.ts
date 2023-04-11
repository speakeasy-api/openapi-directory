import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutResolverRulePolicyXAmzTargetEnum {
    Route53ResolverPutResolverRulePolicy = "Route53Resolver.PutResolverRulePolicy"
}
export declare class PutResolverRulePolicyRequest extends SpeakeasyBase {
    putResolverRulePolicyRequest: shared.PutResolverRulePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResolverRulePolicyXAmzTargetEnum;
}
export declare class PutResolverRulePolicyResponse extends SpeakeasyBase {
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
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidPolicyDocument
     */
    invalidPolicyDocument?: any;
    /**
     * Success
     */
    putResolverRulePolicyResponse?: shared.PutResolverRulePolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceException
     */
    unknownResourceException?: any;
}
