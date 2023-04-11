import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Secrets Manager secret that stores your stream credentials.
 */
export declare class MSKAccessCredentials extends SpeakeasyBase {
    clientCertificateTlsAuth?: string;
    saslScram512Auth?: string;
}
