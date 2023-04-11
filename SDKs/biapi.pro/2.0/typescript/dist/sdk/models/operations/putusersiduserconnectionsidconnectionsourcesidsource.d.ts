import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody extends SpeakeasyBase {
    /**
     * to enable or disable connector source
     */
    disabled?: boolean;
    /**
     * whether to force the synchronization on the source if it's in error
     */
    force?: boolean;
    /**
     * whether to force a synchronization on the source if it's not disabled
     */
    synchronize?: boolean;
}
export declare class PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequest extends SpeakeasyBase {
    requestBody?: PutUsersIdUserConnectionsIdConnectionSourcesIdSourceRequestBody;
    /**
     * do the synchronization in background (to use with the synchronize parameter)
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
export declare class PutUsersIdUserConnectionsIdConnectionSourcesIdSourceResponse extends SpeakeasyBase {
    /**
     * Successful PUT on ConnectionSource resource
     */
    connectionSource?: shared.ConnectionSource;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
