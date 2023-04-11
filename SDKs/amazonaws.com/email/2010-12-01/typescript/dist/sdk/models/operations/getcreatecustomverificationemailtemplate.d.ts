import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateCustomVerificationEmailTemplateActionEnum {
    CreateCustomVerificationEmailTemplate = "CreateCustomVerificationEmailTemplate"
}
export declare enum GETCreateCustomVerificationEmailTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETCreateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    action: GETCreateCustomVerificationEmailTemplateActionEnum;
    /**
     * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
     */
    failureRedirectionURL: string;
    /**
     * The email address that the custom verification email is sent from.
     */
    fromEmailAddress: string;
    /**
     * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
     */
    successRedirectionURL: string;
    /**
     * The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.
     */
    templateContent: string;
    /**
     * The name of the custom verification email template.
     */
    templateName: string;
    /**
     * The subject line of the custom verification email.
     */
    templateSubject: string;
    version: GETCreateCustomVerificationEmailTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
