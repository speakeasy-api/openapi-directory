import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLogsRequest extends SpeakeasyBase {
    /**
     * UUID of a connector
     */
    connectorUuid?: string;
    /**
     * connections log error filter
     */
    error?: string;
    expand?: string;
    /**
     * ID of a connection
     */
    idConnection?: number;
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
     * ID of a user
     */
    idUser?: number;
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
export declare class GetLogs200ApplicationJSON extends SpeakeasyBase {
    connectionlogs: shared.ConnectionLog[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connectionlogs
     */
    getLogs200ApplicationJSONObject?: GetLogs200ApplicationJSON;
}
