import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateResolverEndpointXAmzTargetEnum {
    Route53ResolverCreateResolverEndpoint = "Route53Resolver.CreateResolverEndpoint"
}
export declare class CreateResolverEndpointRequest extends SpeakeasyBase {
    createResolverEndpointRequest: shared.CreateResolverEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResolverEndpointXAmzTargetEnum;
}
export declare class CreateResolverEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createResolverEndpointResponse?: shared.CreateResolverEndpointResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceExistsException
     */
    resourceExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
