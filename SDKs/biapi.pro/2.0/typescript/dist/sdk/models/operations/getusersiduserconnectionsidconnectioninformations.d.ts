import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionInformationsRequest extends SpeakeasyBase {
    expand?: string;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * connections
 */
export declare class GetUsersIdUserConnectionsIdConnectionInformations200ApplicationJSON extends SpeakeasyBase {
    connections: shared.Connection[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserConnectionsIdConnectionInformationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connections
     */
    getUsersIdUserConnectionsIdConnectionInformations200ApplicationJSONObject?: GetUsersIdUserConnectionsIdConnectionInformations200ApplicationJSON;
}
