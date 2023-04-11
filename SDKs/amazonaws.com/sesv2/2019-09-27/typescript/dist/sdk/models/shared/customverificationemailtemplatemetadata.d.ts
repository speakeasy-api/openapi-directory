import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a custom verification email template.
 */
export declare class CustomVerificationEmailTemplateMetadata extends SpeakeasyBase {
    failureRedirectionURL?: string;
    fromEmailAddress?: string;
    successRedirectionURL?: string;
    templateName?: string;
    templateSubject?: string;
}
