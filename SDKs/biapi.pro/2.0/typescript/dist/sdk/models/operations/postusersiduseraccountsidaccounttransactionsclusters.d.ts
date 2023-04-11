import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUserAccountsIdAccountTransactionsclustersRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PostUsersIdUserAccountsIdAccountTransactionsclustersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful POST on TransactionsCluster resource
     */
    transactionsCluster?: shared.TransactionsCluster;
}
