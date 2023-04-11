import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { RoomWebhook } from "./roomwebhook";
/**
 * List of webhooks
 */
export declare class RoomWebhookList extends SpeakeasyBase {
    /**
     * List of webhooks
     */
    items: RoomWebhook[];
    /**
     * Range information
     */
    range: Range;
}
