import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConnectorsIdConnectorLogosRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
export declare class PutConnectorsIdConnectorLogosResponse extends SpeakeasyBase {
    /**
     * Successful PUT on ConnectorLogo resource
     */
    connectorLogo?: shared.ConnectorLogo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
