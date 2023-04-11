import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to send a custom verification email to a specified recipient.
 */
export declare class SendCustomVerificationEmailRequest extends SpeakeasyBase {
    configurationSetName?: string;
    emailAddress: string;
    templateName: string;
}
