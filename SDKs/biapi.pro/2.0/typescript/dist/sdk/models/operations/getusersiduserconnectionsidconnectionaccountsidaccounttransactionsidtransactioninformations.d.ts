import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    idConnection: number;
    idTransaction: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * transactioninformations
 */
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of results
     */
    total?: number;
    transactioninformations: shared.TransactionInformation[];
}
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * transactioninformations
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations200ApplicationJSONObject?: GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformations200ApplicationJSON;
}
