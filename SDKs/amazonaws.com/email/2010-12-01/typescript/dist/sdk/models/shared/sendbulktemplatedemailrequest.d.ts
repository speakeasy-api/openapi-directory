import { SpeakeasyBase } from "../../../internal/utils";
import { BulkEmailDestination } from "./bulkemaildestination";
import { MessageTag } from "./messagetag";
/**
 * Represents a request to send a templated email to multiple destinations using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
 */
export declare class SendBulkTemplatedEmailRequest extends SpeakeasyBase {
    configurationSetName?: string;
    defaultTags?: MessageTag[];
    defaultTemplateData?: string;
    destinations: BulkEmailDestination[];
    replyToAddresses?: string[];
    returnPath?: string;
    returnPathArn?: string;
    source: string;
    sourceArn?: string;
    template: string;
    templateArn?: string;
}
