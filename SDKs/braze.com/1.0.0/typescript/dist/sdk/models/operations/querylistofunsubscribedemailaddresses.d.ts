import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QueryListOfUnsubscribedEmailAddressesRequest extends SpeakeasyBase {
    /**
     * (Optional*) String
     *
     * @remarks
     *
     * If provided, we will return whether or not the user has unsubscribed
     */
    email?: string;
    /**
     * (Optional*)  String in YYYY-MM-DD format
     *
     * @remarks
     *
     * End date of the range to retrieve unsubscribes. This is treated as midnight in UTC time by the API.
     */
    endDate?: string;
    /**
     * (Optional) Integer
     *
     * @remarks
     *
     * Optional field to limit the number of results returned. Limit must be greater than 1. Defaults to 100, maximum is 500.
     */
    limit?: string;
    /**
     * (Optional) Integer
     *
     * @remarks
     *
     * Optional beginning point in the list to retrieve from
     */
    offset?: string;
    /**
     * (Optional) String
     *
     * @remarks
     *
     * Pass in the value `asc` to sort unsubscribes from oldest to newest. Pass in `desc` to sort from newest to oldest. If sort_direction is not included, the default order is newest to oldest.
     */
    sortDirection?: string;
    /**
     * (Optional*) String in YYYY-MM-DD format
     *
     * @remarks
     *
     * Start date of the range to retrieve unsubscribes, must be earlier than end_date. This is treated as midnight in UTC time by the API.
     */
    startDate?: string;
}
export declare class QueryListOfUnsubscribedEmailAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
