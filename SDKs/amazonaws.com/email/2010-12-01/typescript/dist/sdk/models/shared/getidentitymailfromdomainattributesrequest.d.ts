import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to return the Amazon SES custom MAIL FROM attributes for a list of identities. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>.
 */
export declare class GetIdentityMailFromDomainAttributesRequest extends SpeakeasyBase {
    identities: string[];
}
