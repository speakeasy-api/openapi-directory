import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * sources
 */
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSources200ApplicationJSON extends SpeakeasyBase {
    sources: shared.ConnectionSource[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSourcesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * sources
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountSources200ApplicationJSONObject?: GetUsersIdUserConnectionsIdConnectionAccountsIdAccountSources200ApplicationJSON;
}
