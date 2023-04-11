import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    idConnection: number;
    idTransaction: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful DELETE on TransactionInformation resource
     */
    transactionInformation?: shared.TransactionInformation;
}
