import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequestBody extends SpeakeasyBase {
    /**
     * Balance of the account
     */
    balance?: number;
    /**
     * If the account is bookmarked
     */
    bookmarked?: boolean;
    /**
     * If the account is disabled (not synchronized)
     */
    disabled?: boolean;
    /**
     * If the account is displayed
     */
    display?: boolean;
    /**
     * IBAN of the account
     */
    iban?: string;
    /**
     * Label of the account
     */
    name?: string;
    /**
     * Usage of the account : PRIV, ORGA or ASSO
     */
    usage?: string;
}
export declare class PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequest extends SpeakeasyBase {
    requestBody?: PutUsersIdUserConnectionsIdConnectionAccountsIdAccountRequestBody;
    expand?: string;
    idAccount: number;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class PutUsersIdUserConnectionsIdConnectionAccountsIdAccountResponse extends SpeakeasyBase {
    /**
     * Successful PUT on Account resource
     */
    account?: shared.Account;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
