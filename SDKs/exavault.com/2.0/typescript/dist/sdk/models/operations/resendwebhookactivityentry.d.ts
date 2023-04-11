import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResendWebhookActivityEntryRequest extends SpeakeasyBase {
    /**
     * Webhooks activity entry ID
     */
    activityId: string;
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
}
export declare class ResendWebhookActivityEntryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
