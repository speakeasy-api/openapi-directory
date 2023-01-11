import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientRiskAssessmentsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientRiskAssessmentsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// PatientRiskAssessmentsList200ApplicationJson
/** 
 * Paginated Result
**/
export class PatientRiskAssessmentsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.PatientRiskAssessment })
  data?: shared.PatientRiskAssessment[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class PatientRiskAssessmentsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PatientRiskAssessmentsListQueryParams;

  @SpeakeasyMetadata()
  security: PatientRiskAssessmentsListSecurity;
}


export class PatientRiskAssessmentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patientRiskAssessmentsList200ApplicationJSONObject?: PatientRiskAssessmentsList200ApplicationJson;
}
