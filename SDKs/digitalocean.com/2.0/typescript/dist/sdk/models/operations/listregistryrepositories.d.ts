import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRegistryRepositoriesPathParams extends SpeakeasyBase {
    registryName: string;
}
export declare class ListRegistryRepositoriesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListRegistryRepositories200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListRegistryRepositories200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListRegistryRepositories200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListRegistryRepositories200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag extends SpeakeasyBase {
    compressedSizeBytes?: number;
    manifestDigest?: string;
    registryName?: string;
    repositoryName?: string;
    sizeBytes?: number;
    tag?: string;
    updatedAt?: Date;
}
export declare class ListRegistryRepositories200ApplicationJsonRepositories extends SpeakeasyBase {
    latestTag?: ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag;
    name?: string;
    registryName?: string;
    tagCount?: number;
}
export declare class ListRegistryRepositories200ApplicationJson extends SpeakeasyBase {
    links?: ListRegistryRepositories200ApplicationJsonLinks;
    meta: ListRegistryRepositories200ApplicationJsonMeta;
    repositories?: ListRegistryRepositories200ApplicationJsonRepositories[];
}
export declare class ListRegistryRepositories401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListRegistryRepositoriesRequest extends SpeakeasyBase {
    pathParams: ListRegistryRepositoriesPathParams;
    queryParams: ListRegistryRepositoriesQueryParams;
}
export declare class ListRegistryRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listRegistryRepositories200ApplicationJSONObject?: ListRegistryRepositories200ApplicationJson;
    listRegistryRepositories401ApplicationJSONObject?: ListRegistryRepositories401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
