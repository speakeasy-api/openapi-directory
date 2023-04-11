import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Queue Message
 */
export declare class QueueMessage extends SpeakeasyBase {
    /**
     * Content-type of data associated with QueueMessage.
     */
    contentType?: string;
    /**
     * Date that message was received by system.
     */
    createDate?: number;
    /**
     * Embedded JSON to be sent with Queue Message.
     */
    data?: string;
    /**
     * URL of data associated with Queue Message (if not embedded JSON)
     */
    href?: string;
    /**
     * UUID of Message Data associated with this Queue Message
     */
    messageId?: string;
    /**
     * UUID of Queue Message in local region.
     */
    queueMessageId?: string;
    /**
     * Name of Queue for message.
     */
    queueName: string;
    /**
     * Regions to which message will be sent
     */
    receivingRegion?: string;
    /**
     * Region from which was sent
     */
    sendingRegion?: string;
}
