import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallDomainListStatusEnum } from "./firewalldomainliststatusenum";
/**
 * Success
 */
export declare class ImportFirewallDomainsResponse extends SpeakeasyBase {
    id?: string;
    name?: string;
    status?: FirewallDomainListStatusEnum;
    statusMessage?: string;
}
