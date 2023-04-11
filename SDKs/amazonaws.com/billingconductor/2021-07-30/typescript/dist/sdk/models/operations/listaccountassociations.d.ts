import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>The filter on the account ID of the linked account, or any of the following:</p> <p> <code>MONITORED</code>: linked accounts that are associated to billing groups.</p> <p> <code>UNMONITORED</code>: linked accounts that are not associated to billing groups.</p> <p> <code>Billing Group Arn</code>: linked accounts that are associated to the provided Billing Group Arn. </p>
 */
export declare class ListAccountAssociationsRequestBodyFilters extends SpeakeasyBase {
    accountId?: string;
    accountIds?: string[];
    association?: string;
}
export declare class ListAccountAssociationsRequestBody extends SpeakeasyBase {
    /**
     *  The preferred billing period to get account associations.
     */
    billingPeriod?: string;
    /**
     * <p>The filter on the account ID of the linked account, or any of the following:</p> <p> <code>MONITORED</code>: linked accounts that are associated to billing groups.</p> <p> <code>UNMONITORED</code>: linked accounts that are not associated to billing groups.</p> <p> <code>Billing Group Arn</code>: linked accounts that are associated to the provided Billing Group Arn. </p>
     */
    filters?: ListAccountAssociationsRequestBodyFilters;
    /**
     *  The pagination token that's used on subsequent calls to retrieve accounts.
     */
    nextToken?: string;
}
export declare class ListAccountAssociationsRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListAccountAssociationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAccountAssociationsResponse extends SpeakeasyBase {
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
    listAccountAssociationsOutput?: shared.ListAccountAssociationsOutput;
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
