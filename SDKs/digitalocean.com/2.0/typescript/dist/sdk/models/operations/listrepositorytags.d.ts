import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRepositoryTagsPathParams extends SpeakeasyBase {
    registryName: string;
    repositoryName: string;
}
export declare class ListRepositoryTagsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListRepositoryTags200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListRepositoryTags200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListRepositoryTags200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListRepositoryTags200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListRepositoryTags200ApplicationJson extends SpeakeasyBase {
    links?: ListRepositoryTags200ApplicationJsonLinks;
    meta: ListRepositoryTags200ApplicationJsonMeta;
    tags?: shared.Onev21registry1Percent7BregistryNamePercent7DGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesRepositoriesItemsPropertiesLatestTag[];
}
export declare class ListRepositoryTags401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListRepositoryTagsRequest extends SpeakeasyBase {
    pathParams: ListRepositoryTagsPathParams;
    queryParams: ListRepositoryTagsQueryParams;
}
export declare class ListRepositoryTagsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listRepositoryTags200ApplicationJSONObject?: ListRepositoryTags200ApplicationJson;
    listRepositoryTags401ApplicationJSONObject?: ListRepositoryTags401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
