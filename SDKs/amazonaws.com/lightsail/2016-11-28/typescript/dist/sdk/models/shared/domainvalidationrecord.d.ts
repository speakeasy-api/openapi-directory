import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateDomainValidationStatusEnum } from "./certificatedomainvalidationstatusenum";
import { DnsRecordCreationState } from "./dnsrecordcreationstate";
import { ResourceRecord } from "./resourcerecord";
/**
 * Describes the domain name system (DNS) records that you must add to the DNS of your registered domain to validate ownership for an Amazon Lightsail SSL/TLS certificate.
 */
export declare class DomainValidationRecord extends SpeakeasyBase {
    dnsRecordCreationState?: DnsRecordCreationState;
    domainName?: string;
    resourceRecord?: ResourceRecord;
    validationStatus?: CertificateDomainValidationStatusEnum;
}
