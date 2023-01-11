import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListImageActionsPathParams extends SpeakeasyBase {
    imageId: number;
}
export declare class ListImageActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListImageActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListImageActions200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListImageActions200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListImageActions200ApplicationJson extends SpeakeasyBase {
    actions?: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[];
    links?: ListImageActions200ApplicationJsonLinks;
    meta: ListImageActions200ApplicationJsonMeta;
}
export declare class ListImageActions401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListImageActionsRequest extends SpeakeasyBase {
    pathParams: ListImageActionsPathParams;
}
export declare class ListImageActionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listImageActions200ApplicationJSONObject?: ListImageActions200ApplicationJson;
    listImageActions401ApplicationJSONObject?: ListImageActions401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
