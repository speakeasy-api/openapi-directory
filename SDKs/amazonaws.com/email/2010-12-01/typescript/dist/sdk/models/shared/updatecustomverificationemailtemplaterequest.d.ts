import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to update an existing custom verification email template.
 */
export declare class UpdateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    failureRedirectionURL?: string;
    fromEmailAddress?: string;
    successRedirectionURL?: string;
    templateContent?: string;
    templateName: string;
    templateSubject?: string;
}
