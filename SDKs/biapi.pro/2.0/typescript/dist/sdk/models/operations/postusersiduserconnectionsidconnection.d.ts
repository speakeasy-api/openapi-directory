import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUserConnectionsIdConnectionRequestBody extends SpeakeasyBase {
    /**
     * Set if the connection synchronization is active
     */
    active?: boolean;
    /**
     * Try to update a connection with the decoupled error
     */
    decoupled?: boolean;
    /**
     * Set expiration of the connection to this date
     */
    expire?: Date;
    /**
     * Set login to this new login
     */
    login?: string;
    /**
     * Set password to this new password
     */
    password?: string;
}
export declare class PostUsersIdUserConnectionsIdConnectionRequest extends SpeakeasyBase {
    requestBody?: PostUsersIdUserConnectionsIdConnectionRequestBody;
    /**
     * Do the connection update/synchronization in background
     */
    background?: boolean;
    expand?: string;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
    /**
     * Whether the connection synchronization is asked by the PSU or not (default is true)
     */
    psuRequested?: boolean;
    /**
     * Refresh the PSU's SCA for openapi source
     */
    refreshPsd2Auth?: boolean;
}
export declare class PostUsersIdUserConnectionsIdConnectionResponse extends SpeakeasyBase {
    /**
     * Successful POST on Connection resource
     */
    connection?: shared.Connection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
