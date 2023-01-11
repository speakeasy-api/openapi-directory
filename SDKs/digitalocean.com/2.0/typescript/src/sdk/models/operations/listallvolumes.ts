import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAllVolumesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
}


export class ListAllVolumes200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllVolumes200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllVolumes200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllVolumes200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllVolumes200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


// ListAllVolumes200ApplicationJsonVolumesRegion
/** 
 * The region that the block storage volume is located in. When setting a region, the value should be the slug identifier for the region. When you query a block storage volume, the entire region object will be returned.
**/
export class ListAllVolumes200ApplicationJsonVolumesRegion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available: boolean;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sizes" })
  sizes: any;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}


export class ListAllVolumes200ApplicationJsonVolumes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=filesystem_label" })
  filesystemLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=filesystem_type" })
  filesystemType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: ListAllVolumes200ApplicationJsonVolumesRegion;

  @SpeakeasyMetadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class ListAllVolumes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListAllVolumes200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListAllVolumes200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: ListAllVolumes200ApplicationJsonVolumes })
  volumes: ListAllVolumes200ApplicationJsonVolumes[];
}


export class ListAllVolumes401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllVolumesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAllVolumesQueryParams;
}


export class ListAllVolumesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllVolumes200ApplicationJSONObject?: ListAllVolumes200ApplicationJson;

  @SpeakeasyMetadata()
  listAllVolumes401ApplicationJSONObject?: ListAllVolumes401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
