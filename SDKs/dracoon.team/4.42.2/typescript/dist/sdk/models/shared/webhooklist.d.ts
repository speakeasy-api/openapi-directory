import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { Webhook } from "./webhook";
/**
 * List of webhooks
 */
export declare class WebhookList extends SpeakeasyBase {
    /**
     * List of webhooks
     */
    items: Webhook[];
    /**
     * Range information
     */
    range: Range;
}
