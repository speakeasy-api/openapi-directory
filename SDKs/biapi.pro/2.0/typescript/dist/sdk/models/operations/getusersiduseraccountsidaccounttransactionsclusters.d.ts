import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserAccountsIdAccountTransactionsclustersRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * transactionsclusters
 */
export declare class GetUsersIdUserAccountsIdAccountTransactionsclusters200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of results
     */
    total?: number;
    transactionsclusters: shared.TransactionsCluster[];
}
export declare class GetUsersIdUserAccountsIdAccountTransactionsclustersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * transactionsclusters
     */
    getUsersIdUserAccountsIdAccountTransactionsclusters200ApplicationJSONObject?: GetUsersIdUserAccountsIdAccountTransactionsclusters200ApplicationJSON;
}
