import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a single AS2 connection in all of it variations
 */
export declare class As2Transport extends SpeakeasyBase {
    /**
     * A description of the content of the message. Usually, the same for all messages.
     */
    contentDescription?: string;
    /**
     * The MIME type of the message
     */
    mimeType?: string;
    /**
     * The AS2 id of the receiver. Usually, the same for all senders.
     */
    receiverId: string;
    /**
     * The URL to the AS2 end-point
     */
    receiverUrl: string;
    /**
     * The email address to contact someone about the message
     */
    senderEmail?: string;
    /**
     * The AS2 id of the sender. Usually, assigned by receiver to PRIME.
     */
    senderId: string;
    /**
     * The discriminator
     */
    type: string;
}
