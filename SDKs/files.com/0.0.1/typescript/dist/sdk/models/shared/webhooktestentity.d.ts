import { SpeakeasyBase } from "../../../internal/utils";
import { AutoEntity } from "./autoentity";
/**
 * Create Webhook Test
 */
export declare class WebhookTestEntity extends SpeakeasyBase {
    /**
     * Status HTTP code
     */
    code?: number;
    data?: AutoEntity;
    /**
     * Error message
     */
    message?: string;
    /**
     * Status message
     */
    status?: string;
    /**
     * The success status of the webhook test
     */
    success?: boolean;
}
