import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDropletBackupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class ListDropletBackupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export enum ListDropletBackups200ApplicationJsonBackupsTypeEnum {
    Snapshot = "snapshot",
    Backup = "backup"
}


export class ListDropletBackups200ApplicationJsonBackups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=min_disk_size" })
  minDiskSize: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions: string[];

  @SpeakeasyMetadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ListDropletBackups200ApplicationJsonBackupsTypeEnum;
}


export class ListDropletBackups200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListDropletBackups200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListDropletBackups200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListDropletBackups200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListDropletBackups200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListDropletBackups200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backups", elemType: ListDropletBackups200ApplicationJsonBackups })
  backups?: ListDropletBackups200ApplicationJsonBackups[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListDropletBackups200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListDropletBackups200ApplicationJsonMeta;
}


export class ListDropletBackups401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDropletBackupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDropletBackupsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDropletBackupsQueryParams;
}


export class ListDropletBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDropletBackups200ApplicationJSONObject?: ListDropletBackups200ApplicationJson;

  @SpeakeasyMetadata()
  listDropletBackups401ApplicationJSONObject?: ListDropletBackups401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
