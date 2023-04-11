import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The receipt for the message delivered to the recipient.
 */
export declare class Receipt extends SpeakeasyBase {
    deliveredTimestamp?: string;
    readTimestamp?: string;
    recipientParticipantId?: string;
}
