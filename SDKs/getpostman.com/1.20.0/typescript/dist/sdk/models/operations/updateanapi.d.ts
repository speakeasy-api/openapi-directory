import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateAnApiRequestBodyApi extends SpeakeasyBase {
    description?: string;
    name?: string;
}
export declare class UpdateAnApiRequestBody extends SpeakeasyBase {
    api?: UpdateAnApiRequestBodyApi;
}
export declare class UpdateAnApiRequest extends SpeakeasyBase {
    requestBody?: UpdateAnApiRequestBody;
    apiId: string;
}
export declare class UpdateAnApi200ApplicationJSONApi extends SpeakeasyBase {
    createdAt?: string;
    createdBy?: string;
    description?: string;
    id?: string;
    name?: string;
    summary?: string;
    updatedAt?: string;
}
/**
 * Update an API
 */
export declare class UpdateAnApi200ApplicationJSON extends SpeakeasyBase {
    api?: UpdateAnApi200ApplicationJSONApi;
}
export declare class UpdateAnApiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Update an API
     */
    updateAnApi200ApplicationJSONObject?: UpdateAnApi200ApplicationJSON;
}
