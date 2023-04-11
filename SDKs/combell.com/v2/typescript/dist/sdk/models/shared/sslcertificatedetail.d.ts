import { SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
import { SslSubjectAltName } from "./sslsubjectaltname";
/**
 * Success
 */
export declare class SslCertificateDetail extends SpeakeasyBase {
    /**
     * The common name (e.g. domain.com) of the certificate.
     */
    commonName?: string;
    /**
     * The exact time the certificate will expire.
     */
    expiresAfter?: Date;
    /**
     * The SHA-1 fingerprint of the certificate.<br />
     *
     * @remarks
     * The fingerprint is a cryptographic hash which is a short unique identification of the certificate.
     */
    sha1Fingerprint?: string;
    /**
     * The list of all supported dns names in the certificate.
     */
    subjectAltNames?: SslSubjectAltName[];
    /**
     * The type of the certificate:
     *
     * @remarks
     * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
     */
    type?: SslCertificateTypeEnum;
    /**
     * The validation level of the certificate:
     *
     * @remarks
     * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
     */
    validationLevel?: SslCertificateValidationLevelEnum;
}
