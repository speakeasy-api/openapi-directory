import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Represents a request to list the existing custom verification email templates for your account.</p> <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer Guide</i>.</p>
 */
export declare class ListCustomVerificationEmailTemplatesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
