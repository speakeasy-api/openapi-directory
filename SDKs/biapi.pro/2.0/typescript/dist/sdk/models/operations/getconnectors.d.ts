import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectorsRequest extends SpeakeasyBase {
    expand?: string;
}
/**
 * connectors
 */
export declare class GetConnectors200ApplicationJSON extends SpeakeasyBase {
    connectors: shared.Connector[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetConnectorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * connectors
     */
    getConnectors200ApplicationJSONObject?: GetConnectors200ApplicationJSON;
}
