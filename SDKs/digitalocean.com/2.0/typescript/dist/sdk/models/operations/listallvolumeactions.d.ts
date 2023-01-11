import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllVolumeActionsPathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare class ListAllVolumeActionsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListAllVolumeActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllVolumeActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllVolumeActions200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllVolumeActions200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAllVolumeActions200ApplicationJson extends SpeakeasyBase {
    actions?: shared.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction[];
    links?: ListAllVolumeActions200ApplicationJsonLinks;
    meta: ListAllVolumeActions200ApplicationJsonMeta;
}
export declare class ListAllVolumeActions401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllVolumeActionsRequest extends SpeakeasyBase {
    pathParams: ListAllVolumeActionsPathParams;
    queryParams: ListAllVolumeActionsQueryParams;
}
export declare class ListAllVolumeActionsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllVolumeActions200ApplicationJSONObject?: ListAllVolumeActions200ApplicationJson;
    listAllVolumeActions401ApplicationJSONObject?: ListAllVolumeActions401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
