import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientPaymentLogReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientPaymentLogReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class PatientPaymentLogReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientPaymentLogReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientPaymentLogReadPathParams;

  @SpeakeasyMetadata()
  queryParams: PatientPaymentLogReadQueryParams;

  @SpeakeasyMetadata()
  security: PatientPaymentLogReadSecurity;
}


export class PatientPaymentLogReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashPaymentLog?: shared.CashPaymentLog;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
