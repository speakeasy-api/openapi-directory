import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDropletSnapshotsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class ListDropletSnapshotsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListDropletSnapshots200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListDropletSnapshots200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListDropletSnapshots200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListDropletSnapshots200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListDropletSnapshots200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListDropletSnapshots200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListDropletSnapshots200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListDropletSnapshots200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems })
  snapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems[];
}


export class ListDropletSnapshots401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDropletSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDropletSnapshotsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDropletSnapshotsQueryParams;
}


export class ListDropletSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDropletSnapshots200ApplicationJSONObject?: ListDropletSnapshots200ApplicationJson;

  @SpeakeasyMetadata()
  listDropletSnapshots401ApplicationJSONObject?: ListDropletSnapshots401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
