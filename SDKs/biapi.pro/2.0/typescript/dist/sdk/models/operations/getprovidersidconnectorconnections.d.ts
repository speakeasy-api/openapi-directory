import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProvidersIdConnectorConnectionsRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
    /**
     * the length of the connection subset
     */
    range?: number;
}
/**
 * connections
 */
export declare class GetProvidersIdConnectorConnections200ApplicationJSON extends SpeakeasyBase {
    connections: shared.Connection[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetProvidersIdConnectorConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connections
     */
    getProvidersIdConnectorConnections200ApplicationJSONObject?: GetProvidersIdConnectorConnections200ApplicationJSON;
}
