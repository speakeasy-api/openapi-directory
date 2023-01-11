import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Payout {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPayout - This method retrieves details on a specific seller payout. The unique identfier of the payout is passed in as a path parameter at the end of the call URI. The getPayouts method can be used to retrieve the unique identifier of a payout, or the user can check Seller Hub.
    **/
    getPayout(req: operations.GetPayoutRequest, config?: AxiosRequestConfig): Promise<operations.GetPayoutResponse>;
    /**
     * getPayoutSummary - This method is used to retrieve cumulative values for payouts in a particular state, or all states. The metadata in the response includes total payouts, the total number of monetary transactions (sales, refunds, credits) associated with those payouts, and the total dollar value of all payouts. If the filter query parameter is used to filter by payout status, only one payout status value may be used. If the filter query parameter is not used to filter by a specific payout status, cumulative values for payouts in all states are returned. The user can also use the filter query parameter to specify a date range, and then only payouts that were processed within that date range are considered.
    **/
    getPayoutSummary(req: operations.GetPayoutSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetPayoutSummaryResponse>;
    /**
     * getPayouts - This method is used to retrieve the details of one or more seller payouts. By using the filter query parameter, users can retrieve payouts processed within a specific date range, and/or they can retrieve payouts in a specific state. There are also pagination and sort query parameters that allow users to control the payouts that are returned in the response. If no payouts match the input criteria, an empty payload is returned.
    **/
    getPayouts(req: operations.GetPayoutsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayoutsResponse>;
}
