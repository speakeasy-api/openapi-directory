import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientPhysicalExamsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientPhysicalExamsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// PatientPhysicalExamsList200ApplicationJson
/** 
 * Paginated Result
**/
export class PatientPhysicalExamsList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.PatientPhysicalExam })
  data?: shared.PatientPhysicalExam[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class PatientPhysicalExamsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PatientPhysicalExamsListQueryParams;

  @SpeakeasyMetadata()
  security: PatientPhysicalExamsListSecurity;
}


export class PatientPhysicalExamsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patientPhysicalExamsList200ApplicationJSONObject?: PatientPhysicalExamsList200ApplicationJson;
}
