import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsclustersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful POST on TransactionsCluster resource
     */
    transactionsCluster?: shared.TransactionsCluster;
}
