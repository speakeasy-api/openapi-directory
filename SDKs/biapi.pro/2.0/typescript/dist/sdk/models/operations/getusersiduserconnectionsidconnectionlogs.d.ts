import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionLogsRequest extends SpeakeasyBase {
    /**
     * UUID of a connector
     */
    connectorUuid?: string;
    /**
     * connections log error filter
     */
    error?: string;
    expand?: string;
    idConnectionPathParameter: number;
    /**
     * ID of a connection
     */
    idConnectionQueryParameter?: number;
    /**
     * ID of a connector
     */
    idConnector?: number;
    /**
     * filter "id" of logs, maximum id to return
     */
    idMax?: number;
    /**
     * ID of a source
     */
    idSource?: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUserPathParameter: string;
    /**
     * ID of a user
     */
    idUserQueryParameter?: number;
    /**
     * limit number of results
     */
    limit?: number;
    /**
     * maximum date
     */
    maxDate?: Date;
    /**
     * minimal date
     */
    minDate?: Date;
    /**
     * offset of first result
     */
    offset?: number;
    /**
     * period to group logs
     */
    period?: string;
}
/**
 * connectionlogs
 */
export declare class GetUsersIdUserConnectionsIdConnectionLogs200ApplicationJSON extends SpeakeasyBase {
    connectionlogs: shared.ConnectionLog[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserConnectionsIdConnectionLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connectionlogs
     */
    getUsersIdUserConnectionsIdConnectionLogs200ApplicationJSONObject?: GetUsersIdUserConnectionsIdConnectionLogs200ApplicationJSON;
}
