import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListVpcMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vpc_id" })
  vpcId: string;
}


export class ListVpcMembersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_type" })
  resourceType?: string;
}


export class ListVpcMembers200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListVpcMembers200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListVpcMembers200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


export class ListVpcMembers200ApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=urn" })
  urn?: string;
}


// ListVpcMembers200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListVpcMembers200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListVpcMembers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListVpcMembers200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=members", elemType: ListVpcMembers200ApplicationJsonMembers })
  members?: ListVpcMembers200ApplicationJsonMembers[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListVpcMembers200ApplicationJsonMeta;
}


export class ListVpcMembers401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListVpcMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListVpcMembersPathParams;

  @SpeakeasyMetadata()
  queryParams: ListVpcMembersQueryParams;
}


export class ListVpcMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listVpcMembers200ApplicationJSONObject?: ListVpcMembers200ApplicationJson;

  @SpeakeasyMetadata()
  listVpcMembers401ApplicationJSONObject?: ListVpcMembers401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
