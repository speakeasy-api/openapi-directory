import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientVaccineRecordsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cvx_code" })
  cvxCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class PatientVaccineRecordsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientVaccineRecordsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PatientVaccineRecordsCreateQueryParams;

  @SpeakeasyMetadata()
  security: PatientVaccineRecordsCreateSecurity;
}


export class PatientVaccineRecordsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientVaccineRecord?: shared.PatientVaccineRecord;

  @SpeakeasyMetadata()
  statusCode: number;
}
