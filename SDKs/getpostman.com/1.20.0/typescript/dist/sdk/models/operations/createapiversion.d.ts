import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateApiVersionRequestBodyVersionSourceRelations extends SpeakeasyBase {
    documentation?: boolean;
    mock?: boolean;
    monitor?: boolean;
}
export declare class CreateApiVersionRequestBodyVersionSource extends SpeakeasyBase {
    id?: string;
    relations?: CreateApiVersionRequestBodyVersionSourceRelations;
    schema?: boolean;
}
export declare class CreateApiVersionRequestBodyVersion extends SpeakeasyBase {
    name?: string;
    source?: CreateApiVersionRequestBodyVersionSource;
}
export declare class CreateApiVersionRequestBody extends SpeakeasyBase {
    version?: CreateApiVersionRequestBodyVersion;
}
export declare class CreateApiVersionRequest extends SpeakeasyBase {
    requestBody?: CreateApiVersionRequestBody;
    apiId: string;
}
export declare class CreateApiVersion200ApplicationJSONVersion extends SpeakeasyBase {
    api?: string;
    id?: string;
    name?: string;
}
/**
 * Create API version
 */
export declare class CreateApiVersion200ApplicationJSON extends SpeakeasyBase {
    version?: CreateApiVersion200ApplicationJSONVersion;
}
export declare class CreateApiVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create API version
     */
    createApiVersion200ApplicationJSONObject?: CreateApiVersion200ApplicationJSON;
}
