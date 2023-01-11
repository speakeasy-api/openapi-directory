import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCertificatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}

export enum ListCertificates200ApplicationJsonCertificatesStateEnum {
    Pending = "pending",
    Verified = "verified",
    Error = "error"
}

export enum ListCertificates200ApplicationJsonCertificatesTypeEnum {
    Custom = "custom",
    LetsEncrypt = "lets_encrypt"
}


export class ListCertificates200ApplicationJsonCertificates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=dns_names" })
  dnsNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=not_after" })
  notAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=sha1_fingerprint" })
  sha1Fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ListCertificates200ApplicationJsonCertificatesStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListCertificates200ApplicationJsonCertificatesTypeEnum;
}


export class ListCertificates200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class ListCertificates200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListCertificates200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// ListCertificates200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListCertificates200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class ListCertificates200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificates", elemType: ListCertificates200ApplicationJsonCertificates })
  certificates?: ListCertificates200ApplicationJsonCertificates[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ListCertificates200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: ListCertificates200ApplicationJsonMeta;
}


export class ListCertificates401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListCertificatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCertificatesQueryParams;
}


export class ListCertificatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listCertificates200ApplicationJSONObject?: ListCertificates200ApplicationJson;

  @SpeakeasyMetadata()
  listCertificates401ApplicationJSONObject?: ListCertificates401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
