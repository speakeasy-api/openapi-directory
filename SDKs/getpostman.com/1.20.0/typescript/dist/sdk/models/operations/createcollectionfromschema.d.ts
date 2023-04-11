import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateCollectionFromSchemaRequestBodyRelations extends SpeakeasyBase {
    type?: string;
}
export declare class CreateCollectionFromSchemaRequestBody extends SpeakeasyBase {
    name?: string;
    relations?: CreateCollectionFromSchemaRequestBodyRelations[];
}
export declare class CreateCollectionFromSchemaRequest extends SpeakeasyBase {
    requestBody?: CreateCollectionFromSchemaRequestBody;
    apiId: string;
    apiVersionId: string;
    schemaId: string;
    workspace?: string;
}
export declare class CreateCollectionFromSchema200ApplicationJSONCollection extends SpeakeasyBase {
    id?: string;
    uid?: string;
}
export declare class CreateCollectionFromSchema200ApplicationJSONRelations extends SpeakeasyBase {
    id?: string;
    type?: string;
}
/**
 * Create collection from schema
 */
export declare class CreateCollectionFromSchema200ApplicationJSON extends SpeakeasyBase {
    collection?: CreateCollectionFromSchema200ApplicationJSONCollection;
    relations?: CreateCollectionFromSchema200ApplicationJSONRelations[];
}
export declare class CreateCollectionFromSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create collection from schema
     */
    createCollectionFromSchema200ApplicationJSONObject?: CreateCollectionFromSchema200ApplicationJSON;
}
