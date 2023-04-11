import { SpeakeasyBase } from "../../../internal/utils";
import { BehaviorOnMXFailureEnum } from "./behavioronmxfailureenum";
/**
 * Represents a request to enable or disable the Amazon SES custom MAIL FROM domain setup for a verified identity. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>.
 */
export declare class SetIdentityMailFromDomainRequest extends SpeakeasyBase {
    behaviorOnMXFailure?: BehaviorOnMXFailureEnum;
    identity: string;
    mailFromDomain?: string;
}
