import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConnectorsIdConnectorSourcesRequestBody extends SpeakeasyBase {
    /**
     * list (json format) of capabilities the sources will be disabled for
     */
    disabledCapabilities?: string;
    /**
     * list (json format) of capabilities the sources will be unavailable for
     */
    unavailableCapabilities?: string;
}
export declare class PutConnectorsIdConnectorSourcesRequest extends SpeakeasyBase {
    requestBody?: PutConnectorsIdConnectorSourcesRequestBody;
    expand?: string;
    idConnector: number;
}
export declare class PutConnectorsIdConnectorSourcesResponse extends SpeakeasyBase {
    /**
     * Successful PUT on ConnectorSource resource
     */
    connectorSource?: shared.ConnectorSource;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
