import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResolverEndpointIpAddressesXAmzTargetEnum {
    Route53ResolverListResolverEndpointIpAddresses = "Route53Resolver.ListResolverEndpointIpAddresses"
}
export declare class ListResolverEndpointIpAddressesRequest extends SpeakeasyBase {
    listResolverEndpointIpAddressesRequest: shared.ListResolverEndpointIpAddressesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResolverEndpointIpAddressesXAmzTargetEnum;
}
export declare class ListResolverEndpointIpAddressesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listResolverEndpointIpAddressesResponse?: shared.ListResolverEndpointIpAddressesResponse;
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
