import { SpeakeasyBase } from "../../../internal/utils";
import { Alias } from "./alias";
import { AntiSpam } from "./antispam";
import { CatchAll } from "./catchall";
import { MailZoneAccount } from "./mailzoneaccount";
import { SmtpDomain } from "./smtpdomain";
/**
 * Success
 */
export declare class MailZone extends SpeakeasyBase {
    /**
     * List of aliases on the mail zone<br />
     *
     * @remarks
     * An alias is an e-mail address (alias) that automatically forwards received e-mails to another e-mail address (destination).
     */
    aliases?: Alias[];
    antiSpam?: AntiSpam;
    /**
     * List of mail zone accounts with their mailbox size.
     */
    availableAccounts?: MailZoneAccount[];
    catchAll?: CatchAll;
    /**
     * Indicates whether the mail zone is enabled.
     */
    enabled?: boolean;
    name?: string;
    /**
     * List of extra smtp domains on the mail zone<br />
     *
     * @remarks
     * SMTP domain names allow you to link multiple domain names to a single e-mail address.<br />
     * E-mails sent to an SMTP domain will be caught by the respective e-mail address on the main domain name.
     */
    smtpDomains?: SmtpDomain[];
}
