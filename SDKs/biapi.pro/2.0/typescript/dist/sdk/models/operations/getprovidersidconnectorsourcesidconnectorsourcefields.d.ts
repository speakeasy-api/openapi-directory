import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProvidersIdConnectorSourcesIdConnectorSourceFieldsRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
    idConnectorSource: number;
}
/**
 * source_fields
 */
export declare class GetProvidersIdConnectorSourcesIdConnectorSourceFields200ApplicationJSON extends SpeakeasyBase {
    sourceFields: shared.ConnectorSourceField[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetProvidersIdConnectorSourcesIdConnectorSourceFieldsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * source_fields
     */
    getProvidersIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject?: GetProvidersIdConnectorSourcesIdConnectorSourceFields200ApplicationJSON;
}
