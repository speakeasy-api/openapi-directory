import { SpeakeasyBase } from "../../../internal/utils";
import { JourneySMSMessage } from "./journeysmsmessage";
/**
 * Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.
 */
export declare class SMSMessageActivity extends SpeakeasyBase {
    messageConfig?: JourneySMSMessage;
    nextActivity?: string;
    templateName?: string;
    templateVersion?: string;
}
