import { SpeakeasyBase } from "../../../internal/utils";
import { AutoForward } from "./autoforward";
import { AutoReply } from "./autoreply";
/**
 * Success
 */
export declare class MailboxDetail extends SpeakeasyBase {
    /**
     * Used size in MB
     */
    actualSize?: number;
    autoForward?: AutoForward;
    autoReply?: AutoReply;
    /**
     * Login to connect with the mailbox
     */
    login?: string;
    /**
     * Maximum size in MB
     */
    maxSize?: number;
    name?: string;
}
