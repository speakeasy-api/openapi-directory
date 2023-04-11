import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhookLogsRequest extends SpeakeasyBase {
    /**
     * Latest date of entries to include in list
     */
    endDate?: Date;
    /**
     * Webhook listener endpoint
     */
    endpointUrl?: string;
    /**
     * Access Token
     */
    evAccessToken: string;
    /**
     * API Key
     */
    evApiKey: string;
    /**
     * Type of activity that triggered the webhook attempt
     */
    event?: string;
    /**
     * Limit of the records list
     */
    limit?: number;
    /**
     * Records to skip before returning results.
     */
    offset?: number;
    /**
     * Path of the resource that triggered the webhook attempt
     */
    resourcePath?: string;
    /**
     * Comma separated list sort params
     */
    sort?: string;
    /**
     * Earliest date of entries to include in list
     */
    startDate?: Date;
    /**
     * Response code from the webhook endpoint
     */
    statusCode?: number;
    /**
     * Filter by triggering username.
     */
    username?: string;
}
export declare class GetWebhookLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    webhookActivityResponse?: shared.WebhookActivityResponse;
}
