import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientRiskAssessmentsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientRiskAssessmentsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientRiskAssessmentsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientRiskAssessmentsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientRiskAssessmentsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: PatientRiskAssessmentsUpdateQueryParams;

  @SpeakeasyMetadata()
  security: PatientRiskAssessmentsUpdateSecurity;
}


export class PatientRiskAssessmentsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
