import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for handling webhook assignments
 */
export declare class RoomWebhookAssignment extends SpeakeasyBase {
    /**
     * Determines whether webhook is assigned to the room.
     */
    isAssigned: boolean;
    /**
     * Webhook ID
     */
    webhookId: number;
}
