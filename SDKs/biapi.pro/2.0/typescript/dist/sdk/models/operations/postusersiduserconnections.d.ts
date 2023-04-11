import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersIdUserConnectionsRequestBody extends SpeakeasyBase {
    /**
     * optional uuid of the connector (replaces id_connector)
     */
    connectorUuid?: string;
    /**
     * ID of the connector
     */
    idConnector?: number;
}
export declare class PostUsersIdUserConnectionsRequest extends SpeakeasyBase {
    requestBody?: PostUsersIdUserConnectionsRequestBody;
    expand?: string;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
    /**
     * optional comma-separated list of sources to use for the connection synchronization
     */
    source?: string;
}
export declare class PostUsersIdUserConnectionsResponse extends SpeakeasyBase {
    /**
     * Successful POST on Connection resource
     */
    connection?: shared.Connection;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
