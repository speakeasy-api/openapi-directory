import { SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateRequestValidation } from "./sslcertificaterequestvalidation";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
import { SslCertificateVendorEnum } from "./sslcertificatevendorenum";
import { SslSubjectAltName } from "./sslsubjectaltname";
/**
 * Success
 */
export declare class SslCertificateRequestDetail extends SpeakeasyBase {
    /**
     * The type of the certificate:
     *
     * @remarks
     * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
     */
    certificateType?: SslCertificateTypeEnum;
    /**
     * The common name of the certificate request.
     */
    commonName?: string;
    /**
     * The id of the certificate request.
     */
    id?: number;
    /**
     * The order code of the certificate request.
     */
    orderCode?: string;
    /**
     * The list of all supported domains in the certificate.
     */
    subjectAltNames?: SslSubjectAltName[];
    /**
     * The validation level of the certificate:
     *
     * @remarks
     * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
     */
    validationLevel?: SslCertificateValidationLevelEnum;
    /**
     * The list of dns names to be validated with the information related to domain verification.
     */
    validations?: SslCertificateRequestValidation[];
    /**
     * The vendor of the certificate.
     */
    vendor?: SslCertificateVendorEnum;
}
