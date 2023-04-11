import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBanksIdConnectorConnectionsRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
    /**
     * methode of selection use between 'diversity' (default), 'cover' and 'type_select'
     */
    method?: string;
    /**
     * Ensure the connection will not have a sync happening for at
     */
    minutesWithoutSync?: number;
    /**
     * the number of requested connections, if applicable by the method
     */
    n?: number;
    /**
     * for 'type_select' method. Each connection requires at least N
     */
    occurences?: number;
    /**
     * specify a source name that should have a null state
     */
    source?: string;
    /**
     * for 'type_select' method. Specific account type id (weboob_type_id) to select
     */
    type?: number;
}
/**
 * connections
 */
export declare class GetBanksIdConnectorConnections200ApplicationJSON extends SpeakeasyBase {
    connections: shared.Connection[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetBanksIdConnectorConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connections
     */
    getBanksIdConnectorConnections200ApplicationJSONObject?: GetBanksIdConnectorConnections200ApplicationJSON;
}
