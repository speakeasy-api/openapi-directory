import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AmendmentsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AmendmentsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class AmendmentsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AmendmentsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AmendmentsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: AmendmentsReadQueryParams;

  @SpeakeasyMetadata()
  security: AmendmentsReadSecurity;
}


export class AmendmentsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientAmendment?: shared.PatientAmendment;

  @SpeakeasyMetadata()
  statusCode: number;
}
