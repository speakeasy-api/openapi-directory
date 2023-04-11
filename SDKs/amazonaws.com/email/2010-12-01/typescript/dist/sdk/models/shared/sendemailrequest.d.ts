import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { Message } from "./message";
import { MessageTag } from "./messagetag";
/**
 * Represents a request to send a single formatted email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer Guide</a>.
 */
export declare class SendEmailRequest extends SpeakeasyBase {
    configurationSetName?: string;
    destination: Destination;
    message: Message;
    replyToAddresses?: string[];
    returnPath?: string;
    returnPathArn?: string;
    source: string;
    sourceArn?: string;
    tags?: MessageTag[];
}
