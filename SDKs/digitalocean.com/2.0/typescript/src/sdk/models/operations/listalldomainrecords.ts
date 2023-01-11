import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAllDomainRecordsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domain_name" })
  domainName: string;
}


export class ListAllDomainRecordsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.Onev21domains1Percent7BdomainNamePercent7DGetParameters0Enum;
}


export class ListAllDomainRecords200ApplicationJsonDomainRecords extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}


export class ListAllDomainRecords200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllDomainRecords200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllDomainRecords200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllDomainRecords200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllDomainRecords200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListAllDomainRecords200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain_records", elemType: ListAllDomainRecords200ApplicationJsonDomainRecords })
  domainRecords?: ListAllDomainRecords200ApplicationJsonDomainRecords[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListAllDomainRecords200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListAllDomainRecords200ApplicationJsonMeta;
}


export class ListAllDomainRecords401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllDomainRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListAllDomainRecordsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListAllDomainRecordsQueryParams;
}


export class ListAllDomainRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllDomainRecords200ApplicationJSONObject?: ListAllDomainRecords200ApplicationJson;

  @SpeakeasyMetadata()
  listAllDomainRecords401ApplicationJSONObject?: ListAllDomainRecords401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
