import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProceduresReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ProceduresReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mu_date" })
  muDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mu_date_range" })
  muDateRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=service_date" })
  serviceDate?: string;
}


export class ProceduresReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ProceduresReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProceduresReadPathParams;

  @SpeakeasyMetadata()
  queryParams: ProceduresReadQueryParams;

  @SpeakeasyMetadata()
  security: ProceduresReadSecurity;
}


export class ProceduresReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billingLineItem?: shared.BillingLineItem;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
