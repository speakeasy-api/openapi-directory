import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllSizesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListAllSizes200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllSizes200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllSizes200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllSizes200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAllSizes200ApplicationJson extends SpeakeasyBase {
    links?: ListAllSizes200ApplicationJsonLinks;
    meta: ListAllSizes200ApplicationJsonMeta;
    sizes: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize[];
}
export declare class ListAllSizes401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllSizesRequest extends SpeakeasyBase {
    queryParams: ListAllSizesQueryParams;
}
export declare class ListAllSizesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllSizes200ApplicationJSONObject?: ListAllSizes200ApplicationJson;
    listAllSizes401ApplicationJSONObject?: ListAllSizes401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
