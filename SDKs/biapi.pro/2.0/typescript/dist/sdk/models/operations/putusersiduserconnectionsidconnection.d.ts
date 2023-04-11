import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdUserConnectionsIdConnectionRequest extends SpeakeasyBase {
    /**
     * do the connection synchronization in background
     */
    background?: boolean;
    expand?: string;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
    /**
     * if supplied, get transactions inserted since this date
     */
    lastUpdate?: Date;
    /**
     * Whether the connection synchronization is asked by the PSU or not (default is true)
     */
    psuRequested?: boolean;
}
export declare class PutUsersIdUserConnectionsIdConnectionResponse extends SpeakeasyBase {
    /**
     * Successful PUT on Connection resource
     */
    connection?: shared.Connection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
