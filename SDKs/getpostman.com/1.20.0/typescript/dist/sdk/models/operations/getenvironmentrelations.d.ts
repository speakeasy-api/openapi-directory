import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEnvironmentRelationsRequest extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetEnvironmentRelations200ApplicationJSONEnvironment extends SpeakeasyBase {
    id?: string;
    name?: string;
    updatedAt?: string;
}
/**
 * Get environment relations
 */
export declare class GetEnvironmentRelations200ApplicationJSON extends SpeakeasyBase {
    environment?: GetEnvironmentRelations200ApplicationJSONEnvironment[];
}
export declare class GetEnvironmentRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get environment relations
     */
    getEnvironmentRelations200ApplicationJSONObject?: GetEnvironmentRelations200ApplicationJSON;
}
