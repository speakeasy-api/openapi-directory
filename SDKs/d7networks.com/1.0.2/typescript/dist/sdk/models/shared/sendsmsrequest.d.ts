import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Send SMS Request
 */
export declare class SendSMSRequest extends SpeakeasyBase {
    /**
     * Message Content
     */
    content: string;
    /**
     * Sender ID / Number
     */
    from: string;
    /**
     * Destination Mobile Number
     */
    to: number;
}
