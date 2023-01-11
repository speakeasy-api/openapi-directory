import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientInterventionsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientInterventionsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientInterventionsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientInterventionsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientInterventionsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: PatientInterventionsReadQueryParams;

  @SpeakeasyMetadata()
  security: PatientInterventionsReadSecurity;
}


export class PatientInterventionsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientIntervention?: shared.PatientIntervention;

  @SpeakeasyMetadata()
  statusCode: number;
}
