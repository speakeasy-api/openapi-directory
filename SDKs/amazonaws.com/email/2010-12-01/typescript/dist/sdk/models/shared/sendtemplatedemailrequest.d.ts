import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { MessageTag } from "./messagetag";
/**
 * Represents a request to send a templated email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
 */
export declare class SendTemplatedEmailRequest extends SpeakeasyBase {
    configurationSetName?: string;
    destination: Destination;
    replyToAddresses?: string[];
    returnPath?: string;
    returnPathArn?: string;
    source: string;
    sourceArn?: string;
    tags?: MessageTag[];
    template: string;
    templateArn?: string;
    templateData: string;
}
