import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * transactionsclusters
 */
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of results
     */
    total?: number;
    transactionsclusters: shared.TransactionsCluster[];
}
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * transactionsclusters
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters200ApplicationJSONObject?: GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclusters200ApplicationJSON;
}
