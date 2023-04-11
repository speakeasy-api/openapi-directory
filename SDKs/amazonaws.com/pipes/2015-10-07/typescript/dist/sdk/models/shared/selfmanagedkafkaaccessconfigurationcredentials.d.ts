import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Secrets Manager secret that stores your stream credentials.
 */
export declare class SelfManagedKafkaAccessConfigurationCredentials extends SpeakeasyBase {
    basicAuth?: string;
    clientCertificateTlsAuth?: string;
    saslScram256Auth?: string;
    saslScram512Auth?: string;
}
