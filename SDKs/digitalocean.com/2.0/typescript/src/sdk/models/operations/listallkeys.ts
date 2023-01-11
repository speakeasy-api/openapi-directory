import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAllKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListAllKeys200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllKeys200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllKeys200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllKeys200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllKeys200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListAllKeys200ApplicationJsonSshKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey: string;
}


export class ListAllKeys200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListAllKeys200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListAllKeys200ApplicationJsonMeta;

  @SpeakeasyMetadata({ data: "json, name=ssh_keys", elemType: ListAllKeys200ApplicationJsonSshKeys })
  sshKeys?: ListAllKeys200ApplicationJsonSshKeys[];
}


export class ListAllKeys401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAllKeysQueryParams;
}


export class ListAllKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAllKeys200ApplicationJSONObject?: ListAllKeys200ApplicationJson;

  @SpeakeasyMetadata()
  listAllKeys401ApplicationJSONObject?: ListAllKeys401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
