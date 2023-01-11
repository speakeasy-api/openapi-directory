import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientPaymentsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class PatientPaymentsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientPaymentsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PatientPaymentsCreateQueryParams;

  @SpeakeasyMetadata()
  security: PatientPaymentsCreateSecurity;
}


export class PatientPaymentsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashPayment?: shared.CashPayment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
