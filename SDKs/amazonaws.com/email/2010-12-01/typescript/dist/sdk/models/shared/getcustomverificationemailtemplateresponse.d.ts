import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The content of the custom verification email template.
**/
export declare class GetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    failureRedirectionURL?: string;
    fromEmailAddress?: string;
    successRedirectionURL?: string;
    templateContent?: string;
    templateName?: string;
    templateSubject?: string;
}
