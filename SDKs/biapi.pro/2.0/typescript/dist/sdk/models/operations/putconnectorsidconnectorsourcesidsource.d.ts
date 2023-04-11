import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConnectorsIdConnectorSourcesIdSourceRequestBody extends SpeakeasyBase {
    /**
     * the authentication mechanism to use for this connector source
     */
    authMechanism?: string;
    /**
     * to enable or disable connector source
     */
    disabled?: boolean;
    /**
     * list (json format) of capabilities this source will be disabled for
     */
    disabledCapabilities?: string;
    /**
     * to enable or disable the source (can only be edited by BI employees)
     */
    unavailable?: boolean;
    /**
     * list (json format) of capabilities this source will be unavailable for
     */
    unavailableCapabilities?: string;
}
export declare class PutConnectorsIdConnectorSourcesIdSourceRequest extends SpeakeasyBase {
    requestBody?: PutConnectorsIdConnectorSourcesIdSourceRequestBody;
    expand?: string;
    idConnector: number;
    idSource: number;
}
export declare class PutConnectorsIdConnectorSourcesIdSourceResponse extends SpeakeasyBase {
    /**
     * Successful PUT on ConnectorSource resource
     */
    connectorSource?: shared.ConnectorSource;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
