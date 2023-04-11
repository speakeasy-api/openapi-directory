import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequestBody extends SpeakeasyBase {
    /**
     * 1 if the transaction should be taken into account by pfm services (default: 1)
     */
    active?: boolean;
    /**
     * 1 if the transaction has already been debited (default: 0)
     */
    coming?: boolean;
    /**
     * date of the transaction
     */
    date: Date;
    /**
     * date on which the transaction has been found for the first time. YYYY-MM-DD HH:MM:SS(default: now)
     */
    dateScraped?: Date;
    /**
     * account of the transaction. If not supplied, it has to be given in the route
     */
    idAccount?: number;
    /**
     * label of the transaction
     */
    originalWording: string;
    /**
     * realisation date of the transaction (default: value of date)
     */
    rdate?: Date;
    /**
     * nature of the transaction (default: new)
     */
    state?: string;
    /**
     * type of the transaction (default: unknown)
     */
    type?: string;
    /**
     * vallue of the transaction
     */
    value: number;
}
export declare class PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequest extends SpeakeasyBase {
    requestBody: PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsRequestBody;
    expand?: string;
    idAccount: number;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PostUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful POST on Transaction resource
     */
    transaction?: shared.Transaction;
}
