import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResolverEndpointXAmzTargetEnum {
    Route53ResolverGetResolverEndpoint = "Route53Resolver.GetResolverEndpoint"
}
export declare class GetResolverEndpointRequest extends SpeakeasyBase {
    getResolverEndpointRequest: shared.GetResolverEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverEndpointXAmzTargetEnum;
}
export declare class GetResolverEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResolverEndpointResponse?: shared.GetResolverEndpointResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
