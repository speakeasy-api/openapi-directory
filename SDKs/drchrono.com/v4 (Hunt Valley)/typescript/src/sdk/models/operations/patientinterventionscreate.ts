import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientInterventionsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientInterventionsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientInterventionsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PatientInterventionsCreateQueryParams;

  @SpeakeasyMetadata()
  security: PatientInterventionsCreateSecurity;
}


export class PatientInterventionsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientIntervention?: shared.PatientIntervention;

  @SpeakeasyMetadata()
  statusCode: number;
}
