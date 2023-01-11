import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllRegionsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListAllRegions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllRegions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllRegions200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllRegions200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAllRegions200ApplicationJson extends SpeakeasyBase {
    links?: ListAllRegions200ApplicationJsonLinks;
    meta: ListAllRegions200ApplicationJsonMeta;
    regions: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion[];
}
export declare class ListAllRegions401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllRegionsRequest extends SpeakeasyBase {
    queryParams: ListAllRegionsQueryParams;
}
export declare class ListAllRegionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllRegions200ApplicationJSONObject?: ListAllRegions200ApplicationJson;
    listAllRegions401ApplicationJSONObject?: ListAllRegions401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
