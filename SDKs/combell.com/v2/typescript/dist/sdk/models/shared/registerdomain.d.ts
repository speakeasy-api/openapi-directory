import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrantInput } from "./registrantinput";
export declare class RegisterDomain extends SpeakeasyBase {
    /**
     * The domain name to register.<br />
     *
     * @remarks
     * Only pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>
     */
    domainName?: string;
    /**
     * List of name servers. When empty, the registation will be done on default name servers.
     */
    nameServers?: string[];
    registrant?: RegistrantInput;
}
