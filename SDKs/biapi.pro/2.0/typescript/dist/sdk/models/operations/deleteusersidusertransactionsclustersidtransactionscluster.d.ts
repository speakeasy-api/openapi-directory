import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUsersIdUserTransactionsclustersIdTransactionsclusterRequest extends SpeakeasyBase {
    expand?: string;
    idTransactionscluster: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class DeleteUsersIdUserTransactionsclustersIdTransactionsclusterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful DELETE on TransactionsCluster resource
     */
    transactionsCluster?: shared.TransactionsCluster;
}
