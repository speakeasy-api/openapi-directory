import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
    idConnectorSource: number;
}
/**
 * source_fields
 */
export declare class GetConnectorsIdConnectorSourcesIdConnectorSourceFields200ApplicationJSON extends SpeakeasyBase {
    sourceFields: shared.ConnectorSourceField[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetConnectorsIdConnectorSourcesIdConnectorSourceFieldsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * source_fields
     */
    getConnectorsIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject?: GetConnectorsIdConnectorSourcesIdConnectorSourceFields200ApplicationJSON;
}
