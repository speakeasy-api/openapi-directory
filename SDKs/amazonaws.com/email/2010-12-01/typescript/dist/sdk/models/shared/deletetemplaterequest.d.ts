import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
 */
export declare class DeleteTemplateRequest extends SpeakeasyBase {
    templateName: string;
}
