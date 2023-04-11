import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrantInput } from "./registrantinput";
export declare class TransferDomain extends SpeakeasyBase {
    /**
     * Authorization code which allows the transfer to execute.
     */
    authCode?: string;
    /**
     * The domain name to transfer.<br />
     *
     * @remarks
     * Only pass the domain part and the tld.<br /><i>For abc.com, abc is the domain part, com is the tld.</i>
     */
    domainName?: string;
    /**
     * List of name servers. When empty, the transfer will be done on default name servers.
     */
    nameServers?: string[];
    registrant?: RegistrantInput;
}
