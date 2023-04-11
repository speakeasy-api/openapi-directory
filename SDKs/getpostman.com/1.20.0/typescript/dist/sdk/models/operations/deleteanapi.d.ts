import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAnApiRequest extends SpeakeasyBase {
    apiId: string;
}
export declare class DeleteAnApi200ApplicationJSONApi extends SpeakeasyBase {
    id?: string;
}
/**
 * Delete an API
 */
export declare class DeleteAnApi200ApplicationJSON extends SpeakeasyBase {
    api?: DeleteAnApi200ApplicationJSONApi;
}
export declare class DeleteAnApiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Delete an API
     */
    deleteAnApi200ApplicationJSONObject?: DeleteAnApi200ApplicationJSON;
}
