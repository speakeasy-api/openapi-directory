import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRemoteServersIdConfigurationFileRequest extends SpeakeasyBase {
    /**
     * Remote Server ID.
     */
    id: number;
}
export declare class GetRemoteServersIdConfigurationFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The RemoteServers object.
     */
    remoteServerConfigurationFileEntity?: shared.RemoteServerConfigurationFileEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
