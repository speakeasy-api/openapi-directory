import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShareMessage extends SpeakeasyBase {
    /**
     * Share invitation message text.
     */
    body?: string;
    /**
     * Timestamp of message creation.
     */
    created?: Date;
    /**
     * Message id.
     */
    id?: number;
    /**
     * Timestamp of message modification.
     */
    modified?: Date;
    /**
     * ID of associated share
     */
    shareId?: number;
    /**
     * Share invitation message subject.
     */
    subject?: string;
    /**
     * User ID who generated share invite
     */
    userId?: number;
}
