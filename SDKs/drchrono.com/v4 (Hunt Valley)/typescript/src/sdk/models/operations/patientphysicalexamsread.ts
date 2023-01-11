import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientPhysicalExamsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientPhysicalExamsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientPhysicalExamsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientPhysicalExamsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientPhysicalExamsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: PatientPhysicalExamsReadQueryParams;

  @SpeakeasyMetadata()
  security: PatientPhysicalExamsReadSecurity;
}


export class PatientPhysicalExamsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientPhysicalExam?: shared.PatientPhysicalExam;

  @SpeakeasyMetadata()
  statusCode: number;
}
