import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Set to true if recipient has accessed the share. Note this is set to true when the recipient clicks the link to access the share; not when they download a file.
 */
export declare enum ShareRecipientReceivedEnum {
    True = "true",
    False = "false"
}
/**
 * Set to true if invite email was sent; false otherwise.
 */
export declare enum ShareRecipientSentEnum {
    True = "true",
    False = "false"
}
/**
 * Type of the recipient.
 */
export declare enum ShareRecipientTypeEnum {
    Owner = "owner",
    Direct = "direct"
}
export declare class ShareRecipient extends SpeakeasyBase {
    /**
     * Timestamp of adding recipient to the share.
     */
    created?: Date;
    /**
     * Recipient email address.
     */
    email?: string;
    /**
     * Share hash.
     */
    hash?: string;
    /**
     * ID of the recipient.
     */
    id?: number;
    /**
     * Set to true if recipient has accessed the share. Note this is set to true when the recipient clicks the link to access the share; not when they download a file.
     */
    received?: ShareRecipientReceivedEnum;
    /**
     * Set to true if invite email was sent; false otherwise.
     */
    sent?: ShareRecipientSentEnum;
    /**
     * ID of the share that the recipoient belongs to.
     */
    shareId?: string;
    /**
     * Type of the recipient.
     */
    type?: ShareRecipientTypeEnum;
}
