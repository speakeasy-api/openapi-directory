import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



// ListFloatingIps200ApplicationJsonFloatingIpsRegion
/** 
 * The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.
**/
export class ListFloatingIps200ApplicationJsonFloatingIpsRegion extends SpeakeasyBase {
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


export class ListFloatingIps200ApplicationJsonFloatingIps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droplet" })
  droplet?: any;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: ListFloatingIps200ApplicationJsonFloatingIpsRegion;
}


export class ListFloatingIps200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListFloatingIps200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListFloatingIps200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListFloatingIps200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListFloatingIps200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListFloatingIps200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floating_ips", elemType: ListFloatingIps200ApplicationJsonFloatingIps })
  floatingIps?: ListFloatingIps200ApplicationJsonFloatingIps[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListFloatingIps200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListFloatingIps200ApplicationJsonMeta;
}


export class ListFloatingIps401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListFloatingIpsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listFloatingIps200ApplicationJSONObject?: ListFloatingIps200ApplicationJson;

  @SpeakeasyMetadata()
  listFloatingIps401ApplicationJSONObject?: ListFloatingIps401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
