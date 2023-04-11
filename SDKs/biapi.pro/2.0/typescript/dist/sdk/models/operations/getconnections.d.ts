import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectionsRequest extends SpeakeasyBase {
    expand?: string;
}
/**
 * connections
 */
export declare class GetConnections200ApplicationJSON extends SpeakeasyBase {
    connections: shared.Connection[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connections
     */
    getConnections200ApplicationJSONObject?: GetConnections200ApplicationJSON;
}
