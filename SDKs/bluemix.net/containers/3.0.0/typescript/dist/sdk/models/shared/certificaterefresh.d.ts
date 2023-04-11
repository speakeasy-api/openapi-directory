import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Ok. A list of updated certificates is returned.
 */
export declare class CertificateRefresh extends SpeakeasyBase {
    /**
     * Certificate Authority (CA) certificate including the CA public key.
     */
    caCert?: string;
    /**
     * Full URL to the IBM Bluemix registry.
     */
    regHost?: string;
    /**
     * Server certificate including the server's public key.
     */
    serverCert?: string;
    /**
     * User certificate including the user's public key.
     */
    userCert?: string;
    /**
     * User's private key.
     */
    userKey?: string;
}
