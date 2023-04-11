import { SpeakeasyBase } from "../../../internal/utils";
import { ContactDetail } from "./contactdetail";
import { DnssecKey } from "./dnsseckey";
import { Nameserver } from "./nameserver";
/**
 * The GetDomainDetail response includes the following elements.
 */
export declare class GetDomainDetailResponse extends SpeakeasyBase {
    abuseContactEmail?: string;
    abuseContactPhone?: string;
    adminContact?: ContactDetail;
    adminPrivacy?: boolean;
    autoRenew?: boolean;
    creationDate?: Date;
    dnsSec?: string;
    dnssecKeys?: DnssecKey[];
    domainName?: string;
    expirationDate?: Date;
    nameservers?: Nameserver[];
    registrantContact?: ContactDetail;
    registrantPrivacy?: boolean;
    registrarName?: string;
    registrarUrl?: string;
    registryDomainId?: string;
    reseller?: string;
    statusList?: string[];
    techContact?: ContactDetail;
    techPrivacy?: boolean;
    updatedDate?: Date;
    whoIsServer?: string;
}
