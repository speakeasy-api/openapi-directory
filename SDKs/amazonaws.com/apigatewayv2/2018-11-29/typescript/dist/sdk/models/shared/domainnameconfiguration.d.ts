import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the domain name migration. The valid values are AVAILABLE, UPDATING, PENDING_CERTIFICATE_REIMPORT, and PENDING_OWNERSHIP_VERIFICATION. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.
 */
export declare enum DomainNameConfigurationDomainNameStatusEnum {
    Available = "AVAILABLE",
    Updating = "UPDATING",
    PendingCertificateReimport = "PENDING_CERTIFICATE_REIMPORT",
    PendingOwnershipVerification = "PENDING_OWNERSHIP_VERIFICATION"
}
/**
 * The endpoint type.
 */
export declare enum DomainNameConfigurationEndpointTypeEnum {
    Regional = "REGIONAL",
    Edge = "EDGE"
}
/**
 * The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.
 */
export declare enum DomainNameConfigurationSecurityPolicyEnum {
    Tls10 = "TLS_1_0",
    Tls12 = "TLS_1_2"
}
/**
 * The domain name configuration.
 */
export declare class DomainNameConfiguration extends SpeakeasyBase {
    apiGatewayDomainName?: string;
    certificateArn?: string;
    certificateName?: string;
    certificateUploadDate?: Date;
    domainNameStatus?: DomainNameConfigurationDomainNameStatusEnum;
    domainNameStatusMessage?: string;
    endpointType?: DomainNameConfigurationEndpointTypeEnum;
    hostedZoneId?: string;
    ownershipVerificationCertificateArn?: string;
    securityPolicy?: DomainNameConfigurationSecurityPolicyEnum;
}
