import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResolverQueryLogConfigPolicyXAmzTargetEnum {
    Route53ResolverGetResolverQueryLogConfigPolicy = "Route53Resolver.GetResolverQueryLogConfigPolicy"
}
export declare class GetResolverQueryLogConfigPolicyRequest extends SpeakeasyBase {
    getResolverQueryLogConfigPolicyRequest: shared.GetResolverQueryLogConfigPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverQueryLogConfigPolicyXAmzTargetEnum;
}
export declare class GetResolverQueryLogConfigPolicyResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getResolverQueryLogConfigPolicyResponse?: shared.GetResolverQueryLogConfigPolicyResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceException
     */
    unknownResourceException?: any;
}
