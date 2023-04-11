import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SingleApiRequest extends SpeakeasyBase {
    apiId: string;
}
export declare class SingleApi200ApplicationJSONApi extends SpeakeasyBase {
    createdAt?: string;
    createdBy?: string;
    description?: string;
    id?: string;
    name?: string;
    summary?: string;
    updatedAt?: string;
}
/**
 * Get single API
 */
export declare class SingleApi200ApplicationJSON extends SpeakeasyBase {
    api?: SingleApi200ApplicationJSONApi;
}
export declare class SingleApiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get single API
     */
    singleApi200ApplicationJSONObject?: SingleApi200ApplicationJSON;
}
