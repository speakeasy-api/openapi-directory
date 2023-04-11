import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    idConnection: number;
    idInformation: number;
    idTransaction: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountTransactionsIdTransactionInformationsIdInformationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful GET on TransactionInformation resource
     */
    transactionInformation?: shared.TransactionInformation;
}
