import { SpeakeasyBase } from "../../../internal/utils";
import { MailDomainSummary } from "./maildomainsummary";
/**
 * Success
 */
export declare class ListMailDomainsResponse extends SpeakeasyBase {
    mailDomains?: MailDomainSummary[];
    nextToken?: string;
}
