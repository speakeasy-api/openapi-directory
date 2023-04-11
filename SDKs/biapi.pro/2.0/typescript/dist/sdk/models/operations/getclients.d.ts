import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClientsRequest extends SpeakeasyBase {
    expand?: string;
}
/**
 * clients
 */
export declare class GetClients200ApplicationJSON extends SpeakeasyBase {
    clients: shared.Client[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetClientsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * clients
     */
    getClients200ApplicationJSONObject?: GetClients200ApplicationJSON;
}
