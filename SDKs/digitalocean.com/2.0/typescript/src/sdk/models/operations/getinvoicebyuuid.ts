import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInvoiceByUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice_uuid" })
  invoiceUuid: string;
}


export class GetInvoiceByUuid200ApplicationJsonInvoiceItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=duration_unit" })
  durationUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=group_description" })
  groupDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: string;

  @SpeakeasyMetadata({ data: "json, name=project_name" })
  projectName?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_id" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_uuid" })
  resourceUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;
}


export class GetInvoiceByUuid200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: string;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class GetInvoiceByUuid200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;
}


export class GetInvoiceByUuid200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: any;
}


// GetInvoiceByUuid200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class GetInvoiceByUuid200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class GetInvoiceByUuid200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoice_items", elemType: GetInvoiceByUuid200ApplicationJsonInvoiceItems })
  invoiceItems?: GetInvoiceByUuid200ApplicationJsonInvoiceItems[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: GetInvoiceByUuid200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: GetInvoiceByUuid200ApplicationJsonMeta;
}


export class GetInvoiceByUuid401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetInvoiceByUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInvoiceByUuidPathParams;
}


export class GetInvoiceByUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getInvoiceByUuid200ApplicationJSONObject?: GetInvoiceByUuid200ApplicationJson;

  @SpeakeasyMetadata()
  getInvoiceByUuid401ApplicationJSONObject?: GetInvoiceByUuid401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
