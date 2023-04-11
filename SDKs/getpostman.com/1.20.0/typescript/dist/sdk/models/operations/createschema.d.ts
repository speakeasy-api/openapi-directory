import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateSchemaRequestBodySchema extends SpeakeasyBase {
    language?: string;
    schema?: string;
    type?: string;
}
export declare class CreateSchemaRequestBody extends SpeakeasyBase {
    schema?: CreateSchemaRequestBodySchema;
}
export declare class CreateSchemaRequest extends SpeakeasyBase {
    requestBody?: CreateSchemaRequestBody;
    apiId: string;
    apiVersionId: string;
}
export declare class CreateSchema200ApplicationJSONSchema extends SpeakeasyBase {
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
 * Create schema
 */
export declare class CreateSchema200ApplicationJSON extends SpeakeasyBase {
    schema?: CreateSchema200ApplicationJSONSchema;
}
export declare class CreateSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create schema
     */
    createSchema200ApplicationJSONObject?: CreateSchema200ApplicationJSON;
}
