import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostConnectorsIdConnectorLogosRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
export declare class PostConnectorsIdConnectorLogosResponse extends SpeakeasyBase {
    /**
     * Successful POST on ConnectorLogo resource
     */
    connectorLogo?: shared.ConnectorLogo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
