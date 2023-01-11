import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllSnapshotsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    resourceType?: shared.Onev21account1keysGetParameters1Enum;
}
export declare class ListAllSnapshots200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllSnapshots200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllSnapshots200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllSnapshots200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare enum ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum {
    Droplet = "droplet",
    Volume = "volume"
}
export declare class ListAllSnapshots200ApplicationJsonSnapshots extends SpeakeasyBase {
    createdAt: Date;
    id: string;
    minDiskSize: number;
    name: string;
    regions: string[];
    resourceId: string;
    resourceType: ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum;
    sizeGigabytes: number;
    tags: string[];
}
export declare class ListAllSnapshots200ApplicationJson extends SpeakeasyBase {
    links?: ListAllSnapshots200ApplicationJsonLinks;
    meta: ListAllSnapshots200ApplicationJsonMeta;
    snapshots?: ListAllSnapshots200ApplicationJsonSnapshots[];
}
export declare class ListAllSnapshots401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllSnapshotsRequest extends SpeakeasyBase {
    queryParams: ListAllSnapshotsQueryParams;
}
export declare class ListAllSnapshotsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllSnapshots200ApplicationJSONObject?: ListAllSnapshots200ApplicationJson;
    listAllSnapshots401ApplicationJSONObject?: ListAllSnapshots401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
