import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * connections
 */
export declare class GetUsersIdUserConnections200ApplicationJSON extends SpeakeasyBase {
    connections: shared.Connection[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connections
     */
    getUsersIdUserConnections200ApplicationJSONObject?: GetUsersIdUserConnections200ApplicationJSON;
}
