import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option.
 */
export declare class UpdateAvailabilityOptionsRequest extends SpeakeasyBase {
    /**
     * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
     */
    domainName: string;
    multiAZ: boolean;
}
