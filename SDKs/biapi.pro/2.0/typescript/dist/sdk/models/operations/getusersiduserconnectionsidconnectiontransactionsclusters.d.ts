import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionTransactionsclustersRequest extends SpeakeasyBase {
    expand?: string;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * transactionsclusters
 */
export declare class GetUsersIdUserConnectionsIdConnectionTransactionsclusters200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of results
     */
    total?: number;
    transactionsclusters: shared.TransactionsCluster[];
}
export declare class GetUsersIdUserConnectionsIdConnectionTransactionsclustersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * transactionsclusters
     */
    getUsersIdUserConnectionsIdConnectionTransactionsclusters200ApplicationJSONObject?: GetUsersIdUserConnectionsIdConnectionTransactionsclusters200ApplicationJSON;
}
