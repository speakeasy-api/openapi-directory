import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The summary of the certificate.
 */
export declare class CertificateSummary extends SpeakeasyBase {
    issuer?: string;
    notValidAfter?: Date;
    notValidBefore?: Date;
    subject?: string;
    thumbprint?: string;
}
