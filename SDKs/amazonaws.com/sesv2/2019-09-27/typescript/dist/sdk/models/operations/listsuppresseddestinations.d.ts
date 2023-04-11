import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSuppressedDestinationsRequest extends SpeakeasyBase {
    /**
     * Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list before a specific date.
     */
    endDate?: Date;
    /**
     * A token returned from a previous call to <code>ListSuppressedDestinations</code> to indicate the position in the list of suppressed email addresses.
     */
    nextToken?: string;
    /**
     * The number of results to show in a single call to <code>ListSuppressedDestinations</code>. If the number of results is larger than the number you specified in this parameter, then the response includes a <code>NextToken</code> element, which you can use to obtain additional results.
     */
    pageSize?: number;
    /**
     * The factors that caused the email address to be added to .
     */
    reason?: shared.SuppressionListReasonEnum[];
    /**
     * Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list after a specific date.
     */
    startDate?: Date;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSuppressedDestinationsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listSuppressedDestinationsResponse?: shared.ListSuppressedDestinationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
