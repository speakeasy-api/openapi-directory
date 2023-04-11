import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMonitorRelationsRequest extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetMonitorRelations200ApplicationJSONMonitor extends SpeakeasyBase {
    id?: string;
    monitorId?: string;
    name?: string;
    updatedAt?: string;
}
/**
 * Get monitor relations
 */
export declare class GetMonitorRelations200ApplicationJSON extends SpeakeasyBase {
    monitor?: GetMonitorRelations200ApplicationJSONMonitor[];
}
export declare class GetMonitorRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get monitor relations
     */
    getMonitorRelations200ApplicationJSONObject?: GetMonitorRelations200ApplicationJSON;
}
