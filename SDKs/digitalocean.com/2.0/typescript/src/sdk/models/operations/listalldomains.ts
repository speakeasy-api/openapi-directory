import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAllDomains200ApplicationJsonDomainsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "json, name=zone_file" })
  zoneFile?: string;
}


export class ListAllDomains200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllDomains200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllDomains200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllDomains200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllDomains200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListAllDomains200ApplicationJsonOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: ListAllDomains200ApplicationJsonDomainsOutput })
  domains: ListAllDomains200ApplicationJsonDomainsOutput[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListAllDomains200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListAllDomains200ApplicationJsonMeta;
}


export class ListAllDomains401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllDomainsResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllDomains200ApplicationJSONObject?: ListAllDomains200ApplicationJsonOutput;

  @SpeakeasyMetadata()
  listAllDomains401ApplicationJSONObject?: ListAllDomains401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
