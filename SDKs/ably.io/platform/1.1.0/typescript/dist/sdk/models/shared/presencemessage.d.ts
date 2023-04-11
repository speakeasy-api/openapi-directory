import { SpeakeasyBase } from "../../../internal/utils";
import { Extras } from "./extras";
/**
 * The event signified by a PresenceMessage.
 */
export declare enum PresenceMessageActionEnum {
    Absent = "ABSENT",
    Present = "PRESENT",
    Enter = "ENTER",
    Leave = "LEAVE",
    Update = "UPDATE"
}
export declare class PresenceMessage extends SpeakeasyBase {
    /**
     * The event signified by a PresenceMessage.
     */
    action?: PresenceMessageActionEnum;
    /**
     * The client ID of the publisher of this presence update.
     */
    clientId?: string;
    /**
     * The connection ID of the publisher of this presence update.
     */
    connectionId?: string;
    /**
     * The presence update payload, if provided.
     */
    data?: string;
    /**
     * This will typically be empty as all presence updates received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.
     */
    encoding?: string;
    /**
     * Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
     */
    extras?: Extras;
    /**
     * Unique ID assigned by Ably to this presence update.
     */
    id?: string;
    /**
     * Timestamp when the presence update was received by Ably, as milliseconds since the epoch.
     */
    timestamp?: number;
}
