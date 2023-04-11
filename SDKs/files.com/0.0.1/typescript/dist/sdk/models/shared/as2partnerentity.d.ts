import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Remote server certificate security setting
 */
export declare enum As2PartnerEntityServerCertificateEnum {
    RequireMatch = "require_match",
    AllowAny = "allow_any"
}
/**
 * Create As2 Partner
 */
export declare class As2PartnerEntity extends SpeakeasyBase {
    /**
     * Id of the AS2 Station associated with this partner.
     */
    as2StationId?: number;
    /**
     * Serial of public certificate used for message security in hex format.
     */
    hexPublicCertificateSerial?: string;
    /**
     * Id of the AS2 Partner.
     */
    id?: number;
    /**
     * The partner's formal AS2 name.
     */
    name?: string;
    /**
     * Issuer of public certificate used for message security.
     */
    publicCertificateIssuer?: string;
    /**
     * MD5 hash of public certificate used for message security.
     */
    publicCertificateMd5?: string;
    /**
     * Not after value of public certificate used for message security.
     */
    publicCertificateNotAfter?: string;
    /**
     * Not before value of public certificate used for message security.
     */
    publicCertificateNotBefore?: string;
    /**
     * Serial of public certificate used for message security.
     */
    publicCertificateSerial?: string;
    /**
     * Subject of public certificate used for message security.
     */
    publicCertificateSubject?: string;
    /**
     * Remote server certificate security setting
     */
    serverCertificate?: As2PartnerEntityServerCertificateEnum;
    /**
     * Public URI for sending AS2 message to.
     */
    uri?: string;
}
