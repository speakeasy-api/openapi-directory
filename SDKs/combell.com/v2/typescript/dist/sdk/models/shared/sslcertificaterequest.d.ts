import { SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";
import { SslCertificateVendorEnum } from "./sslcertificatevendorenum";
export declare class SslCertificateRequest extends SpeakeasyBase {
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
     * The validation level of the certificate:
     *
     * @remarks
     * <ul><li>Domain validated: Basic check of the identity of the owner of the domain name.</li><li>Organization validated: Company details are verified and integrated in the certificate.</li><li>Extended validated: A thorough verification of your domain name and company details.</li></ul>
     */
    validationLevel?: SslCertificateValidationLevelEnum;
    /**
     * The vendor of the certificate.
     */
    vendor?: SslCertificateVendorEnum;
}
