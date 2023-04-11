import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResolverEndpointXAmzTargetEnum {
    Route53ResolverDeleteResolverEndpoint = "Route53Resolver.DeleteResolverEndpoint"
}
export declare class DeleteResolverEndpointRequest extends SpeakeasyBase {
    deleteResolverEndpointRequest: shared.DeleteResolverEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResolverEndpointXAmzTargetEnum;
}
export declare class DeleteResolverEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteResolverEndpointResponse?: shared.DeleteResolverEndpointResponse;
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
