import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
/**
 * Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.
 */
export declare class SMSMessage extends SpeakeasyBase {
    body?: string;
    entityId?: string;
    keyword?: string;
    mediaUrl?: string;
    messageType?: MessageTypeEnum;
    originationNumber?: string;
    senderId?: string;
    substitutions?: Record<string, string[]>;
    templateId?: string;
}
