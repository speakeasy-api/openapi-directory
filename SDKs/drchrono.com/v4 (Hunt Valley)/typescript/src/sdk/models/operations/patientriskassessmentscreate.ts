import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientRiskAssessmentsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientRiskAssessmentsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientRiskAssessmentsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PatientRiskAssessmentsCreateQueryParams;

  @SpeakeasyMetadata()
  security: PatientRiskAssessmentsCreateSecurity;
}


export class PatientRiskAssessmentsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientRiskAssessment?: shared.PatientRiskAssessment;

  @SpeakeasyMetadata()
  statusCode: number;
}
