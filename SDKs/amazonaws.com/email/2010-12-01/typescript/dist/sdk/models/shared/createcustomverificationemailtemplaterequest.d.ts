import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to create a custom verification email template.
 */
export declare class CreateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    failureRedirectionURL: string;
    fromEmailAddress: string;
    successRedirectionURL: string;
    templateContent: string;
    templateName: string;
    templateSubject: string;
}
