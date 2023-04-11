import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUserConnectionsIdConnectionAccountsRequestBody extends SpeakeasyBase {
    /**
     * balance of account
     */
    balance?: number;
    /**
     * IBAN of account
     */
    iban?: string;
    /**
     * the connection to attach to the account
     */
    idConnection?: number;
    /**
     * the currency of the account (default: 'EUR')
     */
    idCurrency?: string;
    /**
     * name of account
     */
    name: string;
    /**
     * number of account
     */
    number?: string;
}
export declare class PostUsersIdUserConnectionsIdConnectionAccountsRequest extends SpeakeasyBase {
    requestBody: PostUsersIdUserConnectionsIdConnectionAccountsRequestBody;
    expand?: string;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PostUsersIdUserConnectionsIdConnectionAccountsResponse extends SpeakeasyBase {
    /**
     * Successful POST on Account resource
     */
    account?: shared.Account;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
