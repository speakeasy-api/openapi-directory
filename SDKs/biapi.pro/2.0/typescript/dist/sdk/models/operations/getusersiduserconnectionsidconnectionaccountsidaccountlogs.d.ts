import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsRequest extends SpeakeasyBase {
    expand?: string;
    idAccount: number;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
    /**
     * limit number of results
     */
    limit?: number;
    /**
     * maximum (inclusive) date
     */
    maxDate?: Date;
    /**
     * minimal (inclusive) date
     */
    minDate?: Date;
    /**
     * offset of first result
     */
    offset?: number;
}
/**
 * accountlogs
 */
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs200ApplicationJSON extends SpeakeasyBase {
    accountlogs: shared.AccountLog[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * accountlogs
     */
    getUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs200ApplicationJSONObject?: GetUsersIdUserConnectionsIdConnectionAccountsIdAccountLogs200ApplicationJSON;
}
