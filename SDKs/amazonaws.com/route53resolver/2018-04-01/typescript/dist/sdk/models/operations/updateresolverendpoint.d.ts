import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateResolverEndpointXAmzTargetEnum {
    Route53ResolverUpdateResolverEndpoint = "Route53Resolver.UpdateResolverEndpoint"
}
export declare class UpdateResolverEndpointRequest extends SpeakeasyBase {
    updateResolverEndpointRequest: shared.UpdateResolverEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResolverEndpointXAmzTargetEnum;
}
export declare class UpdateResolverEndpointResponse extends SpeakeasyBase {
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
    updateResolverEndpointResponse?: shared.UpdateResolverEndpointResponse;
}
