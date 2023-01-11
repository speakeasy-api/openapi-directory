import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAllSnapshotsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_type" })
  resourceType?: shared.Onev21account1keysGetParameters1Enum;
}


export class ListAllSnapshots200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllSnapshots200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllSnapshots200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllSnapshots200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllSnapshots200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}

export enum ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum {
    Droplet = "droplet",
    Volume = "volume"
}


export class ListAllSnapshots200ApplicationJsonSnapshots extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=min_disk_size" })
  minDiskSize: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions: string[];

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType: ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags: string[];
}


export class ListAllSnapshots200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListAllSnapshots200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListAllSnapshots200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=snapshots", elemType: ListAllSnapshots200ApplicationJsonSnapshots })
  snapshots?: ListAllSnapshots200ApplicationJsonSnapshots[];
}


export class ListAllSnapshots401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAllSnapshotsQueryParams;
}


export class ListAllSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllSnapshots200ApplicationJSONObject?: ListAllSnapshots200ApplicationJson;

  @SpeakeasyMetadata()
  listAllSnapshots401ApplicationJSONObject?: ListAllSnapshots401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
