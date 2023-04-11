import { SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
/**
 * Webhook information
 */
export declare class RoomWebhook extends SpeakeasyBase {
    /**
     * Determines whether webhook is assigned to the room.
     */
    isAssigned: boolean;
    /**
     * Webhook information
     */
    webhook: Webhook;
}
