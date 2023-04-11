import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)
 */
export declare class RemoteServerConfigurationFileEntity extends SpeakeasyBase {
    /**
     * Files Agent API Token
     */
    apiToken?: string;
    /**
     * agent config version
     */
    configVersion?: string;
    hostname?: string;
    /**
     * Agent ID
     */
    id?: number;
    permissionSet?: string;
    /**
     * Incoming port for files agent connections
     */
    port?: number;
    /**
     * private key
     */
    privateKey?: string;
    /**
     * public key
     */
    publicKey?: string;
    /**
     * Agent local root path
     */
    root?: string;
    serverHostKey?: string;
    /**
     * either running or shutdown
     */
    status?: string;
    subdomain?: string;
}
