import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBanksIdConnectorLogosRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
/**
 * connectorlogos
 */
export declare class GetBanksIdConnectorLogos200ApplicationJSON extends SpeakeasyBase {
    connectorlogos: shared.ConnectorLogo[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetBanksIdConnectorLogosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connectorlogos
     */
    getBanksIdConnectorLogos200ApplicationJSONObject?: GetBanksIdConnectorLogos200ApplicationJSON;
}
