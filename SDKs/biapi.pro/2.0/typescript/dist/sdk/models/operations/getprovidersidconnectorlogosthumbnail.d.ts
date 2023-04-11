import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProvidersIdConnectorLogosThumbnailRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
/**
 * connectorlogos
 */
export declare class GetProvidersIdConnectorLogosThumbnail200ApplicationJSON extends SpeakeasyBase {
    connectorlogos: shared.ConnectorLogo[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetProvidersIdConnectorLogosThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connectorlogos
     */
    getProvidersIdConnectorLogosThumbnail200ApplicationJSONObject?: GetProvidersIdConnectorLogosThumbnail200ApplicationJSON;
}
