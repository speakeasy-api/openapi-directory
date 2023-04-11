import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProvidersIdConnectorLogosMainRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
/**
 * connectorlogos
 */
export declare class GetProvidersIdConnectorLogosMain200ApplicationJSON extends SpeakeasyBase {
    connectorlogos: shared.ConnectorLogo[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetProvidersIdConnectorLogosMainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connectorlogos
     */
    getProvidersIdConnectorLogosMain200ApplicationJSONObject?: GetProvidersIdConnectorLogosMain200ApplicationJSON;
}
