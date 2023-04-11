import { SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerTlsCertificateDnsRecordCreationState } from "./loadbalancertlscertificatednsrecordcreationstate";
import { LoadBalancerTlsCertificateDomainStatusEnum } from "./loadbalancertlscertificatedomainstatusenum";
/**
 * Describes the validation record of each domain name in the SSL/TLS certificate.
 */
export declare class LoadBalancerTlsCertificateDomainValidationRecord extends SpeakeasyBase {
    dnsRecordCreationState?: LoadBalancerTlsCertificateDnsRecordCreationState;
    domainName?: string;
    name?: string;
    type?: string;
    validationStatus?: LoadBalancerTlsCertificateDomainStatusEnum;
    value?: string;
}
