import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResolverQueryLogConfigAssociationsXAmzTargetEnum {
    Route53ResolverListResolverQueryLogConfigAssociations = "Route53Resolver.ListResolverQueryLogConfigAssociations"
}
export declare class ListResolverQueryLogConfigAssociationsRequest extends SpeakeasyBase {
    listResolverQueryLogConfigAssociationsRequest: shared.ListResolverQueryLogConfigAssociationsRequest;
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
    xAmzTarget: ListResolverQueryLogConfigAssociationsXAmzTargetEnum;
}
export declare class ListResolverQueryLogConfigAssociationsResponse extends SpeakeasyBase {
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
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listResolverQueryLogConfigAssociationsResponse?: shared.ListResolverQueryLogConfigAssociationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
