import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateApiRequestBodyApi extends SpeakeasyBase {
    description?: string;
    name?: string;
    summary?: string;
}
export declare class CreateApiRequestBody extends SpeakeasyBase {
    api?: CreateApiRequestBodyApi;
}
export declare class CreateApiRequest extends SpeakeasyBase {
    requestBody?: CreateApiRequestBody;
    workspace?: string;
}
export declare class CreateApi200ApplicationJSONApi extends SpeakeasyBase {
    createdAt?: string;
    createdBy?: string;
    description?: string;
    id?: string;
    name?: string;
    summary?: string;
    updatedAt?: string;
}
/**
 * Create API
 */
export declare class CreateApi200ApplicationJSON extends SpeakeasyBase {
    api?: CreateApi200ApplicationJSONApi;
}
export declare class CreateApiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create API
     */
    createApi200ApplicationJSONObject?: CreateApi200ApplicationJSON;
}
