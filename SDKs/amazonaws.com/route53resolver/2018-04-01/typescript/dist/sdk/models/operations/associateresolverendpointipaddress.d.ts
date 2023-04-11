import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateResolverEndpointIpAddressXAmzTargetEnum {
    Route53ResolverAssociateResolverEndpointIpAddress = "Route53Resolver.AssociateResolverEndpointIpAddress"
}
export declare class AssociateResolverEndpointIpAddressRequest extends SpeakeasyBase {
    associateResolverEndpointIpAddressRequest: shared.AssociateResolverEndpointIpAddressRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateResolverEndpointIpAddressXAmzTargetEnum;
}
export declare class AssociateResolverEndpointIpAddressResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateResolverEndpointIpAddressResponse?: shared.AssociateResolverEndpointIpAddressResponse;
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
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceExistsException
     */
    resourceExistsException?: any;
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
