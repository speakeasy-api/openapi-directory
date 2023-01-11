import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineItemsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=posted_date" })
  postedDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service_date" })
  serviceDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class LineItemsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// LineItemsList200ApplicationJson
/** 
 * Paginated Result
**/
export class LineItemsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.BillingLineItem })
  data?: shared.BillingLineItem[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class LineItemsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LineItemsListQueryParams;

  @SpeakeasyMetadata()
  security: LineItemsListSecurity;
}


export class LineItemsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  lineItemsList200ApplicationJSONObject?: LineItemsList200ApplicationJson;
}
