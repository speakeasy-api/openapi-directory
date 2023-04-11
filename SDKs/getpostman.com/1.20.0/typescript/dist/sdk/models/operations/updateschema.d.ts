import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateSchemaRequestBodySchema extends SpeakeasyBase {
    language?: string;
    schema?: string;
    type?: string;
}
export declare class UpdateSchemaRequestBody extends SpeakeasyBase {
    schema?: UpdateSchemaRequestBodySchema;
}
export declare class UpdateSchemaRequest extends SpeakeasyBase {
    requestBody?: UpdateSchemaRequestBody;
    apiId: string;
    apiVersionId: string;
    schemaId: string;
}
export declare class UpdateSchema200ApplicationJSONSchema extends SpeakeasyBase {
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
 * Update schema
 */
export declare class UpdateSchema200ApplicationJSON extends SpeakeasyBase {
    schema?: UpdateSchema200ApplicationJSONSchema;
}
export declare class UpdateSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Update schema
     */
    updateSchema200ApplicationJSONObject?: UpdateSchema200ApplicationJSON;
}
