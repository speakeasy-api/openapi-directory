import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProblemsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ProblemsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class ProblemsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ProblemsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProblemsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: ProblemsReadQueryParams;

  @SpeakeasyMetadata()
  security: ProblemsReadSecurity;
}


export class ProblemsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientProblem?: shared.PatientProblem;

  @SpeakeasyMetadata()
  statusCode: number;
}
