import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAnApiVersionRequest extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetAnApiVersion200ApplicationJSONVersion extends SpeakeasyBase {
    api?: string;
    createdAt?: string;
    createdBy?: string;
    id?: string;
    name?: string;
    schema?: string[];
    updatedAt?: string;
    updatedBy?: string;
}
/**
 * Get an API version
 */
export declare class GetAnApiVersion200ApplicationJSON extends SpeakeasyBase {
    version?: GetAnApiVersion200ApplicationJSONVersion;
}
export declare class GetAnApiVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get an API version
     */
    getAnApiVersion200ApplicationJSONObject?: GetAnApiVersion200ApplicationJSON;
}
