import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectorsIdConnectorLogosThumbnailRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
/**
 * connectorlogos
 */
export declare class GetConnectorsIdConnectorLogosThumbnail200ApplicationJSON extends SpeakeasyBase {
    connectorlogos: shared.ConnectorLogo[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetConnectorsIdConnectorLogosThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connectorlogos
     */
    getConnectorsIdConnectorLogosThumbnail200ApplicationJSONObject?: GetConnectorsIdConnectorLogosThumbnail200ApplicationJSON;
}
