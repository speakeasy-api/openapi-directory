import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A record of a presented X509 credential to <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a>.
 */
export declare class CredentialSummary extends SpeakeasyBase {
    enabled?: boolean;
    failed?: boolean;
    issuer?: string;
    seenAt?: Date;
    serialNumber?: string;
    x509CertificateData?: string;
}
