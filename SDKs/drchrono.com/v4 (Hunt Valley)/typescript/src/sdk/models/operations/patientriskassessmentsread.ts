import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientRiskAssessmentsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientRiskAssessmentsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientRiskAssessmentsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientRiskAssessmentsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientRiskAssessmentsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: PatientRiskAssessmentsReadQueryParams;

  @SpeakeasyMetadata()
  security: PatientRiskAssessmentsReadSecurity;
}


export class PatientRiskAssessmentsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientRiskAssessment?: shared.PatientRiskAssessment;

  @SpeakeasyMetadata()
  statusCode: number;
}
