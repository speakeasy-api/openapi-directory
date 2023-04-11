import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectorsIdConnectorRequest extends SpeakeasyBase {
    expand?: string;
    idConnector: number;
}
export declare class GetConnectorsIdConnectorResponse extends SpeakeasyBase {
    /**
     * Successful GET on Connector resource
     */
    connector?: shared.Connector;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
