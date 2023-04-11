import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResolverRuleAssociationsXAmzTargetEnum {
    Route53ResolverListResolverRuleAssociations = "Route53Resolver.ListResolverRuleAssociations"
}
export declare class ListResolverRuleAssociationsRequest extends SpeakeasyBase {
    listResolverRuleAssociationsRequest: shared.ListResolverRuleAssociationsRequest;
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
    xAmzTarget: ListResolverRuleAssociationsXAmzTargetEnum;
}
export declare class ListResolverRuleAssociationsResponse extends SpeakeasyBase {
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
    listResolverRuleAssociationsResponse?: shared.ListResolverRuleAssociationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
