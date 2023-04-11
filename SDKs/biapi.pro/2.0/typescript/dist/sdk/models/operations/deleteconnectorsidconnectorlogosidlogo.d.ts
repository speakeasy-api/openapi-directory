import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteConnectorsIdConnectorLogosIdLogoRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
    idLogo: number;
}
export declare class DeleteConnectorsIdConnectorLogosIdLogoResponse extends SpeakeasyBase {
    /**
     * Successful DELETE on ConnectorLogo resource
     */
    connectorLogo?: shared.ConnectorLogo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
