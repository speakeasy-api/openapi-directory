import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConnectorsIdConnectorLogosIdLogoRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
    idLogo: number;
}
export declare class PutConnectorsIdConnectorLogosIdLogoResponse extends SpeakeasyBase {
    /**
     * Successful PUT on ConnectorLogo resource
     */
    connectorLogo?: shared.ConnectorLogo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
