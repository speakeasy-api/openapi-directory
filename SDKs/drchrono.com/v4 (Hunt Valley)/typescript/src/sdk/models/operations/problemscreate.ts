import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProblemsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class ProblemsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ProblemsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ProblemsCreateQueryParams;

  @SpeakeasyMetadata()
  security: ProblemsCreateSecurity;
}


export class ProblemsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientProblem?: shared.PatientProblem;

  @SpeakeasyMetadata()
  statusCode: number;
}
