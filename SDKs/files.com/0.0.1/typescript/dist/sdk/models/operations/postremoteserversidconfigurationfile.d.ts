import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRemoteServersIdConfigurationFileRequestBody extends SpeakeasyBase {
    /**
     * Files Agent API Token
     */
    apiToken?: string;
    /**
     * agent config version
     */
    configVersion?: string;
    hostname?: string;
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
export declare class PostRemoteServersIdConfigurationFileRequest extends SpeakeasyBase {
    requestBody?: PostRemoteServersIdConfigurationFileRequestBody;
    /**
     * Remote Server ID.
     */
    id: number;
}
export declare class PostRemoteServersIdConfigurationFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The RemoteServers object.
     */
    remoteServerConfigurationFileEntity?: shared.RemoteServerConfigurationFileEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
