import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDefaultProjectResources200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListDefaultProjectResources200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListDefaultProjectResources200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListDefaultProjectResources200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
/**
 * The links object contains the `self` object, which contains the resource relationship.
**/
export declare class ListDefaultProjectResources200ApplicationJsonResourcesLinks extends SpeakeasyBase {
    self?: string;
}
export declare enum ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum {
    Ok = "ok",
    NotFound = "not_found",
    Assigned = "assigned",
    AlreadyAssigned = "already_assigned",
    ServiceDown = "service_down"
}
export declare class ListDefaultProjectResources200ApplicationJsonResources extends SpeakeasyBase {
    assignedAt?: Date;
    links?: ListDefaultProjectResources200ApplicationJsonResourcesLinks;
    status?: ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum;
    urn?: string;
}
export declare class ListDefaultProjectResources200ApplicationJson extends SpeakeasyBase {
    links?: ListDefaultProjectResources200ApplicationJsonLinks;
    meta: ListDefaultProjectResources200ApplicationJsonMeta;
    resources?: ListDefaultProjectResources200ApplicationJsonResources[];
}
export declare class ListDefaultProjectResources401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDefaultProjectResourcesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDefaultProjectResources200ApplicationJSONObject?: ListDefaultProjectResources200ApplicationJson;
    listDefaultProjectResources401ApplicationJSONObject?: ListDefaultProjectResources401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
