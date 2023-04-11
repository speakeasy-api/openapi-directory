import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest extends SpeakeasyBase {
    /**
     * display all transactions, including deleted ones
     */
    all?: boolean;
    /**
     * display only deleted transactions
     */
    deleted?: boolean;
    expand?: string;
    idAccount: number;
    /**
     * filter on given category id(s) (comma separated) or "null"
     */
    idCategory?: number;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
    /**
     * filter on income or expenditures
     */
    income?: boolean;
    /**
     * get only transactions updated after the specified datetime
     */
    lastUpdate?: Date;
    /**
     * limit number of results
     */
    limit?: number;
    /**
     * maximum (inclusive) date
     */
    maxDate?: Date;
    /**
     * maximum (inclusive) value
     */
    maxValue?: number;
    /**
     * minimal (inclusive) date
     */
    minDate?: Date;
    /**
     * minimal (inclusive) value
     */
    minValue?: number;
    /**
     * offset of first result
     */
    offset?: number;
    /**
     * search in labels, dates, values and categories
     */
    search?: string;
    /**
     * "XX|-XX" or "±XX"
     */
    value?: string;
    /**
     * filter transactions containing the given string
     */
    wording?: string;
}
/**
 * transactions
 */
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of results
     */
    total?: number;
    transactions: shared.Transaction[];
}
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * transactions
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions200ApplicationJSONObject?: GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactions200ApplicationJSON;
}
