import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Event type information
 */
export declare class EventType extends SpeakeasyBase {
    /**
     * ID
     */
    id: number;
    /**
     * Name
     */
    name: string;
    /**
     * Usable as customer admin webhook
     */
    usableCustomerAdminWebhook: boolean;
    /**
     * Usable as node webhook
     */
    usableNodeWebhook: boolean;
    /**
     * Usable as push notification
     */
    usablePushNotification: boolean;
    /**
     * Usable as tenant webhook
     */
    usableTenantWebhook: boolean;
}
