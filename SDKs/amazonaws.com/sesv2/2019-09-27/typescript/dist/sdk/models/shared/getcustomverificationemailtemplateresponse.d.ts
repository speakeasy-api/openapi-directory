import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The following elements are returned by the service.
 */
export declare class GetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    failureRedirectionURL?: string;
    fromEmailAddress?: string;
    successRedirectionURL?: string;
    templateContent?: string;
    templateName?: string;
    templateSubject?: string;
}
