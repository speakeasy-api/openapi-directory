import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdUserTransactionsclustersIdTransactionsclusterRequest extends SpeakeasyBase {
    expand?: string;
    idTransactionscluster: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PutUsersIdUserTransactionsclustersIdTransactionsclusterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful PUT on TransactionsCluster resource
     */
    transactionsCluster?: shared.TransactionsCluster;
}
