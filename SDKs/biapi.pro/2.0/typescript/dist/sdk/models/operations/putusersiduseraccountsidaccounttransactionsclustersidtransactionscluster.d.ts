import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    idTransactionscluster: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PutUsersIdUserAccountsIdAccountTransactionsclustersIdTransactionsclusterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful PUT on TransactionsCluster resource
     */
    transactionsCluster?: shared.TransactionsCluster;
}
