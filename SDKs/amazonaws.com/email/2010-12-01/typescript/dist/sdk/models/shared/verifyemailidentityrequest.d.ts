import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer Guide</a>.
 */
export declare class VerifyEmailIdentityRequest extends SpeakeasyBase {
    emailAddress: string;
}
