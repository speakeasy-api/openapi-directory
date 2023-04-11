import { SpeakeasyBase } from "../../../internal/utils";
import { Extras } from "./extras";
/**
 * Message object.
 */
export declare class MessageInput extends SpeakeasyBase {
    /**
     * The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.
     */
    clientId?: string;
    /**
     * The connection ID of the publisher of this message.
     */
    connectionId?: string;
    /**
     * The string encoded payload, with the encoding specified below.
     */
    data?: string;
    /**
     * This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.
     */
    encoding?: string;
    /**
     * Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
     */
    extras?: Extras;
    /**
     * The event name, if provided.
     */
    name?: string;
}
/**
 * Message object.
 */
export declare class Message extends SpeakeasyBase {
    /**
     * The [client ID](https://www.ably.io/documentation/core-features/authentication#identified-clients) of the publisher of this message.
     */
    clientId?: string;
    /**
     * The connection ID of the publisher of this message.
     */
    connectionId?: string;
    /**
     * The string encoded payload, with the encoding specified below.
     */
    data?: string;
    /**
     * This will typically be empty as all messages received from Ably are automatically decoded client-side using this value. However, if the message encoding cannot be processed, this attribute will contain the remaining transformations not applied to the data payload.
     */
    encoding?: string;
    /**
     * Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
     */
    extras?: Extras;
    /**
     * A Unique ID that can be specified by the publisher for [idempotent publishing](https://www.ably.io/documentation/rest/messages#idempotent).
     */
    id?: string;
    /**
     * The event name, if provided.
     */
    name?: string;
    /**
     * Timestamp when the message was received by the Ably, as milliseconds since the epoch.
     */
    timestamp?: number;
}
