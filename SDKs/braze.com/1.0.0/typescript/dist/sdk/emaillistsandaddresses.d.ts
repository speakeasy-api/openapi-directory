import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Users’ email subscription status can be updated and retrieved via Braze using a RESTful API. You can use the API to set up bi-directional sync between Braze and other email systems or your own database.
 */
export declare class EmailListsAndAddresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Query Hard Bounced Emails
     *
     * @remarks
     * This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.
     *
     * > You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
     *
     * ## Response
     *
     * Entries are listed in descending order.
     *
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR-REST-API-KEY
     * {
     *   "emails": [
     *     {
     *       "email": "example1@braze.com",
     *       "hard_bounced_at": "2016-08-25 15:24:32 +0000"
     *     },
     *     {
     *       "email": "example2@braze.com",
     *       "hard_bounced_at": "2016-08-24 17:41:58 +0000"
     *     },
     *     {
     *       "email": "example3@braze.com",
     *       "hard_bounced_at": "2016-08-24 12:01:13 +0000"
     *     }
     *   ],
     *   "message": "success"
     * }
     * ```
     */
    queryHardBouncedEmails(req: operations.QueryHardBouncedEmailsRequest, config?: AxiosRequestConfig): Promise<operations.QueryHardBouncedEmailsResponse>;
    /**
     * Query List of Unsubscribed Email Addresses
     *
     * @remarks
     * Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.
     *
     * > You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.
     */
    queryListOfUnsubscribedEmailAddresses(req: operations.QueryListOfUnsubscribedEmailAddressesRequest, config?: AxiosRequestConfig): Promise<operations.QueryListOfUnsubscribedEmailAddressesResponse>;
}
