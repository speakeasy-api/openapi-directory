import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGarbageCollectionsPathParams extends SpeakeasyBase {
    registryName: string;
}
export declare class ListGarbageCollectionsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListGarbageCollections200ApplicationJson extends SpeakeasyBase {
    garbageCollections?: shared.Onev21registry1Percent7BregistryNamePercent7D1garbageCollectionPostResponses201ContentApplication1jsonSchemaPropertiesGarbageCollection[];
}
export declare class ListGarbageCollections401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListGarbageCollectionsRequest extends SpeakeasyBase {
    pathParams: ListGarbageCollectionsPathParams;
    queryParams: ListGarbageCollectionsQueryParams;
}
export declare class ListGarbageCollectionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listGarbageCollections200ApplicationJSONObject?: ListGarbageCollections200ApplicationJson;
    listGarbageCollections401ApplicationJSONObject?: ListGarbageCollections401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
