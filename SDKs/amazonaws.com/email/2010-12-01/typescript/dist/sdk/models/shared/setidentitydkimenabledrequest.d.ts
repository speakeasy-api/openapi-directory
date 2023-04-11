import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to enable or disable Amazon SES Easy DKIM signing for an identity. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.
 */
export declare class SetIdentityDkimEnabledRequest extends SpeakeasyBase {
    dkimEnabled: boolean;
    identity: string;
}
