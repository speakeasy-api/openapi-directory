import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCdnEndpointsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListCdnEndpoints200ApplicationJsonEndpoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_domain" })
  customDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class ListCdnEndpoints200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListCdnEndpoints200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListCdnEndpoints200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListCdnEndpoints200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListCdnEndpoints200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListCdnEndpoints200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: ListCdnEndpoints200ApplicationJsonEndpoints })
  endpoints?: ListCdnEndpoints200ApplicationJsonEndpoints[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListCdnEndpoints200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListCdnEndpoints200ApplicationJsonMeta;
}


export class ListCdnEndpoints401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListCdnEndpointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCdnEndpointsQueryParams;
}


export class ListCdnEndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listCdnEndpoints200ApplicationJSONObject?: ListCdnEndpoints200ApplicationJson;

  @SpeakeasyMetadata()
  listCdnEndpoints401ApplicationJSONObject?: ListCdnEndpoints401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
