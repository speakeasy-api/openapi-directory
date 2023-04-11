import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectorsIdConnectorLogosMainRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
/**
 * connectorlogos
 */
export declare class GetConnectorsIdConnectorLogosMain200ApplicationJSON extends SpeakeasyBase {
    connectorlogos: shared.ConnectorLogo[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetConnectorsIdConnectorLogosMainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connectorlogos
     */
    getConnectorsIdConnectorLogosMain200ApplicationJSONObject?: GetConnectorsIdConnectorLogosMain200ApplicationJSON;
}
