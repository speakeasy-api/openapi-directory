import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDefaultProjectResources200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListDefaultProjectResources200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListDefaultProjectResources200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListDefaultProjectResources200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListDefaultProjectResources200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


// ListDefaultProjectResources200ApplicationJsonResourcesLinks
/** 
 * The links object contains the `self` object, which contains the resource relationship.
**/
export class ListDefaultProjectResources200ApplicationJsonResourcesLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}

export enum ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum {
    Ok = "ok",
    NotFound = "not_found",
    Assigned = "assigned",
    AlreadyAssigned = "already_assigned",
    ServiceDown = "service_down"
}


export class ListDefaultProjectResources200ApplicationJsonResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assigned_at" })
  assignedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListDefaultProjectResources200ApplicationJsonResourcesLinks;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=urn" })
  urn?: string;
}


export class ListDefaultProjectResources200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListDefaultProjectResources200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListDefaultProjectResources200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ListDefaultProjectResources200ApplicationJsonResources })
  resources?: ListDefaultProjectResources200ApplicationJsonResources[];
}


export class ListDefaultProjectResources401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDefaultProjectResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDefaultProjectResources200ApplicationJSONObject?: ListDefaultProjectResources200ApplicationJson;

  @SpeakeasyMetadata()
  listDefaultProjectResources401ApplicationJSONObject?: ListDefaultProjectResources401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
