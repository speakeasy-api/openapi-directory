import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutResolverQueryLogConfigPolicyXAmzTargetEnum {
    Route53ResolverPutResolverQueryLogConfigPolicy = "Route53Resolver.PutResolverQueryLogConfigPolicy"
}
export declare class PutResolverQueryLogConfigPolicyRequest extends SpeakeasyBase {
    putResolverQueryLogConfigPolicyRequest: shared.PutResolverQueryLogConfigPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResolverQueryLogConfigPolicyXAmzTargetEnum;
}
export declare class PutResolverQueryLogConfigPolicyResponse extends SpeakeasyBase {
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
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    putResolverQueryLogConfigPolicyResponse?: shared.PutResolverQueryLogConfigPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceException
     */
    unknownResourceException?: any;
}
