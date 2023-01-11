import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllActionsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListAllActions200ApplicationJsonActionsRegion extends SpeakeasyBase {
    available: boolean;
    features: any;
    name: string;
    sizes: any;
    slug: string;
}
export declare enum ListAllActions200ApplicationJsonActionsStatusEnum {
    InProgress = "in-progress",
    Completed = "completed",
    Errored = "errored"
}
export declare class ListAllActions200ApplicationJsonActions extends SpeakeasyBase {
    completedAt?: Date;
    id?: number;
    region?: ListAllActions200ApplicationJsonActionsRegion;
    regionSlug?: Record<string, any>;
    resourceId?: number;
    resourceType?: string;
    startedAt?: Date;
    status?: ListAllActions200ApplicationJsonActionsStatusEnum;
    type?: string;
}
export declare class ListAllActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllActions200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllActions200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAllActions200ApplicationJson extends SpeakeasyBase {
    actions?: ListAllActions200ApplicationJsonActions[];
    links?: ListAllActions200ApplicationJsonLinks;
    meta: ListAllActions200ApplicationJsonMeta;
}
export declare class ListAllActions401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllActionsRequest extends SpeakeasyBase {
    queryParams: ListAllActionsQueryParams;
}
export declare class ListAllActionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllActions200ApplicationJSONObject?: ListAllActions200ApplicationJson;
    listAllActions401ApplicationJSONObject?: ListAllActions401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
