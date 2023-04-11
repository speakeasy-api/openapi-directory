import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserTransactionsclustersRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * transactionsclusters
 */
export declare class GetUsersIdUserTransactionsclusters200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of results
     */
    total?: number;
    transactionsclusters: shared.TransactionsCluster[];
}
export declare class GetUsersIdUserTransactionsclustersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * transactionsclusters
     */
    getUsersIdUserTransactionsclusters200ApplicationJSONObject?: GetUsersIdUserTransactionsclusters200ApplicationJSON;
}
