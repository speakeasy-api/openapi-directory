import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProjectResourcesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class ListProjectResources200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListProjectResources200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListProjectResources200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListProjectResources200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
/**
 * The links object contains the `self` object, which contains the resource relationship.
**/
export declare class ListProjectResources200ApplicationJsonResourcesLinks extends SpeakeasyBase {
    self?: string;
}
export declare enum ListProjectResources200ApplicationJsonResourcesStatusEnum {
    Ok = "ok",
    NotFound = "not_found",
    Assigned = "assigned",
    AlreadyAssigned = "already_assigned",
    ServiceDown = "service_down"
}
export declare class ListProjectResources200ApplicationJsonResources extends SpeakeasyBase {
    assignedAt?: Date;
    links?: ListProjectResources200ApplicationJsonResourcesLinks;
    status?: ListProjectResources200ApplicationJsonResourcesStatusEnum;
    urn?: string;
}
export declare class ListProjectResources200ApplicationJson extends SpeakeasyBase {
    links?: ListProjectResources200ApplicationJsonLinks;
    meta: ListProjectResources200ApplicationJsonMeta;
    resources?: ListProjectResources200ApplicationJsonResources[];
}
export declare class ListProjectResources401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListProjectResourcesRequest extends SpeakeasyBase {
    pathParams: ListProjectResourcesPathParams;
}
export declare class ListProjectResourcesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listProjectResources200ApplicationJSONObject?: ListProjectResources200ApplicationJson;
    listProjectResources401ApplicationJSONObject?: ListProjectResources401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
