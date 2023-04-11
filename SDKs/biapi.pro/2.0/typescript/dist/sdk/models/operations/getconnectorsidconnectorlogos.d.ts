import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectorsIdConnectorLogosRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
/**
 * connectorlogos
 */
export declare class GetConnectorsIdConnectorLogos200ApplicationJSON extends SpeakeasyBase {
    connectorlogos: shared.ConnectorLogo[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetConnectorsIdConnectorLogosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connectorlogos
     */
    getConnectorsIdConnectorLogos200ApplicationJSONObject?: GetConnectorsIdConnectorLogos200ApplicationJSON;
}
