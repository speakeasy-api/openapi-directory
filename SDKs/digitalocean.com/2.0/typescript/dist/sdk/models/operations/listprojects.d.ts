import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProjects200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListProjects200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListProjects200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListProjects200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare enum ListProjects200ApplicationJsonProjectsEnvironmentEnum {
    Development = "Development",
    Staging = "Staging",
    Production = "Production"
}
export declare class ListProjects200ApplicationJsonProjects extends SpeakeasyBase {
    createdAt?: Date;
    description?: string;
    environment?: ListProjects200ApplicationJsonProjectsEnvironmentEnum;
    id?: string;
    isDefault?: boolean;
    name?: string;
    ownerId?: number;
    ownerUuid?: string;
    purpose?: string;
    updatedAt?: Date;
}
export declare class ListProjects200ApplicationJson extends SpeakeasyBase {
    links?: ListProjects200ApplicationJsonLinks;
    meta: ListProjects200ApplicationJsonMeta;
    projects?: ListProjects200ApplicationJsonProjects[];
}
export declare class ListProjects401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListProjectsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listProjects200ApplicationJSONObject?: ListProjects200ApplicationJson;
    listProjects401ApplicationJSONObject?: ListProjects401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
