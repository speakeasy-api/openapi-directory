import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class DeleteUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful DELETE on Transaction resource
     */
    transaction?: shared.Transaction;
}
