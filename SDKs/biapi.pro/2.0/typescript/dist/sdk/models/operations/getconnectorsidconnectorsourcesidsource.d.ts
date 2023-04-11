import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectorsIdConnectorSourcesIdSourceRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
    idSource: number;
}
export declare class GetConnectorsIdConnectorSourcesIdSourceResponse extends SpeakeasyBase {
    /**
     * Successful GET on ConnectorSource resource
     */
    connectorSource?: shared.ConnectorSource;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
