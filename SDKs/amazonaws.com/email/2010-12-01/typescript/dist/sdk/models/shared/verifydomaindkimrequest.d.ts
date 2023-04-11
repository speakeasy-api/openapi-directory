import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to generate the CNAME records needed to set up Easy DKIM with Amazon SES. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.
 */
export declare class VerifyDomainDkimRequest extends SpeakeasyBase {
    domain: string;
}
