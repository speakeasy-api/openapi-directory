import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionAccountsRequest extends SpeakeasyBase {
    expand?: string;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * accounts
 */
export declare class GetUsersIdUserConnectionsIdConnectionAccounts200ApplicationJSON extends SpeakeasyBase {
    accounts: shared.Account[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserConnectionsIdConnectionAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * accounts
     */
    getUsersIdUserConnectionsIdConnectionAccounts200ApplicationJSONObject?: GetUsersIdUserConnectionsIdConnectionAccounts200ApplicationJSON;
}
