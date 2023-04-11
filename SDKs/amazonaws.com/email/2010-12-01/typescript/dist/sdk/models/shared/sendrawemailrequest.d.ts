import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTag } from "./messagetag";
import { RawMessage } from "./rawmessage";
/**
 * Represents a request to send a single raw email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>.
 */
export declare class SendRawEmailRequest extends SpeakeasyBase {
    configurationSetName?: string;
    destinations?: string[];
    fromArn?: string;
    rawMessage: RawMessage;
    returnPathArn?: string;
    source?: string;
    sourceArn?: string;
    tags?: MessageTag[];
}
