import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectorsIdConnectorSourcesRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
/**
 * sources
 */
export declare class GetConnectorsIdConnectorSources200ApplicationJSON extends SpeakeasyBase {
    sources: shared.ConnectorSource[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetConnectorsIdConnectorSourcesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * sources
     */
    getConnectorsIdConnectorSources200ApplicationJSONObject?: GetConnectorsIdConnectorSources200ApplicationJSON;
}
