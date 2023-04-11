import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequestBody extends SpeakeasyBase {
    /**
     * if false, transaction isn't considered in analyzisis endpoints (like /balances)
     */
    active?: boolean;
    /**
     * change application date of the transaction
     */
    applicationDate?: Date;
    /**
     * change comment
     */
    comment?: string;
    /**
     * ID of the associated category
     */
    idCategory?: number;
    /**
     * user rewording of the transaction
     */
    wording?: string;
}
export declare class PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequest extends SpeakeasyBase {
    requestBody?: PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionRequestBody;
    expand?: string;
    idAccount: number;
    idConnection: number;
    idTransaction: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PutUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful PUT on Transaction resource
     */
    transaction?: shared.Transaction;
}
