import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientPhysicalExamsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientPhysicalExamsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientPhysicalExamsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PatientPhysicalExamsCreateQueryParams;

  @SpeakeasyMetadata()
  security: PatientPhysicalExamsCreateSecurity;
}


export class PatientPhysicalExamsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientPhysicalExam?: shared.PatientPhysicalExam;

  @SpeakeasyMetadata()
  statusCode: number;
}
