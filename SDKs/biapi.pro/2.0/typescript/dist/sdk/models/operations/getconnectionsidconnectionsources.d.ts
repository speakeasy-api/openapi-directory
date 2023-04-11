import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectionsIdConnectionSourcesRequest extends SpeakeasyBase {
    expand?: string;
    idConnection: number;
}
/**
 * sources
 */
export declare class GetConnectionsIdConnectionSources200ApplicationJSON extends SpeakeasyBase {
    sources: shared.ConnectionSource[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetConnectionsIdConnectionSourcesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * sources
     */
    getConnectionsIdConnectionSources200ApplicationJSONObject?: GetConnectionsIdConnectionSources200ApplicationJSON;
}
