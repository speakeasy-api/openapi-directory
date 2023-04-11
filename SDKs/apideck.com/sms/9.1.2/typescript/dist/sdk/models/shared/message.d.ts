import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
/**
 * Set to sms for SMS messages and mms for MMS messages.
 */
export declare enum MessageMessageTypeEnum {
    Sms = "sms",
    Mms = "mms"
}
export declare class MessageInput extends SpeakeasyBase {
    /**
     * The message text.
     */
    body: string;
    /**
     * The phone number that initiated the message.
     */
    from: string;
    /**
     * The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID.
     */
    messagingServiceId?: string;
    /**
     * A client reference.
     */
    reference?: string;
    /**
     * The scheduled date and time of the message.
     */
    scheduledAt?: Date;
    subject?: string;
    /**
     * The phone number that received the message.
     */
    to: string;
    /**
     * Set to sms for SMS messages and mms for MMS messages.
     */
    type?: MessageMessageTypeEnum;
    /**
     * Define a webhook to receive delivery notifications.
     */
    webhookUrl?: string;
}
/**
 * The direction of the message.
 */
export declare enum MessageDirectionEnum {
    Inbound = "inbound",
    OutboundApi = "outbound-api",
    OutboundCall = "outbound-call",
    OutboundReply = "outbound-reply",
    Unknown = "unknown"
}
/**
 * The error returned if your message status is failed or undelivered.
 */
export declare class MessageError extends SpeakeasyBase {
    /**
     * The error_code provides more information about the failure. If the message was successful, this value is null
     */
    code?: string;
    message?: string;
}
/**
 * Price of the message.
 */
export declare class MessagePrice extends SpeakeasyBase {
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    perUnit?: string;
    totalAmount?: string;
}
/**
 * Status of the delivery of the message.
 */
export declare enum MessageStatusEnum {
    Accepted = "accepted",
    Scheduled = "scheduled",
    Canceled = "canceled",
    Queued = "queued",
    Sending = "sending",
    Sent = "sent",
    Failed = "failed",
    Delivered = "delivered",
    Undelivered = "undelivered",
    Receiving = "receiving",
    Received = "received",
    Read = "read"
}
export declare class Message extends SpeakeasyBase {
    /**
     * The message text.
     */
    body: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * The direction of the message.
     */
    direction?: MessageDirectionEnum;
    /**
     * The error returned if your message status is failed or undelivered.
     */
    error?: MessageError;
    /**
     * The phone number that initiated the message.
     */
    from: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID.
     */
    messagingServiceId?: string;
    /**
     * The number of media files associated with the message.
     */
    numberOfMediaFiles?: number;
    /**
     * The number of units that make up the complete message. Messages can be split up due to the constraints of the message size.
     */
    numberOfUnits?: number;
    /**
     * Price of the message.
     */
    price?: MessagePrice;
    /**
     * A client reference.
     */
    reference?: string;
    /**
     * The scheduled date and time of the message.
     */
    scheduledAt?: Date;
    /**
     * The date and time that the message was sent
     */
    sentAt?: Date;
    /**
     * Status of the delivery of the message.
     */
    status?: MessageStatusEnum;
    subject?: string;
    /**
     * The phone number that received the message.
     */
    to: string;
    /**
     * Set to sms for SMS messages and mms for MMS messages.
     */
    type?: MessageMessageTypeEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
    /**
     * Define a webhook to receive delivery notifications.
     */
    webhookUrl?: string;
}
