import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostActionWebhookFailuresIdRetryRequest extends SpeakeasyBase {
    /**
     * Action Webhook Failure ID.
     */
    id: number;
}
export declare class PostActionWebhookFailuresIdRetryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
