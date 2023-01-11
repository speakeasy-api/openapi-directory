import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientPaymentsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientPaymentsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class PatientPaymentsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientPaymentsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientPaymentsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: PatientPaymentsReadQueryParams;

  @SpeakeasyMetadata()
  security: PatientPaymentsReadSecurity;
}


export class PatientPaymentsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashPayment?: shared.CashPayment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
