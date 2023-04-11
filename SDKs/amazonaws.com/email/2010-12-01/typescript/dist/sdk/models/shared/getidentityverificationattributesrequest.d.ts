import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to return the Amazon SES verification status of a list of identities. For domain identities, this request also returns the verification token. For information about verifying identities with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer Guide</a>.
 */
export declare class GetIdentityVerificationAttributesRequest extends SpeakeasyBase {
    identities: string[];
}
