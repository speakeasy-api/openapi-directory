import { SpeakeasyBase } from "../../../internal/utils";
/**
 * the readable info for a webhook config; omits sensitive info e.g. auth token
 */
export declare class WebhookConfigRead extends SpeakeasyBase {
    id: string;
    /**
     * human-readable name e.g. for display in UI
     */
    name?: string;
}
