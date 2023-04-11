import { SpeakeasyBase } from "../../../internal/utils";
import { Template } from "./template";
/**
 * Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer Guide</a>.
 */
export declare class CreateTemplateRequest extends SpeakeasyBase {
    template: Template;
}
