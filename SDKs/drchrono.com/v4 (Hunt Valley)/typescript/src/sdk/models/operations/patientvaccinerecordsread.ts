import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientVaccineRecordsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientVaccineRecordsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cvx_code" })
  cvxCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class PatientVaccineRecordsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientVaccineRecordsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientVaccineRecordsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: PatientVaccineRecordsReadQueryParams;

  @SpeakeasyMetadata()
  security: PatientVaccineRecordsReadSecurity;
}


export class PatientVaccineRecordsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientVaccineRecord?: shared.PatientVaccineRecord;

  @SpeakeasyMetadata()
  statusCode: number;
}
