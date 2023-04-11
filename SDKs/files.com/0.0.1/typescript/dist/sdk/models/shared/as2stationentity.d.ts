import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Create As2 Station
 */
export declare class As2StationEntity extends SpeakeasyBase {
    /**
     * The station's AS2 domain name.
     */
    domain?: string;
    /**
     * Serial of public certificate used for message security in hex format.
     */
    hexPublicCertificateSerial?: string;
    /**
     * Id of the AS2 Station.
     */
    id?: number;
    /**
     * The station's formal AS2 name.
     */
    name?: string;
    /**
     * MD5 hash of private key used for message security.
     */
    privateKeyMd5?: string;
    /**
     * MD5 hash of private key password used for message security.
     */
    privateKeyPasswordMd5?: string;
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
     * Public URI for sending AS2 message to.
     */
    uri?: string;
}
