import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConnectorsIdConnectorRequestBody extends SpeakeasyBase {
    /**
     * the authentication mechanism to use for this connector
     */
    authMechanism?: string;
    /**
     * to enable  or disable connector (bank or provider)
     */
    hidden?: boolean;
    /**
     * one or several comma separated categories to map to the given connector (or null to map no category)
     */
    idCategories?: string;
    /**
     * Allows you to overload global sync_frequency param
     */
    syncFrequency?: number;
}
export declare class PutConnectorsIdConnectorRequest extends SpeakeasyBase {
    requestBody?: PutConnectorsIdConnectorRequestBody;
    expand?: string;
    idConnector: number;
}
export declare class PutConnectorsIdConnectorResponse extends SpeakeasyBase {
    /**
     * Successful PUT on Connector resource
     */
    connector?: shared.Connector;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
