import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProvidersIdConnectorSourcesRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
/**
 * sources
 */
export declare class GetProvidersIdConnectorSources200ApplicationJSON extends SpeakeasyBase {
    sources: shared.ConnectorSource[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetProvidersIdConnectorSourcesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * sources
     */
    getProvidersIdConnectorSources200ApplicationJSONObject?: GetProvidersIdConnectorSources200ApplicationJSON;
}
