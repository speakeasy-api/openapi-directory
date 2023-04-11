import { SpeakeasyBase } from "../../../internal/utils";
import { Receipt } from "./receipt";
/**
 * Contains metadata related to a message.
 */
export declare class MessageMetadata extends SpeakeasyBase {
    messageId?: string;
    receipts?: Receipt[];
}
