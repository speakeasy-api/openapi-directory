import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The filter that specifies the billing groups and pricing plans to retrieve billing group information.
 */
export declare class ListBillingGroupsRequestBodyFilters extends SpeakeasyBase {
    arns?: string[];
    pricingPlan?: string;
    statuses?: shared.BillingGroupStatusEnum[];
}
export declare class ListBillingGroupsRequestBody extends SpeakeasyBase {
    /**
     * The preferred billing period to get billing groups.
     */
    billingPeriod?: string;
    /**
     * The filter that specifies the billing groups and pricing plans to retrieve billing group information.
     */
    filters?: ListBillingGroupsRequestBodyFilters;
    /**
     * The maximum number of billing groups to retrieve.
     */
    maxResults?: number;
    /**
     * The pagination token that's used on subsequent calls to get billing groups.
     */
    nextToken?: string;
}
export declare class ListBillingGroupsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListBillingGroupsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListBillingGroupsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listBillingGroupsOutput?: shared.ListBillingGroupsOutput;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
