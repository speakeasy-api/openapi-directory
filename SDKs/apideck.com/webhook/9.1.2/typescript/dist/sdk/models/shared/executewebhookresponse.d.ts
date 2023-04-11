import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Execute Webhook
 */
export declare class ExecuteWebhookResponse extends SpeakeasyBase {
    /**
     * UUID of the request received
     */
    requestId?: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
    /**
     * ISO Datetime webhook event was received
     */
    timestamp?: string;
}
