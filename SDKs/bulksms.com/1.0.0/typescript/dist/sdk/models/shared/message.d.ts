import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the content.  See the `encoding` field for more information.
 */
export declare enum MessageEncodingEnum {
    Text = "TEXT",
    Unicode = "UNICODE",
    Binary = "BINARY"
}
/**
 * Has a value only if the `type` is FAILED.
 *
 * @remarks
 *
 * EXPIRED  Delivery failed because message expired before delivery was possible.
 *
 * HANDSET_ERROR  Delivery failed because of a problem related to the phone (e.g. message storage area full).
 *
 * BLOCKED  Your account has been blocked from sending to this phone (e.g. recipient replied STOP to block communication).
 *
 * NOT_SENT  Message delivery was not attempted (e.g. because we were not able to find a route for the supplied phone number).
 *
 */
export declare enum MessageStatusSubtypeEnum {
    Expired = "EXPIRED",
    HandsetError = "HANDSET_ERROR",
    Blocked = "BLOCKED",
    NotSent = "NOT_SENT"
}
/**
 *
 * @remarks
 * ACCEPTED  Message accepted for delivery. Only returned for initial message submissions.
 *
 * SCHEDULED  Message accepted for delivery at a later date. Only returned for initial message  submissions.
 *
 * SENT  Message has been relayed away from our systems.
 *
 * DELIVERED  Successfully delivered to phone.
 *
 * UNKNOWN  Message is in an unknown state.
 *
 * FAILED  Delivery failed.
 *
 */
export declare enum MessageStatusTypeEnum {
    Accepted = "ACCEPTED",
    Scheduled = "SCHEDULED",
    Sent = "SENT",
    Delivered = "DELIVERED",
    Unknown = "UNKNOWN",
    Failed = "FAILED"
}
/**
 * The status of the message
 */
export declare class MessageStatus extends SpeakeasyBase {
    /**
     * A concatenated value A.B where A is the `status.type` and B is the `status.subtype`.
     *
     * @remarks
     * It there is no value for `subtype` then B takes string value `"null"` (e.g. `"SENT.null"`).
     *
     */
    id: string;
    /**
     * Has a value only if the `type` is FAILED.
     *
     * @remarks
     *
     * EXPIRED  Delivery failed because message expired before delivery was possible.
     *
     * HANDSET_ERROR  Delivery failed because of a problem related to the phone (e.g. message storage area full).
     *
     * BLOCKED  Your account has been blocked from sending to this phone (e.g. recipient replied STOP to block communication).
     *
     * NOT_SENT  Message delivery was not attempted (e.g. because we were not able to find a route for the supplied phone number).
     *
     */
    subtype?: MessageStatusSubtypeEnum;
    /**
     *
     * @remarks
     * ACCEPTED  Message accepted for delivery. Only returned for initial message submissions.
     *
     * SCHEDULED  Message accepted for delivery at a later date. Only returned for initial message  submissions.
     *
     * SENT  Message has been relayed away from our systems.
     *
     * DELIVERED  Successfully delivered to phone.
     *
     * UNKNOWN  Message is in an unknown state.
     *
     * FAILED  Delivery failed.
     *
     */
    type: MessageStatusTypeEnum;
}
/**
 * Identifies the submission.
 *
 * @remarks
 *
 */
export declare class MessageSubmission extends SpeakeasyBase {
    /**
     * The date and time the submission was processed. If the `type` is RECEIVED, this field reflects the date and time the received message was processed.
     */
    date: Date;
    /**
     * A unique identity shared by all messages that were created from the same submission. This field should be ignored if the `type` is not SENT.
     */
    id: string;
}
/**
 * The message direction
 */
export declare enum MessageTypeEnum {
    Sent = "SENT",
    Received = "RECEIVED"
}
/**
 * The message detail
 */
export declare class Message extends SpeakeasyBase {
    /**
     * The content of the message
     */
    body: any;
    /**
     * The cost of the message (in credits).   Note that this field does not have a value in the submission response.
     */
    creditCost?: number;
    /**
     * The type of the content.  See the `encoding` field for more information.
     */
    encoding?: MessageEncodingEnum;
    /**
     * The address part of the sender id
     */
    from?: string;
    /**
     * A unique identifier that is assigned when the message is created.
     */
    id: string;
    /**
     * See the `messageClass` field for more information.
     */
    messageClass?: number;
    /**
     * The number of parts.  If this is a concatenated message, the number of parts will be more than 1.  Note that this field does not have a value in the submission response.
     */
    numberOfParts?: number;
    /**
     * See the `protocolId` field for more information.
     */
    protocolId?: number;
    /**
     * This field has a value only if the type is RECEIVED.
     *
     * @remarks
     * With SMS messages, it is not possible to link a reply directly with a specific sent message.  However, if you specified `REPLIABLE` in the `from` property, BulkSMS will link any reply to the most recent message sent to a given phone number.
     *
     * The `relatedSentMessageId` property keeps the information about this link.
     *
     * You can use this property to derive an implicit conversation from a set of messages.
     *   - If a received reply message has a `relatedSentMessageId`, you can use it to retrieve the last message that was sent before the reply was received.
     *   - If you have the `id` of the sent message and you want all the received messages that relate to it, you can use the List Related Messages Operation.
     *
     */
    relatedSentMessageId?: string;
    /**
     * The status of the message
     */
    status: MessageStatus;
    /**
     * Identifies the submission.
     *
     * @remarks
     *
     */
    submission?: MessageSubmission;
    /**
     * The phone number of the recipient
     */
    to: string;
    /**
     * The message direction
     */
    type: MessageTypeEnum;
    /**
     * This is the value you supplied in the `userSuppliedId` field.
     *
     * @remarks
     * Has a value only if the `type` is SENT.
     *
     */
    userSuppliedId?: string;
}
