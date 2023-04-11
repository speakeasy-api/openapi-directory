import { SpeakeasyBase } from "../../../internal/utils";
import { DnsRecord } from "./dnsrecord";
import { DnsRecordVerificationStatusEnum } from "./dnsrecordverificationstatusenum";
/**
 * Success
 */
export declare class GetMailDomainResponse extends SpeakeasyBase {
    dkimVerificationStatus?: DnsRecordVerificationStatusEnum;
    isDefault?: boolean;
    isTestDomain?: boolean;
    ownershipVerificationStatus?: DnsRecordVerificationStatusEnum;
    records?: DnsRecord[];
}
