import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllVolumesQueryParams extends SpeakeasyBase {
    name?: string;
    page?: number;
    perPage?: number;
    region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
}
export declare class ListAllVolumes200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllVolumes200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllVolumes200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllVolumes200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
/**
 * The region that the block storage volume is located in. When setting a region, the value should be the slug identifier for the region. When you query a block storage volume, the entire region object will be returned.
**/
export declare class ListAllVolumes200ApplicationJsonVolumesRegion extends SpeakeasyBase {
    available: boolean;
    features: any;
    name: string;
    sizes: any;
    slug: string;
}
export declare class ListAllVolumes200ApplicationJsonVolumes extends SpeakeasyBase {
    createdAt?: string;
    description?: string;
    dropletIds?: number[];
    filesystemLabel?: string;
    filesystemType?: string;
    id?: string;
    name?: string;
    region?: ListAllVolumes200ApplicationJsonVolumesRegion;
    sizeGigabytes?: number;
    tags?: string[];
}
export declare class ListAllVolumes200ApplicationJson extends SpeakeasyBase {
    links?: ListAllVolumes200ApplicationJsonLinks;
    meta: ListAllVolumes200ApplicationJsonMeta;
    volumes: ListAllVolumes200ApplicationJsonVolumes[];
}
export declare class ListAllVolumes401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllVolumesRequest extends SpeakeasyBase {
    queryParams: ListAllVolumesQueryParams;
}
export declare class ListAllVolumesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllVolumes200ApplicationJSONObject?: ListAllVolumes200ApplicationJson;
    listAllVolumes401ApplicationJSONObject?: ListAllVolumes401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
