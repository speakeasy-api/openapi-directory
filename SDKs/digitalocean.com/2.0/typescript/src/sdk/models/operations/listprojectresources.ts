import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListProjectResourcesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}


export class ListProjectResources200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListProjectResources200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListProjectResources200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListProjectResources200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListProjectResources200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


// ListProjectResources200ApplicationJsonResourcesLinks
/** 
 * The links object contains the `self` object, which contains the resource relationship.
**/
export class ListProjectResources200ApplicationJsonResourcesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}

export enum ListProjectResources200ApplicationJsonResourcesStatusEnum {
    Ok = "ok",
    NotFound = "not_found",
    Assigned = "assigned",
    AlreadyAssigned = "already_assigned",
    ServiceDown = "service_down"
}


export class ListProjectResources200ApplicationJsonResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assigned_at" })
  assignedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListProjectResources200ApplicationJsonResourcesLinks;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListProjectResources200ApplicationJsonResourcesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=urn" })
  urn?: string;
}


export class ListProjectResources200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListProjectResources200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListProjectResources200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ListProjectResources200ApplicationJsonResources })
  resources?: ListProjectResources200ApplicationJsonResources[];
}


export class ListProjectResources401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListProjectResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListProjectResourcesPathParams;
}


export class ListProjectResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listProjectResources200ApplicationJSONObject?: ListProjectResources200ApplicationJson;

  @SpeakeasyMetadata()
  listProjectResources401ApplicationJSONObject?: ListProjectResources401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
