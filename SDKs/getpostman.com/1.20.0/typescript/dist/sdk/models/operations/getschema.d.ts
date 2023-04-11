import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSchemaRequest extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
    schemaId: string;
}
export declare class GetSchema200ApplicationJSONSchema extends SpeakeasyBase {
    apiVersion?: string;
    createdAt?: string;
    createdBy?: string;
    id?: string;
    language?: string;
    type?: string;
    updateBy?: string;
    updatedAt?: string;
}
/**
 * Get schema
 */
export declare class GetSchema200ApplicationJSON extends SpeakeasyBase {
    schema?: GetSchema200ApplicationJSONSchema;
}
export declare class GetSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get schema
     */
    getSchema200ApplicationJSONObject?: GetSchema200ApplicationJSON;
}
