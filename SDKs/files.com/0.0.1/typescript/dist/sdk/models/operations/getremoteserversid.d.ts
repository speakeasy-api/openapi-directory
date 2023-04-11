import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRemoteServersIdRequest extends SpeakeasyBase {
    /**
     * Remote Server ID.
     */
    id: number;
}
export declare class GetRemoteServersIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The RemoteServers object.
     */
    remoteServerEntity?: shared.RemoteServerEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
