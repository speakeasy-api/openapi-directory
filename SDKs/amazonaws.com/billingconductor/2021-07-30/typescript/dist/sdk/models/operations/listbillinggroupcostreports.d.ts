import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The filter used to retrieve specific <code>BillingGroupCostReportElements</code>.
 */
export declare class ListBillingGroupCostReportsRequestBodyFilters extends SpeakeasyBase {
    billingGroupArns?: string[];
}
export declare class ListBillingGroupCostReportsRequestBody extends SpeakeasyBase {
    /**
     * The preferred billing period for your report.
     */
    billingPeriod?: string;
    /**
     * The filter used to retrieve specific <code>BillingGroupCostReportElements</code>.
     */
    filters?: ListBillingGroupCostReportsRequestBodyFilters;
    /**
     * The maximum number of reports to retrieve.
     */
    maxResults?: number;
    /**
     * The pagination token that's used on subsequent calls to get reports.
     */
    nextToken?: string;
}
export declare class ListBillingGroupCostReportsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListBillingGroupCostReportsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListBillingGroupCostReportsResponse extends SpeakeasyBase {
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
    listBillingGroupCostReportsOutput?: shared.ListBillingGroupCostReportsOutput;
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
