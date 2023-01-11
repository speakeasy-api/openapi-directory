import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDropletActionsPathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class ListDropletActionsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListDropletActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListDropletActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListDropletActions200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListDropletActions200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListDropletActions200ApplicationJson extends SpeakeasyBase {
    actions?: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[];
    links?: ListDropletActions200ApplicationJsonLinks;
    meta: ListDropletActions200ApplicationJsonMeta;
}
export declare class ListDropletActions401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDropletActionsRequest extends SpeakeasyBase {
    pathParams: ListDropletActionsPathParams;
    queryParams: ListDropletActionsQueryParams;
}
export declare class ListDropletActionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDropletActions200ApplicationJSONObject?: ListDropletActions200ApplicationJson;
    listDropletActions401ApplicationJSONObject?: ListDropletActions401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
