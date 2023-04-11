import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
/**
 * Webhooks
 */
export declare class GetWebhookResponse extends SpeakeasyBase {
    data: Webhook;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
