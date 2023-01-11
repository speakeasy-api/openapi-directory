import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVolumeSnapshotsPathParams extends SpeakeasyBase {
    volumeId: string;
}
export declare class ListVolumeSnapshotsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListVolumeSnapshots200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListVolumeSnapshots200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListVolumeSnapshots200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListVolumeSnapshots200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListVolumeSnapshots200ApplicationJson extends SpeakeasyBase {
    links?: ListVolumeSnapshots200ApplicationJsonLinks;
    meta: ListVolumeSnapshots200ApplicationJsonMeta;
    snapshots?: shared.Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[];
}
export declare class ListVolumeSnapshots401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListVolumeSnapshotsRequest extends SpeakeasyBase {
    pathParams: ListVolumeSnapshotsPathParams;
    queryParams: ListVolumeSnapshotsQueryParams;
}
export declare class ListVolumeSnapshotsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listVolumeSnapshots200ApplicationJSONObject?: ListVolumeSnapshots200ApplicationJson;
    listVolumeSnapshots401ApplicationJSONObject?: ListVolumeSnapshots401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
