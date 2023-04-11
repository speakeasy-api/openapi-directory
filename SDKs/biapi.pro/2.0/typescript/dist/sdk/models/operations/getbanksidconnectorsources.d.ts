import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBanksIdConnectorSourcesRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
/**
 * sources
 */
export declare class GetBanksIdConnectorSources200ApplicationJSON extends SpeakeasyBase {
    sources: shared.ConnectorSource[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetBanksIdConnectorSourcesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * sources
     */
    getBanksIdConnectorSources200ApplicationJSONObject?: GetBanksIdConnectorSources200ApplicationJSON;
}
