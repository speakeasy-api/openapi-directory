import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for creating a webhook
 */
export declare class CreateWebhookRequest extends SpeakeasyBase {
    /**
     * List of names of event types
     */
    eventTypeNames: string[];
    /**
     * Is enabled
     */
    isEnabled?: boolean;
    /**
     * Name
     */
    name: string;
    /**
     * Secret; used for event message signatures
     */
    secret?: string;
    /**
     * If set to true, an example event is being created
     */
    triggerExampleEvent?: boolean;
    /**
     * URL (must begin with the `HTTPS` scheme)
     */
    url: string;
}
