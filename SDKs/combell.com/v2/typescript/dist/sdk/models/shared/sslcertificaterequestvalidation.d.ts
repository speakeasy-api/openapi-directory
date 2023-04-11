import { SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateRequestValidationTypeEnum } from "./sslcertificaterequestvalidationtypeenum";
export declare class SslCertificateRequestValidation extends SpeakeasyBase {
    /**
     * Returns true if no user interaction is required and the domain validation will be verified automatic.
     */
    autoValidated?: boolean;
    /**
     * The value-part (Point To) of the CNAME-record that must be created as part of domain verification.
     */
    cnameValidationContent?: string;
    /**
     * The host-part (Name) of the CNAME-record that must be created as part of domain verification.
     */
    cnameValidationName?: string;
    /**
     * A domain name of the certificate.
     */
    dnsName?: string;
    /**
     * An array of eligible domain verification email addresses.
     */
    emailAddresses?: string[];
    /**
     * The content your verification file must contain, consisting of three lines of plain-text.
     */
    fileValidationContent?: string[];
    /**
     * The URL (http format) your verification file must be uploaded to as part of domain verification.
     */
    fileValidationUrlHttp?: string;
    /**
     * The URL (https format) your verification file must be uploaded to as part of domain verification.
     */
    fileValidationUrlHttps?: string;
    /**
     * The domain validation verification type.
     */
    type?: SslCertificateRequestValidationTypeEnum;
}
