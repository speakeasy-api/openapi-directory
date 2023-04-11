import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBanksIdConnectorSourcesIdConnectorSourceFieldsRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
    idConnectorSource: number;
}
/**
 * source_fields
 */
export declare class GetBanksIdConnectorSourcesIdConnectorSourceFields200ApplicationJSON extends SpeakeasyBase {
    sourceFields: shared.ConnectorSourceField[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetBanksIdConnectorSourcesIdConnectorSourceFieldsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * source_fields
     */
    getBanksIdConnectorSourcesIdConnectorSourceFields200ApplicationJSONObject?: GetBanksIdConnectorSourcesIdConnectorSourceFields200ApplicationJSON;
}
