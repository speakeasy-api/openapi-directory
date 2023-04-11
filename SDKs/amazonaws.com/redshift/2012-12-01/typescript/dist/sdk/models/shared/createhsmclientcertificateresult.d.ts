import { SpeakeasyBase } from "../../../internal/utils";
import { HsmClientCertificate } from "./hsmclientcertificate";
/**
 * Success
 */
export declare class CreateHsmClientCertificateResult extends SpeakeasyBase {
    /**
     * Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
     */
    hsmClientCertificate?: HsmClientCertificate;
}
