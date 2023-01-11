import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAllVolumeActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volume_id" })
  volumeId: string;
}


export class ListAllVolumeActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListAllVolumeActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllVolumeActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllVolumeActions200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllVolumeActions200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllVolumeActions200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListAllVolumeActions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction })
  actions?: shared.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListAllVolumeActions200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListAllVolumeActions200ApplicationJsonMeta;
}


export class ListAllVolumeActions401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllVolumeActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListAllVolumeActionsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAllVolumeActionsQueryParams;
}


export class ListAllVolumeActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllVolumeActions200ApplicationJSONObject?: ListAllVolumeActions200ApplicationJson;

  @SpeakeasyMetadata()
  listAllVolumeActions401ApplicationJSONObject?: ListAllVolumeActions401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
