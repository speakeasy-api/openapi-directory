import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateAnApiVersionRequestBodyVersion extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateAnApiVersionRequestBody extends SpeakeasyBase {
    version?: UpdateAnApiVersionRequestBodyVersion;
}
export declare class UpdateAnApiVersionRequest extends SpeakeasyBase {
    requestBody?: UpdateAnApiVersionRequestBody;
    apiId: string;
    apiVersionId: string;
}
export declare class UpdateAnApiVersion200ApplicationJSONVersion extends SpeakeasyBase {
    api?: string;
    createdAt?: string;
    createdBy?: string;
    id?: string;
    name?: string;
    updatedAt?: string;
    updatedBy?: string;
}
/**
 * Update an API version
 */
export declare class UpdateAnApiVersion200ApplicationJSON extends SpeakeasyBase {
    version?: UpdateAnApiVersion200ApplicationJSONVersion;
}
export declare class UpdateAnApiVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Update an API version
     */
    updateAnApiVersion200ApplicationJSONObject?: UpdateAnApiVersion200ApplicationJSON;
}
