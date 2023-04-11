import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    idConnection: number;
    idTransaction: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful PUT on TransactionInformation resource
     */
    transactionInformation?: shared.TransactionInformation;
}
