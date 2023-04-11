import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookLog extends SpeakeasyBase {
    /**
     * ID of the log
     */
    id: number;
    /**
     * ID of the service
     */
    idService?: number;
    /**
     * ID of the user
     */
    idUser?: number;
    /**
     * ID of the webhook data
     */
    idWebhookData?: number;
    /**
     * If the log is an error, do not retry to push before this timestamp
     */
    nextTry?: Date;
    /**
     * Return code of the reply to the hook
     */
    responseCode?: number;
    /**
     * Timestamp of the reply to the hook
     */
    responseDate?: Date;
    /**
     * Timestamp when the hook was sent
     */
    timestamp: Date;
}
