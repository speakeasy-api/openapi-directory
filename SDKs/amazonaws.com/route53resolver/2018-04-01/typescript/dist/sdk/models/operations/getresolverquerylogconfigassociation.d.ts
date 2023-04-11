import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResolverQueryLogConfigAssociationXAmzTargetEnum {
    Route53ResolverGetResolverQueryLogConfigAssociation = "Route53Resolver.GetResolverQueryLogConfigAssociation"
}
export declare class GetResolverQueryLogConfigAssociationRequest extends SpeakeasyBase {
    getResolverQueryLogConfigAssociationRequest: shared.GetResolverQueryLogConfigAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverQueryLogConfigAssociationXAmzTargetEnum;
}
export declare class GetResolverQueryLogConfigAssociationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getResolverQueryLogConfigAssociationResponse?: shared.GetResolverQueryLogConfigAssociationResponse;
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
