import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to enable or disable whether Amazon SES forwards you bounce and complaint notifications through email. For information about email feedback forwarding, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-email.html">Amazon SES Developer Guide</a>.
 */
export declare class SetIdentityFeedbackForwardingEnabledRequest extends SpeakeasyBase {
    forwardingEnabled: boolean;
    identity: string;
}
