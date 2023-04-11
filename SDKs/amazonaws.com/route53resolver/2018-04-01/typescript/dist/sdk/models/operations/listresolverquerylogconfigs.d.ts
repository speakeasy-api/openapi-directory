import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResolverQueryLogConfigsXAmzTargetEnum {
    Route53ResolverListResolverQueryLogConfigs = "Route53Resolver.ListResolverQueryLogConfigs"
}
export declare class ListResolverQueryLogConfigsRequest extends SpeakeasyBase {
    listResolverQueryLogConfigsRequest: shared.ListResolverQueryLogConfigsRequest;
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
    xAmzTarget: ListResolverQueryLogConfigsXAmzTargetEnum;
}
export declare class ListResolverQueryLogConfigsResponse extends SpeakeasyBase {
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
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listResolverQueryLogConfigsResponse?: shared.ListResolverQueryLogConfigsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
