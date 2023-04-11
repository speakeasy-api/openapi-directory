import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAnApiVersionRequest extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class DeleteAnApiVersion200ApplicationJSONVersion extends SpeakeasyBase {
    id?: string;
}
/**
 * Delete an API version
 */
export declare class DeleteAnApiVersion200ApplicationJSON extends SpeakeasyBase {
    version?: DeleteAnApiVersion200ApplicationJSONVersion;
}
export declare class DeleteAnApiVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Delete an API version
     */
    deleteAnApiVersion200ApplicationJSONObject?: DeleteAnApiVersion200ApplicationJSON;
}
