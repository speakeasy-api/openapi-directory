import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineItemsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LineItemsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=posted_date" })
  postedDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service_date" })
  serviceDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class LineItemsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class LineItemsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineItemsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: LineItemsReadQueryParams;

  @SpeakeasyMetadata()
  security: LineItemsReadSecurity;
}


export class LineItemsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billingLineItem?: shared.BillingLineItem;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
