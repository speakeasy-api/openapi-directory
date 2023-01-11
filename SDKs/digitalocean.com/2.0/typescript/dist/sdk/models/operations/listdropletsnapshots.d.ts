import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDropletSnapshotsPathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class ListDropletSnapshotsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListDropletSnapshots200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListDropletSnapshots200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListDropletSnapshots200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListDropletSnapshots200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListDropletSnapshots200ApplicationJson extends SpeakeasyBase {
    links?: ListDropletSnapshots200ApplicationJsonLinks;
    meta: ListDropletSnapshots200ApplicationJsonMeta;
    snapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems[];
}
export declare class ListDropletSnapshots401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDropletSnapshotsRequest extends SpeakeasyBase {
    pathParams: ListDropletSnapshotsPathParams;
    queryParams: ListDropletSnapshotsQueryParams;
}
export declare class ListDropletSnapshotsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDropletSnapshots200ApplicationJSONObject?: ListDropletSnapshots200ApplicationJson;
    listDropletSnapshots401ApplicationJSONObject?: ListDropletSnapshots401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
