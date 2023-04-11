import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody extends SpeakeasyBase {
    /**
     * to enable or disable connector source
     */
    disabled?: boolean;
    /**
     * whether to force a synchronization on the source if it's not disabled
     */
    synchronize?: boolean;
}
export declare class PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest extends SpeakeasyBase {
    requestBody?: PostUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody;
    /**
     * do the synchronization in background (to use with the sysynchronizenc parameter)
     */
    background?: boolean;
    expand?: string;
    idConnection: number;
    idSource: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PostUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse extends SpeakeasyBase {
    /**
     * Successful POST on ConnectionSource resource
     */
    connectionSource?: shared.ConnectionSource;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
