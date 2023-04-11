import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionSourcesRequest extends SpeakeasyBase {
    expand?: string;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * sources
 */
export declare class GetUsersIdUserConnectionsIdConnectionSources200ApplicationJSON extends SpeakeasyBase {
    sources: shared.ConnectionSource[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserConnectionsIdConnectionSourcesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * sources
     */
    getUsersIdUserConnectionsIdConnectionSources200ApplicationJSONObject?: GetUsersIdUserConnectionsIdConnectionSources200ApplicationJSON;
}
