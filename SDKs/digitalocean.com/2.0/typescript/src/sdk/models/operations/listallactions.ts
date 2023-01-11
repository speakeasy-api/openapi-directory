import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAllActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListAllActions200ApplicationJsonActionsRegion extends SpeakeasyBase {
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

export enum ListAllActions200ApplicationJsonActionsStatusEnum {
    InProgress = "in-progress",
    Completed = "completed",
    Errored = "errored"
}


export class ListAllActions200ApplicationJsonActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: ListAllActions200ApplicationJsonActionsRegion;

  @SpeakeasyMetadata({ data: "json, name=region_slug" })
  regionSlug?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId?: number;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListAllActions200ApplicationJsonActionsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ListAllActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllActions200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllActions200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllActions200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListAllActions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: ListAllActions200ApplicationJsonActions })
  actions?: ListAllActions200ApplicationJsonActions[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListAllActions200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListAllActions200ApplicationJsonMeta;
}


export class ListAllActions401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAllActionsQueryParams;
}


export class ListAllActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllActions200ApplicationJSONObject?: ListAllActions200ApplicationJson;

  @SpeakeasyMetadata()
  listAllActions401ApplicationJSONObject?: ListAllActions401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
